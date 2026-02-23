<?php

namespace App\Http\Controllers\Admin\System;

use App\Helpers\Module;
use App\Http\Controllers\Controller;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class ModuleController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Session::put( 'model', $request->model_name );
        $model = Session::get('model');

        if ($request->format() == 'html') {
            return view('layouts.admin_app');
        }
        if ($request->isMethod('get')) {
            return Module::folderPath($model ?? 'Test');
        }
        if ($request->isMethod('post')) {
            return $this->store($request);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkModel(Request $request)
    {
        return Module::check($request);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $model = $request->model_name ?? '';
            $only_model = $request->only_model ?? '';

            if ($this->validateCheck($request)) {

                $ex = str_split($model);
                if ($ex[0] == ucfirst($ex[0])) {

                    // $this->createForm( $request->databases, lcfirst( $model ) );

                    if (Module::createFile($model, $only_model)) {

                        // Database create
                        $this->databaseCreate($request->databases, lcfirst($model));

                        // Form create
                        if (empty($only_model)) {
                            $this->createForm($request->databases, lcfirst($model));
                        }

                        //  genarte index page
                        $this->indexGenarate($request);
                        // view genarate
                        $this->viewGenarate($request);
                        Session::put('model', $model);

                        return response()->json(['message' => 'Module Created Successfully'], 200);
                    } else {
                        return response()->json(['error' => 'Something went wrong, but Some files are created, please clear them and try again!'], 200);
                    }
                } else {
                    return response()->json(['warning' => 'First Letter must be capital'], 200);
                }
            }
        } catch (\Throwable $th) {
            dd($th);

            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    /**
     * Create Database
     *
     * @return \Illuminate\Http\Response
     */
    public function databaseCreate($fields, $table_name, $timestamps = true)
    {
        $snake = Str::snake($table_name, '_');
        $table_name = Str::plural($snake, 2);

        Schema::create($table_name, function (Blueprint $table) use ($fields, $timestamps) {
            $table->id();
            if (count($fields) > 0) {
                $cnt = 0;

                foreach ($fields as $field) {
                    if (in_array($field['type'], ['integer', 'bigInteger', 'tinyInteger'])) {
                        $table->{$field['type']}($field['field_name'], false, false)->length($field['length']);
                    } elseif ($field['type'] == 'enum') {
                        $values = explode(',', $field['length']);
                        $table->{$field['type']}($field['field_name'], $values);
                    } elseif ($field['length'] > 0) {
                        $table->{$field['type']}($field['field_name'])->length($field['length']);
                    } else {
                        $table->{$field['type']}($field['field_name']);
                    }
                    // if ( $d == 0 ) {
                    //     $table->getColumns()[$cnt]->nullable();
                    // }
                    // if ( $field['unsigned'] == 1 ) {
                    //     $table->getColumns()[$cnt]->unsigned();
                    // }
                    // if ( $field['default'] == 1 ) {
                    //     $table->getColumns()[$cnt]->default( $field['default_value'] );
                    // }
                    if (strlen($field['index']) > 0) {
                        switch ($field['index']) {
                            case 'unique':
                                $table->getColumns()[$cnt]->unique();
                                break;
                            case 'index':
                                $table->getColumns()[$cnt]->index();
                                break;
                            case 'primary':
                                $table->getColumns()[$cnt]->primary();
                                break;
                        }
                    }
                    $cnt++;
                }
            }
            if ($timestamps) {
                $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
                $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            }
            $table->enum('status', ['active', 'deactive'])->default('active');
            $table->integer('created_by')->default(1);
            $table->integer('updated_by')->default(1);
            $table->integer('created_ip')->default(1);
            $table->integer('updated_ip')->default(1);
        });

        return 'Table Created';
    }

    /**
     * Create Form
     *
     * @return \Illuminate\Http\Response
     */
    public function createForm($fields, $model)
    {
        $file = base_path("resources/js/views/admin/$model/create.vue");

        $myfile = fopen($file, 'w') or exit('Unable to open file!');

        $params = 'this.$route.params.id';
        $getUrl = '${this.model}/${this.$route.params.id}';
        $toast = '$toast';
        $validate = '$validate';
        $postData = 'this.data';
        $inputs = '';
        $components = '';
        $textArea = '';
        $formForImage = '';
        $imageProvide = '';
        $uploadImage = '';
        $imageData = '';
        $imageField = '';
        $validateRules = '';
        $append = '';
        $modelFileData = '';
        $modelImageData = '';
        $controllerFileData = '';
        $controllerImageData = '';
        $controllerImageUpdateData = '';
        $controllerFileUpdateData = '';
        $controllerFileDeleteData = '';
        $controllerImageDeleteData = '';
        $switchButtonViaForm = false;

        foreach ($fields ?? [] as $key => $field) {
            $fieldRequired = '';
            $imageInputProps = '';

            foreach ($field['validations'] as $validationRules) {
                if ($validationRules['validation_type'] == 'required') {
                    $fieldRequired = $validationRules['validation_type'];
                }

                try {
                    $imageHeight = intval($validationRules['image_height']);
                    if ($imageHeight > 0) {
                        $imageInputProps .= "vHeight='$imageHeight' ";
                    }
                } catch (\Throwable $th) {
                    //
                }

                try {
                    $imageWidth = intval($validationRules['image_width']);
                    if ($imageWidth > 0) {
                        $imageInputProps .= "vWidth='$imageWidth' ";
                    }
                } catch (\Throwable $th) {
                    //
                }

                try {
                    $imageSize = intval($validationRules['image_size']);
                    if ($imageSize > 0) {
                        $imageInputProps .= "vSizeInKb='$imageSize' ";
                    }
                } catch (\Throwable $th) {
                    //
                }
            }

            $req = $fieldRequired ? 'true' : 'false';
            $fieldTitle = Str::headline($field['field_name']);
            $fieldName = "data.{$field['field_name']}";

            if (!empty($field['input_type'])) {
                if ($key != 0) {
                    $inputs .= "\t\t\t\t";
                    $validateRules .= "\t\t";
                }
                if ($field['input_type'] == 'text') {
                    $inputs .= "<Input v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' :req='{$req}' />\n";
                } elseif ($field['input_type'] == 'select') {
                    $inputs .= "<Select title='{$fieldTitle}' v-model='{$fieldName}' field='{$fieldName}' label='name' :reduce='(obj) => obj.id' :options='[]' placeholder='--Select One--' :closeOnSelect='true' :required='{$req}' /> \n";
                } elseif ($field['input_type'] == 'radio') {
                    $inputs .= "<Radio v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' :list=\"[{ value: 'active', title: 'Active' },{ value: 'deactive', title: 'Deactive' }]\" :req='{$req}' col='3'/>\n";
                } elseif ($field['input_type'] == 'switch') {

                    $inputs .= "<Switch v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' on-label='Active' off-label='Deactive' :req='true'></Switch>\n";
                } elseif ($field['input_type'] == 'checkbox') {
                    $inputs .= "<Checkbox v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' :list=\"[{ value: 'active', title: 'Active' },{ value: 'deactive', title: 'Deactive' }]\" :req='{$req}' col='3'/>\n";
                } elseif ($field['input_type'] == 'date') {
                    $fname = str_replace('data.', '', $fieldName);
                    $apnName = Str::snake($fname, '_');
                    $append .= "formData.append('$apnName',this.{$fieldName});";
                    $inputs .= "<date-picker id='date{$key}'  v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' placeholder='{$fieldTitle}' col='2' :req='{$req}'></date-picker>\n";
                } elseif ($field['input_type'] == 'time') {
                    $fname = str_replace('data.', '', $fieldName);
                    $apnName = Str::snake($fname, '_');
                    $append .= "formData.append('$apnName',this.{$fieldName});";
                    $inputs .= "<TimePicker id='{$fieldName}'  v-model='{$fieldName}' field='{$fieldName}' title='{$fieldTitle}' placeholder='{$fieldTitle}' col='3' :req='{$req}' />\n";
                } elseif ($field['input_type'] == 'image') {
                    $switchButtonViaForm = true;

                    $formForImage = "var form = document.getElementById('form'); var formData = new FormData(form);";
                    $postData = 'formData';
                    $uploadImage = 'true';
                    $imageField = "{$field['field_name']}:'',";
                    $imageData = 'image:{}';
                    $imageProvide = 'data: () => this.data, image: this.image';
                    $inputs .= "<File title='{$fieldTitle}' field='{$fieldName}' mime='img' fileClassName='{$fieldName}' $imageInputProps :req='{$req}' />\n";

                    // push controller image upload code
                    $controllerImageData .= 'if ( !empty( $request->file( "' . $field['field_name'] . '" ) ) ) {' .
                        '$data["' . $field['field_name'] . '"] = $this->upload( $request->' . $field['field_name'] . ', "' . $model . '" );' .
                        '}';
                    $controllerImageUpdateData .= 'if ( !empty( $request->file( "' . $field['field_name'] . '" ) ) ) {' .
                        '$oldFile = $this->oldFile($' . $model . '->' . $field['field_name'] . ' );' .
                        'Storage::delete( $oldFile );' .
                        '$data["' . $field['field_name'] . '"] = $this->upload( $request->' . $field['field_name'] . ', "' . $model . '" );' .
                        '}';

                    $multiiamge = 'app("deleteAction")->arrayImages( ' . '$' . $model . '->' . $field['field_name'] . ' );' . "\n";
                    $controllerImageDeleteData .= $multiiamge . '$old = $this->oldFile( ' . '$' . $model . '->' . $field['field_name'] . '  );
						if ( Storage::disk( "public" )->exists( $old ) ) {
							Storage::delete( $old );
						}' . "\n";

                    // push in model code
                    $nModel = Str::title($field['field_name']);
                    $nModel = str_replace('_', '', $nModel);
                    $modelImageData = 'public function get' . $nModel . 'Attribute( $value ) {
							if ( !empty( $value ) ) {
								return url( "" ) . "/public/storage/" . $value;
							}
							return null;
						}';
                } elseif ($field['input_type'] == 'file') {
                    $formForImage = "var form = document.getElementById('form'); var formData = new FormData(form);";
                    $postData = 'formData';
                    $uploadImage = 'true';
                    $imageField .= "{$field['field_name']}:'',";
                    $imageData = 'image:{}';
                    $imageProvide = 'data: () => this.data, image: this.image';
                    $inputs .= "<File title='{$fieldTitle}' field='{$fieldName}' mime='.pdf' fileClassName='{$fieldName}'  :req='{$req}'/>\n";

                    $controllerFileData .= 'if ( !empty( $request->file( "' . $field['field_name'] . '" ) ) ) {' .
                        '$data["' . $field['field_name'] . '"] = $this->upload( $request->' . $field['field_name'] . ', "' . $model . '" );' .
                        '}' . "\n";

                    $controllerFileUpdateData .= 'if ( !empty( $request->file( "' . $field['field_name'] . '" ) ) ) {' .
                        '$oldFile = $this->oldFile( ' . '$' . $model . '->' . $field['field_name'] . ' );' .
                        'Storage::delete( $oldFile );' .
                        '$data["' . $field['field_name'] . '"] = $this->upload( $request->' . $field['field_name'] . ', "' . $model . '" );' .
                        '}' . "\n";

                    $controllerFileDeleteData .= '$old = $this->oldFile( ' . '$' . $model . '->' . $field['field_name'] . '  );
						if ( Storage::disk( "public" )->exists( $old ) ) {
							Storage::delete( $old );
						}' . "\n";

                    // push model code
                    $nModel = Str::title($field['field_name']);
                    $nModel = str_replace('_', '', $nModel);
                    $modelFileData = 'public function get' . $nModel . 'Attribute( $value ) {
							if ( !empty( $value ) ) {
								return url( "" ) . "/public/storage/" . $value;
							}
							return null;
						}';
                } elseif ($field['input_type'] == 'textarea') {
                    $switchButtonViaForm = true;
                    $formForImage = "var form = document.getElementById('form'); var formData = new FormData(form);";
                    $postData = 'formData';
                    $components = 'components: { Editor },';
                    $textArea = "import Editor from '../../../components/Form/CKEditor';";
                    $fname = str_replace('data.', '', $fieldName);
                    $apnName = Str::snake($fname, '_');
                    $append .= "formData.append('$apnName',this.{$fieldName});";
                    $inputs .= "<div class='col-12 mb-3'> <label class='form-label'>$fieldTitle</label> <div class='col-12'> <editor  v-model='{$fieldName}' field='{$fieldName}' :required='{$req}' /></div></div>";
                }

                // Validations Rules
                $validateRules .= $this->validationRules($field['validations'], $fieldName, $fieldTitle);

                // if ( !empty( $field['required'] ) ) {
                //     $validateRules .= "'{$fieldName}': function (value = null) {
                //     return Validator.value(value).required('$fieldTitle is required');
                //     },\n";
                // }
            }
        }

        // push into controller
        $this->pushController(ucfirst($model), $controllerFileData, $controllerImageData, $lineAfterAdd = '// push the insert text');
        $this->pushController(ucfirst($model), $controllerFileUpdateData, $controllerImageUpdateData, $lineAfterAdd = '// push the update text');
        $this->pushModel(ucfirst($model), $modelFileData, $modelImageData, $lineAfterAdd = '// file image push', $modelDateData = false, $lineAfterAddforDate = 'date format');
        $this->pushController(ucfirst($model), $controllerFileDeleteData, $controllerImageUpdateData = "\n", $lineAfterAdd = '// delete');
        $this->pushController(ucfirst($model), $controllerImageDeleteData, $controllerImageUpdateData = "\n", $lineAfterAdd = '// delete');

        // Finally let's inject status.
        $inputs .= "<Switch
                v-model='data.status'
                field='data.status'
                title='status'
                on-label='Active'
                off-label='Deactive'
                :req='true'
            ></Switch>\n";

        if ($switchButtonViaForm) {
            $append .= "formData.append('status',this.data.status);";
        }

        $updateMethodLine = "this.update(this.model, $postData, this.data.id" . (boolval($formForImage) ? ", true);" : ");");

        $txt = "<template>
  <create-form @onSubmit='submit'>
    $inputs
  </create-form>
</template>

<script>
$textArea

const model = '{$model}';

export default {
  $components
  data() {
    return {
      model: model,
      page_title: '',
      data: {{$imageField}},
      $imageData
    };
  },

  provide() {
    return {
      validate: this.validation,
      $imageProvide
    };
  },
  methods: {
    submit: function (e) {
      this.$validate().then((res) => {
        const error = this.validation.countErrors();

        if (error > 0) {
          console.log(this.validation.allErrors());
          this.$toast(
            'You need to fill ' + error + ' more empty mandatory fields',
            'warning'
          );
          return false;
        }

        if (res) {
          $formForImage
          $append
          if (this.data.id) {
            $updateMethodLine
          } else {
            this.store(this.model, $postData);
          }
        }
      });
    },
  },
  created() {
    if ($params) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`$getUrl`);
    } else {
     this.page_title = this.headline(this.model) + ' Create';
    }
  },

  validators: {
    $validateRules
  },
}

</script>";

        fwrite($myfile, $txt);
        fclose($myfile);

        return 'Form Created';
    }

    public function pushController($modelName, $controllerFileData, $controllerImageData, $lineAfterAdd)
    {
        $lines = [];
        foreach (file(base_path('app/Http/Controllers/Admin/' . $modelName . 'Controller.php')) as $line) {
            array_push($lines, $line);

            // then test if the line contains so you dont miss a line
            // because there is a newline of something at the end of it
            if (strpos($line, $lineAfterAdd) !== false) {
                array_push($lines, $controllerFileData);
                array_push($lines, $controllerImageData);
            }
        }
        file_put_contents(base_path('app/Http/Controllers/Admin/' . $modelName . 'Controller.php'), $lines);
    }

    public function pushModel($modelName, $modelFileData, $modelImageData, $lineAfterAdd, $datePushData, $lineAfterAddDate)
    {
        $lines = [];
        foreach (file(base_path('app/Models/' . $modelName . '.php')) as $line) {
            array_push($lines, $line);

            // then test if the line contains so you dont miss a line
            // because there is a newline of something at the end of it
            if (strpos($line, $lineAfterAdd) !== false) {
                array_push($lines, $modelFileData);
                array_push($lines, $modelImageData);
            }
            if (strpos($line, $lineAfterAddDate) !== false) {
                array_push($lines, $datePushData);
            }
        }
        file_put_contents(base_path('app/Models/' . $modelName . '.php'), $lines);
    }

    /*--------------------------------------------
     * VALIDATION
     */
    public function validateCheck($request)
    {
        return $request->validate([
            'model_name' => 'required|alpha|max:255|regex:/^\S*$/u',
        ]);
    }

    /*--------------------------------------------
     * VALIDATION RULES
     *
     */
    protected function validationRules($validateData, $fieldName, $fieldTitle)
    {
        $base = "'{$fieldName}': function (value = null) { return Validator.value(value)";
        $end = ";},\n";
        $fieldnm = str_replace('_', ' ', $fieldTitle);
        $required = ".required('$fieldnm is required')";
        $email = '.email()';
        $number = '.digit()';
        $url = '.url()';

        // all validation rules add in valiRules
        $valiRules = '';
        foreach ($validateData ?? [] as $validate) {
            if ($validate['validation_type'] == 'required') {
                $valiRules .= $required;
            } elseif ($validate['validation_type'] == 'email') {
                $valiRules .= $email;
            } elseif ($validate['validation_type'] == 'number') {
                $valiRules .= $number;
            } elseif ($validate['validation_type'] == 'url') {
                $valiRules .= $url;
            } elseif ($validate['validation_type'] == 'minLength') {
                $minLength = $validate['minLength'] ?? '';
                $valiRules .= ".minLength($minLength)";
            } elseif ($validate['validation_type'] == 'maxLength') {
                $maxLength = $validate['maxLength'] ?? '';
                $valiRules .= ".maxLength($maxLength)";
            } elseif ($validate['validation_type'] == 'fileOrImageSize') {
                $fileSize = intval($validate['fileSize'] ?? 512000);
                $size = $fileSize * 1024;
                $type = $validate['validation_type'] == 'image' ? 'Image' : 'File';
                $valTest = '"' . $type . ' must be smaller than ' . $fileSize . ' kb"';
                $valiRules .= ".custom(function () {

                if (!Validator.isEmpty(value)) {
                    var size = value.size;
                    if (size > $size) {
                    return  $valTest;
                    }
                }
                })";
            } elseif ($validate['validation_type'] == 'image') {
                // for image validatiaon
                $takeImageType = '';
                $takeImageName = '';
                foreach ($validate['image_type'] ?? [] as $image_type) {
                    $takeImageType .= "type !== 'image/$image_type'&&";
                    $takeImageName .= ".$image_type";
                }
                $takeImageType = substr($takeImageType, 0, -2);
                $condition = $takeImageType && $takeImageName ?  "if ($takeImageType) {
                    return 'Image must be of type $takeImageName';
                }" : '';

                $valiRules .= ".custom(function () {
                if ( !value . type ) {
                    return false;
                }
                if (!Validator.isEmpty(value)) {
                var type = value.type;
                $condition
                }
            })";
            } elseif ($validate['validation_type'] == 'file') {
                // For file validation
                $takeFileType = '';
                $takeFileName = '';
                foreach ($validate['file_type'] ?? [] as $file_type) {
                    $takeFileType .= "type !== 'application/$file_type'&&";
                    $takeFileName .= ".$file_type";
                }
                $takeFileType = substr($takeFileType, 0, -2);
                $condition = $takeFileType && $takeFileName ? "if ($takeFileType) {
                    return 'File must be of type $takeFileName';
                }" : '';

                $valiRules .= ".custom(function () {
                if ( !value . type ) {
                    return false;
                }
                if (!Validator.isEmpty(value)) {
                var type = value.type;
                $condition
                }
            })";
            }
        }

        // Concat all rules and added to main validations
        $result = $base . '' . $valiRules . '' . $end;

        return $validateData[0]['validation_type'] != null ? $result : '';
    }

    public function indexGenarate($request)
    {

        $status = '{ field: "status", title: "Status", align: "center" },';

        $modelName = lcfirst($request->model_name);

        $data = "const tableColumns = [$status";

        $excelField = '';
        foreach ($request->databases as $key => $value) {

            if (isset($value['showList'])) {
                if (!empty($value['input_type'])) {
                    if ($value['input_type'] == 'image') {
                        $data .= '{ field: "' . $value['field_name'] . '", title: "' . Str::headline($value['field_name']) . '",  image: true, imgWidth: "30px", align: "center" },';
                    } elseif ($value['input_type'] == 'file') {
                        $data .= '{ field: "' . $value['field_name'] . '", title: "' . Str::headline($value['field_name']) . '",  pdf: true, imgWidth: "30px",  align: "center" },';
                    } else {
                        $data .= '{ field: "' . $value['field_name'] . '", title: "' . Str::headline($value['field_name']) . '"},';
                    }
                }
            }
            // Excel file generate
            $title =
                $excelField .= '"' . Str::headline(str_replace('_', ' ', $value['field_name'])) . '"' . ': "' . $value['field_name'] . '",';
        }
        $data .= '];';

        $file = base_path('resources/js/views/admin/' . $modelName . '/index.vue');

        $myfile = fopen($file, 'w') or exit('Unable to open file!');
        $text = '<template>
  <index-page> </index-page>
</template>

<script>

const model = "' . lcfirst($modelName) . '";

' . $data . '

const json_fields = {
  ' . $excelField . '
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", title: "Title" },
      search_data: {
        pagination: this.$route.query.pagination ?? 10,
        page: this.$route.query.page ?? 1,
        field_name: this.$route.query.field_name ?? "",
        value: this.$route.query.value ?? "",
        status: this.$route.query.status ?? "",
      },
      table: {
        columns: tableColumns,
        routes: {},
        datas: [],
        meta: [],
        links: []
      }
    };
  },

  provide() {
    return {
        validate: this.validation,
        model: this.model,
        fields_name: this.fields_name,
        search_data: this.search_data,
        table: this.table,
        json_fields: this.json_fields,
        search: this.search,
        resetSearchData: this.resetSearchData,
    };
  },

  methods: {
    search() {
      this.get_paginate(this.model, this.search_data);
    },

    resetSearchData() {
        this.search_data.pagination = 10;
        this.search_data.page = 1;
        this.search_data.field_name = "";
        this.search_data.value = "";
        this.search_data.status = "";
    },
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
  },

  validators: {},
};
</script>';
        fwrite($myfile, $text);
        fclose($myfile);

        return 'ok';
    }

    public function moduleDelete(Request $request)
    {

        $model = $request->model;
        File::delete(base_path('app/Http/Controllers/Admin/' . "{$model}Controller.php"));
        File::delete(base_path('app/Models/' . "{$model}.php"));
        // model name convert into lowercase for delete .vue file
        $vueFile = lcfirst($model);
        File::deleteDirectory(base_path('resources/js/views/admin/' . "{$vueFile}"));
        $snake = Str::snake($model, '_');
        $table_name = Str::plural($snake, 2);
        Schema::dropIfExists($table_name);
        $migrationFile = $this->getMigrateFileName($model);

        if (!is_array($migrationFile)) {
            File::delete(base_path('database/migrations/' . "{$migrationFile}"));
        }

        return response()->json(['message' => 'Module Deleted Successfully ']);
    }

    public function getMigrateFileName($table_name)
    {
        $files = scandir(base_path('database/migrations'), 1);
        unset($files[count($files) - 1]);
        unset($files[count($files) - 2]);
        $data = [];
        foreach ($files as $key => $value) {
            $fileTableName = $this->capitalize($table_name);
            $m = explode('_', $value);
            $mCount = count($m);
            unset($m[0]);
            unset($m[1]);
            unset($m[2]);
            unset($m[3]);
            unset($m[4]);
            unset($m[$mCount - 1]);

            if (Str::plural($fileTableName) == str_replace('_', '', Str::title(implode('_', $m)))) {
                return $value;
            }
        }

        return $data;
    }

    public function capitalize($camel)
    {
        $camel = ucfirst($camel);

        return str_replace('_', '', $camel);
    }

    //
    public function viewGenarate($request)
    {
        $modelName = lcfirst($request->model_name);

        $fileColumn = 'fileColumns :[';
        foreach ($request->databases as $key => $value) {
            if ($value['input_type'] == 'image' || $value['input_type'] == 'file') {
                $fileColumn .= '{ field: "' . $value['field_name'] . '", title: "' . Str::headline($value['field_name']) . '" },';
            }
        }

        $fileColumn .= '],';

        $file = base_path('resources/js/views/admin/' . $modelName . '/view.vue');

        $myfile = fopen($file, 'w') or exit('Unable to open file!');
        $text = '<template>
  <view-page> </view-page>
</template>

<script>

const model = "' . lcfirst($request->model_name) . '";

export default {
  data() {
    return {
        page_title: "",
        model: model,
        data: {

        },
        ' . $fileColumn . '
    };
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>';

        fwrite($myfile, $text);
        fclose($myfile);

        return 'ok';
    }

    public function getModules()
    {
        $modelsCollection = Module::getModelsList();
        $models = $modelsCollection->toArray();
        $modelNames = array_map(function ($model) {
            return [
                'name' => basename(str_replace('\\', '/', $model)),
                'base' => $model
            ];
        }, $models);
        return $modelNames;
    }
}
