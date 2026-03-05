<template>
    <create-form @onSubmit="submit">
        <div class="col-lg-12">
            <div class="row custom_row">
                <div class="col-lg-12">
                    <Fieldset class="h-auto">
                        <template v-slot:name>Module Info</template>
                        <template v-slot:content>
                            <Input
                                v-model="data.model_name"
                                field="data.model_name"
                                title="Model Name"
                                :req="true"
                            />

                            <div class="col-lg-4 align-self-center">
                                <div class="form-group">
                                    <label class="form-label opacity-0">
                                        Only Model
                                        <sup class="text-danger">*</sup>
                                    </label>
                                    <div class="check_box">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input shadow-none"
                                                type="checkbox"
                                                v-model="data.only_model"
                                                id="only_model"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="only_model"
                                            >
                                                Only Model
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 text-end">
                                <label class="form-label opacity-0">
                                    Module Delete
                                    <sup class="text-danger">*</sup>
                                </label>
                                <div
                                    class="multiple_fields_actions_btn d-flex justify-content-end align-items-center gap-2"
                                >
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                        type="button"
                                        class="btns delete_one w-auto h-auto px-2 py-2"
                                         data-bs-placement="top" data-bs-title="Delete"  v-x-tooltip

                                    >
                                        <svg
                                            style="
                                                position: relative;
                                                top: -1px;
                                                margin-right: 3px;
                                            "
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-trash"


                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M4 7l16 0"></path>
                                            <path d="M10 11l0 6"></path>
                                            <path d="M14 11l0 6"></path>
                                            <path
                                                d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                            ></path>
                                            <path
                                                d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                            ></path>
                                        </svg>
                                        Module Delete
                                    </button>
                                </div>

                                <!-- module delete modal -->
                                <div
                                    class="modal fade"
                                    id="deleteModal"
                                    tabindex="-1"
                                    aria-labelledby="deleteModalLabel"
                                    aria-hidden="true"
                                >
                                    <div
                                        class="modal-dialog modal-dialog-centered"
                                    >
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5
                                                    class="modal-title text-dark"
                                                    id="deleteModalLabel"
                                                >
                                                    Delete Module
                                                </h5>
                                                <button
                                                    type="button"
                                                    class="btn-close shadow-none"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div class="modal-body">
                                                <div
                                                    class="d-flex align-items-center"
                                                >
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-sm"
                                                        name=""
                                                        @input="
                                                            checkModuleExist
                                                        "
                                                    />

                                                    <div
                                                        class="multiple_fields_actions_btn flex-shrink-0 ms-3"
                                                    >
                                                        <button
                                                            data-bs-toggle="modal"
                                                            style="height: 42px"
                                                            data-bs-target="#deleteModal"
                                                            type="button"
                                                            class="btns delete_one w-auto px-3 py-2"
                                                            @click.prevent="
                                                                deleteModule
                                                            "
                                                            :disabled="
                                                                !deleteButton
                                                            "
                                                        >
                                                            <svg
                                                                style="
                                                                    position: relative;
                                                                    top: -1px;
                                                                    margin-right: 3px;
                                                                "
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" v-x-tooltip
                                                            >
                                                                <path
                                                                    stroke="none"
                                                                    d="M0 0h24v24H0z"
                                                                    fill="none"
                                                                ></path>
                                                                <path
                                                                    d="M4 7l16 0"
                                                                ></path>
                                                                <path
                                                                    d="M10 11l0 6"
                                                                ></path>
                                                                <path
                                                                    d="M14 11l0 6"
                                                                ></path>
                                                                <path
                                                                    d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                                                ></path>
                                                                <path
                                                                    d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                                                ></path>
                                                            </svg>
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                                <p
                                                    class="text-danger mt-2 small text-start"
                                                >
                                                    {{ moduleNotExist }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Fieldset>
                </div>

                <div class="col-lg-12">
                    <Fieldset class="h-auto">
                        <template v-slot:name>Database Design</template>
                        <template v-slot:content>
                            <p class="mb-3">
                                Reminder, the Status and ID will be added
                                automatically & Please validate images/files
                                correctly in File Component.
                            </p>
                            <div
                                class="multiple_options_create table-responsive text-nowrap mt-0"
                                style="min-height: 280px"
                            >
                                <table class="table table-bordered mb-0 mt-0">
                                    <thead>
                                        <tr>
                                            <th>Field Name</th>
                                            <th>Input type</th>
                                            <th>Type</th>
                                            <th>Length</th>
                                            <th>Validation</th>
                                            <th>Index Page</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="data.databases">
                                        <tr
                                            v-for="(db, key) in data.databases"
                                            :key="key"
                                        >
                                            <td style="width: 340px">
                                                <div class="form-group">
                                                    <div
                                                        class="input-group position-relative"
                                                    >
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Enter field name"
                                                            v-model="
                                                                db.field_name
                                                            "
                                                        />
                                                    </div>

                                                    <small class="text-danger d-inline-block fw-medium mt-1">
                                                        {{
                                                            errors[
                                                                `${key}.field_name`
                                                            ]
                                                        }}
                                                    </small>
                                                </div>
                                            </td>
                                            <td style="width: 200px">
                                                <div class="form-group">
                                                    <select
                                                        class="form-select"
                                                        v-model="db.input_type"
                                                    >
                                                        <option value="">
                                                            --Select One--
                                                        </option>
                                                        <option value="text">
                                                            Text
                                                        </option>
                                                        <option value="select">
                                                            Select
                                                        </option>
                                                        <option
                                                            value="textarea"
                                                        >
                                                            Textarea
                                                        </option>
                                                        <option value="switch">
                                                            Switch
                                                        </option>
                                                        <option value="radio">
                                                            Radio
                                                        </option>
                                                        <option
                                                            value="checkbox"
                                                        >
                                                            Checkbox
                                                        </option>
                                                        <option value="date">
                                                            Datepicker
                                                        </option>
                                                        <option value="time">
                                                            Timepicker
                                                        </option>
                                                        <option value="image">
                                                            Image
                                                        </option>
                                                        <option value="file">
                                                            File
                                                        </option>
                                                    </select>

                                                    <small class="text-danger">
                                                        {{
                                                            errors[
                                                                `${key}.input_type`
                                                            ]
                                                        }}
                                                    </small>
                                                </div>
                                            </td>
                                            <td style="width: 240px" class="disable_label">
                                                <!-- change this - use searchable v-select-dropdown -->
                                                <div class="form-group">
                                                    <v-select-container
                                                        :col="12"
                                                    >
                                                        <v-select
                                                            v-model="db.type"
                                                            label="value"
                                                            :reduce="
                                                                (obj) => obj.id
                                                            "
                                                            :options="types"
                                                            placeholder="--Select Any--"
                                                            :closeOnSelect="
                                                                true
                                                            "
                                                        >
                                                        </v-select>
                                                    </v-select-container>

                                                    <small
                                                        class="text-danger capitalize"
                                                    >
                                                        {{
                                                            errors[
                                                                `${key}.type`
                                                            ]
                                                        }}
                                                    </small>
                                                </div>
                                            </td>
                                            <td style="width: 120px">
                                                <div class="form-group">
                                                    <div
                                                        class="input-group position-relative"
                                                    >
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Length"
                                                            v-model="db.length"
                                                        />
                                                    </div>

                                                    <small class="text-danger">
                                                        {{
                                                            errors[
                                                                `${key}.length`
                                                            ]
                                                        }}
                                                    </small>
                                                </div>
                                            </td>
                                            <td style="width: 100px">
                                                <div
                                                    class="multiple_fields_actions_btn d-flex align-items-center gap-2"
                                                >
                                                    <button
                                                        data-bs-toggle="modal"
                                                        :data-bs-target="`#validationModal${key}`"
                                                        type="button"
                                                        class="btns bg-black w-auto h-auto px-2 py-2"
                                                    >
                                                        <svg
                                                            style="
                                                                position: relative;
                                                                top: -1px;
                                                                margin-right: 3px;
                                                            "
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="icon icon-tabler icons-tabler-outline icon-tabler-navigation-cog"
                                                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Validation" v-x-tooltip
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path
                                                                d="M16.387 12.51l-4.387 -9.51l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463"
                                                            />
                                                            <path
                                                                d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
                                                            />
                                                            <path
                                                                d="M19.001 15.5v1.5"
                                                            />
                                                            <path
                                                                d="M19.001 21v1.5"
                                                            />
                                                            <path
                                                                d="M22.032 17.25l-1.299 .75"
                                                            />
                                                            <path
                                                                d="M17.27 20l-1.3 .75"
                                                            />
                                                            <path
                                                                d="M15.97 17.25l1.3 .75"
                                                            />
                                                            <path
                                                                d="M20.733 20l1.3 .75"
                                                            />
                                                        </svg>
                                                        Validations
                                                    </button>
                                                </div>

                                                <!-- validations modal -->
                                                <div
                                                    class="modal fade"
                                                    :id="`validationModal${key}`"
                                                    tabindex="-1"
                                                    :aria-labelledby="`validationModalLabel${key}`"
                                                    aria-hidden="true"
                                                >
                                                    <div
                                                        class="modal-dialog modal-dialog-centered"
                                                        style="max-width: 620px"
                                                    >
                                                        <div
                                                            class="modal-content"
                                                        >
                                                            <div
                                                                class="modal-header"
                                                            >
                                                                <h5
                                                                    class="modal-title fs-5"
                                                                    :id="`validationModalLabel${key}`"
                                                                >
                                                                    Validations
                                                                    Rules
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    class="btn-close shadow-none"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"
                                                                ></button>
                                                            </div>
                                                            <div
                                                                class="modal-body d-flex flex-column gap-3"
                                                            >
                                                                <div
                                                                    class="d-flex align-items-start"
                                                                    v-for="(
                                                                        valiRules,
                                                                        ind
                                                                    ) in db.validations"
                                                                    :key="`modal_validation_${key}_${ind}`"
                                                                >
                                                                    <div
                                                                        class="flex-grow-1"
                                                                    >
                                                                        <div
                                                                            class="form-group"
                                                                        >
                                                                            <select
                                                                                class="form-select"
                                                                                v-model="
                                                                                    valiRules.validation_type
                                                                                "
                                                                            >
                                                                                <option
                                                                                    value=""
                                                                                >
                                                                                    Select
                                                                                    one
                                                                                </option>
                                                                                <option
                                                                                    value="required"
                                                                                >
                                                                                    Required
                                                                                </option>
                                                                                <option
                                                                                    value="email"
                                                                                >
                                                                                    Email
                                                                                </option>
                                                                                <option
                                                                                    value="number"
                                                                                >
                                                                                    Number
                                                                                </option>
                                                                                <option
                                                                                    value="url"
                                                                                >
                                                                                    URL
                                                                                </option>
                                                                                <option
                                                                                    value="image"
                                                                                >
                                                                                    Image
                                                                                </option>
                                                                                <option
                                                                                    value="file"
                                                                                >
                                                                                    File
                                                                                </option>
                                                                                <option
                                                                                    value="minLength"
                                                                                >
                                                                                    MinLength
                                                                                </option>
                                                                                <option
                                                                                    value="maxLength"
                                                                                >
                                                                                    MaxLength
                                                                                </option>
                                                                                <option
                                                                                    value="fileOrImageSize"
                                                                                >
                                                                                    File/Image
                                                                                    Size
                                                                                </option>
                                                                            </select>
                                                                        </div>

                                                                        <div>
                                                                            <!-- Condition for image field  -->
                                                                            <div
                                                                                class="form-group mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'image'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="input-group position-relative gap-3"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="Image Height"
                                                                                        v-model="
                                                                                            valiRules.image_height
                                                                                        "
                                                                                        min="0"
                                                                                        class="form-control"
                                                                                    />

                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="Image Width"
                                                                                        v-model="
                                                                                            valiRules.image_width
                                                                                        "
                                                                                        min="0"
                                                                                        class="form-control"
                                                                                    />

                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="Image Size (KB)"
                                                                                        v-model="
                                                                                            valiRules.image_size
                                                                                        "
                                                                                        min="0"
                                                                                        class="form-control"
                                                                                    />
                                                                                </div>
                                                                            </div>

                                                                            <div
                                                                                class="d-flex gap-3 mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'image'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="jpg"
                                                                                                v-model="
                                                                                                    valiRules.image_type
                                                                                                "
                                                                                                :id="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        2
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        2
                                                                                                }`"
                                                                                            >
                                                                                                JPG
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="jpeg"
                                                                                                v-model="
                                                                                                    valiRules.image_type
                                                                                                "
                                                                                                :id="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        7
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        7
                                                                                                }`"
                                                                                            >
                                                                                                JPEG
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="webp"
                                                                                                v-model="
                                                                                                    valiRules.image_type
                                                                                                "
                                                                                                :id="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        5
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        5
                                                                                                }`"
                                                                                            >
                                                                                                WEBP
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="png"
                                                                                                v-model="
                                                                                                    valiRules.image_type
                                                                                                "
                                                                                                :id="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        6
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheck${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        6
                                                                                                }`"
                                                                                            >
                                                                                                PNG
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- end Condition for image field -->

                                                                            <!-- Additional field for file-->
                                                                            <div
                                                                                class="d-flex gap-3 mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'file'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="word"
                                                                                                v-model="
                                                                                                    valiRules.file_type
                                                                                                "
                                                                                                :id="`flexCheckDefault2${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        2
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheckDefault2${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        2
                                                                                                }`"
                                                                                            >
                                                                                                Word
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="pdf"
                                                                                                v-model="
                                                                                                    valiRules.file_type
                                                                                                "
                                                                                                :id="`flexCheckDefault3${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        3
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheckDefault3${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        3
                                                                                                }`"
                                                                                            >
                                                                                                PDF
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div
                                                                                    class="form-group"
                                                                                >
                                                                                    <div
                                                                                        class="check_box"
                                                                                    >
                                                                                        <div
                                                                                            class="form-check"
                                                                                        >
                                                                                            <input
                                                                                                class="form-check-input shadow-none"
                                                                                                type="checkbox"
                                                                                                value="excel"
                                                                                                v-model="
                                                                                                    valiRules.file_type
                                                                                                "
                                                                                                :id="`flexCheckDefault5${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        5
                                                                                                }`"
                                                                                            />
                                                                                            <label
                                                                                                class="form-check-label"
                                                                                                :for="`flexCheckDefault5${
                                                                                                    ind +
                                                                                                    1 *
                                                                                                        5
                                                                                                }`"
                                                                                            >
                                                                                                Excel
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- end Additional field file -->

                                                                            <!-- Minimum Length -->
                                                                            <div
                                                                                class="form-group mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'minLength'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="input-group position-relative"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        v-model="
                                                                                            valiRules.minLength
                                                                                        "
                                                                                        class="form-control"
                                                                                        placeholder="minlength"
                                                                                        name=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <!-- end minimum length -->

                                                                            <!-- maximum length -->
                                                                            <div
                                                                                class="form-group mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'maxLength'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="input-group position-relative"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        v-model="
                                                                                            valiRules.maxLength
                                                                                        "
                                                                                        class="form-control form-control-sm"
                                                                                        placeholder="maxlength"
                                                                                        name=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <!-- end maximum length -->

                                                                            <!--Start Image /File Size  -->
                                                                            <div
                                                                                class="form-group mt-2"
                                                                                v-if="
                                                                                    valiRules.validation_type ==
                                                                                    'fileOrImageSize'
                                                                                "
                                                                            >
                                                                                <div
                                                                                    class="input-group position-relative"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        class="form-control"
                                                                                        v-model="
                                                                                            valiRules.fileSize
                                                                                        "
                                                                                        placeholder="file Or Image Size "
                                                                                        aria-label="Username"
                                                                                        aria-describedby="basic-addon1"
                                                                                        style="
                                                                                            border-top-right-radius: 0px !important;
                                                                                            border-bottom-right-radius: 0px !important;
                                                                                        "
                                                                                    />
                                                                                    <span
                                                                                        class="input-group-text"
                                                                                        id="basic-addon1"
                                                                                        >KB</span
                                                                                    >
                                                                                </div>
                                                                            </div>
                                                                            <!--end Image /File Size  -->
                                                                            <!-- end additional field -->
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        style="
                                                                            width: 80px;
                                                                        "
                                                                        class="multiple_fields_actions_btn d-flex align-items-center gap-2 ms-3"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            class="btns delete_one"
                                                                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" v-x-tooltip
                                                                            @click.prevent="
                                                                                db.validations.splice(
                                                                                    ind,
                                                                                    1
                                                                                )
                                                                            "
                                                                            v-if="
                                                                                Object.keys(
                                                                                    db.validations
                                                                                )
                                                                                    .length >
                                                                                1
                                                                            "
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" v-x-tooltip
                                                                            >
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                ></path>
                                                                                <path
                                                                                    d="M4 7l16 0"
                                                                                ></path>
                                                                                <path
                                                                                    d="M10 11l0 6"
                                                                                ></path>
                                                                                <path
                                                                                    d="M14 11l0 6"
                                                                                ></path>
                                                                                <path
                                                                                    d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                                                                ></path>
                                                                                <path
                                                                                    d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                                                                ></path>
                                                                            </svg></button
                                                                        ><button
                                                                            type="button"
                                                                            class="btns add_more"
                                                                            v-if="
                                                                                Object.keys(
                                                                                    db.validations
                                                                                )
                                                                                    .length ==
                                                                                ind +
                                                                                    1
                                                                            "
                                                                            @click.prevent="
                                                                                db.validations.push(
                                                                                    {
                                                                                        validation_type:
                                                                                            '',
                                                                                        file_type:
                                                                                            [],
                                                                                        image_type:
                                                                                            [],
                                                                                    }
                                                                                )
                                                                            "
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                                                                            >
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                ></path>
                                                                                <path
                                                                                    d="M12 5v14"
                                                                                ></path>
                                                                                <path
                                                                                    d="M5 12h14"
                                                                                ></path>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="modal-footer justify-content-start"
                                                            >
                                                                <button
                                                                    type="button"
                                                                    class="theme_btn aus-btn"
                                                                    data-bs-dismiss="modal"
                                                                >
                                                                    <span
                                                                        >Save
                                                                        Changes</span
                                                                    >
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="center_td_value" style="width: 120px">
                                                <div class="form-group">
                                                    <div class="check_box">
                                                        <div class="form-check">
                                                            <input
                                                                class="form-check-input shadow-none"
                                                                type="checkbox"
                                                                :id="`showList${key}`"
                                                                v-model="
                                                                    db.showList
                                                                "
                                                            />
                                                            <label
                                                                class="form-check-label"
                                                                :for="`showList${key}`"
                                                            >
                                                                Show List
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style="width: 100px">
                                                <div
                                                    class="multiple_fields_actions_btn d-flex align-items-center gap-2"
                                                >
                                                    <button
                                                        type="button"
                                                        class="btns delete_one"
                                                        v-if="
                                                            Object.keys(
                                                                data.databases
                                                            ).length > 1
                                                        "
                                                        @click="
                                                            data.databases.splice(
                                                                key,
                                                                1
                                                            )
                                                        "
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" v-x-tooltip
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            ></path>
                                                            <path
                                                                d="M4 7l16 0"
                                                            ></path>
                                                            <path
                                                                d="M10 11l0 6"
                                                            ></path>
                                                            <path
                                                                d="M14 11l0 6"
                                                            ></path>
                                                            <path
                                                                d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                                            ></path>
                                                            <path
                                                                d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                                            ></path>
                                                        </svg>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        class="btns add_more"
                                                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                                                        v-if="
                                                            Object.keys(
                                                                data.databases
                                                            ).length ==
                                                            key + 1
                                                        "
                                                        @click="
                                                            data.databases.push(
                                                                {
                                                                    field_name:
                                                                        null,
                                                                    type: 'string',
                                                                    length: 225,
                                                                    input_type:
                                                                        'text',
                                                                    default: 0,
                                                                    unsigned: 0,
                                                                    validations:
                                                                        [
                                                                            {
                                                                                validation_type:
                                                                                    '',
                                                                                file_type:
                                                                                    [],
                                                                                image_type:
                                                                                    [],
                                                                            },
                                                                        ],
                                                                    index: 0,
                                                                }
                                                            )
                                                        "
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            ></path>
                                                            <path
                                                                d="M12 5v14"
                                                            ></path>
                                                            <path
                                                                d="M5 12h14"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </template>
                    </Fieldset>
                </div>
            </div>
        </div>
    </create-form>
</template>

<script>
import Promise from "bluebird";

const model = "module";

// set breadcrumb
const breadcrumb = [{ route: "module.create", title: "Module Create" }];

export default {
    data() {
        return {
            page_title: "Module Create",
            model: model,
            deleteModel: "",
            disabled: false,
            deleteButton: false,
            model_exist: false,
            types: [
                { id: "foreignId", value: "Foreign ID" },
                { id: "bigIncrements", value: "Big Increments" },
                { id: "integer", value: "Integer" },
                { id: "bigInteger", value: "Big Integer" },
                { id: "tinyInteger", value: "Tiny Integer" },
                { id: "string", value: "String" },
                { id: "binary", value: "Binary" },
                { id: "boolean", value: "Boolean" },
                { id: "char", value: "Char" },
                { id: "dateTime", value: "Date Time" },
                { id: "date", value: "Date" },
                { id: "time", value: "Time" },
                { id: "decimal", value: "Decimal" },
                { id: "double", value: "Double" },
                { id: "enum", value: "Enum" },
                { id: "float", value: "Float" },
                { id: "json", value: "Json" },
                { id: "text", value: "Text" },
                { id: "longText", value: "Long Text" },
            ],
            data: {
                databases: [
                    {
                        field_name: null,
                        type: "string",
                        length: 225,
                        input_type: "text",
                        default: 0,
                        unsigned: 0,
                        validations: [
                            {
                                validation_type: "",
                                file_type: [],
                                image_type: [],
                            },
                        ],
                        index: 0,
                    },
                ],
                model_name: "",
            },
            validateFields: {
                field_name: null,
                type: null,
                length: null,
            },
            errors: {},
            debounce: null,
            moduleNotExist: "",
        };
    },
    watch: {
        "data.databases": {
            deep: true,
            handler() {
                this.databasesValidate();
            },
        },
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    methods: {
        submit: function () {
            this.$validate().then((res) => {
                this.databasesValidate();
                let errors = Object.keys(this.errors).length;
                const error = this.validation.countErrors();
                let countError = errors + error;
                if (countError > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " +
                            countError +
                            " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }

                if (res) {
                    this.$root.submit = true;
                    axios
                        .post("/module/create", this.data)
                        .then((res) => {
                            this.$toast(
                                "Module Create Successfully",
                                "success"
                            );
                            this.$router.push({
                                name: this.model + ".index",
                                params: { model: this.data.model_name },
                            });
                        })
                        .catch((error) =>
                            this.$toast(
                                "Something went wrong, but Some file are crated, please check",
                                "error"
                            )
                        )
                        .then((alw) =>
                            setTimeout(() => (this.$root.submit = false), 200)
                        );
                }
            });
        },

        databasesValidate() {
            this.errors = {};
            // this.data.databases.forEach((obj, ind) => {
            //   for (const [field_name, value] of Object.entries(this.validateFields)) {
            //     if (obj.hasOwnProperty(field_name) && !obj[field_name]) {
            //       let text = field_name.split("_").join(" ");
            //       this.setErrors(text + " is required", ind, field_name);
            //     }
            //   }
            // });
            this.data.databases.forEach((db, index) => {
                if (!db.field_name) {
                    this.setErrors(
                        index,
                        "field_name",
                        "Field name is required"
                    );
                } else if (!db.input_type) {
                    this.setErrors(
                        index,
                        "input_type",
                        "Input type is required"
                    );
                } else if (!db.type) {
                    this.setErrors(index, "type", "Type is required");
                } else if (
                    db.type == "string" ||
                    db.type == "integer" ||
                    db.type == "char" ||
                    db.type == "decimal" ||
                    db.type == "float" ||
                    db.type == "double"
                ) {
                    if (!db.length) {
                        this.setErrors(index, "length", "length is required");
                    }
                }
            });
        },
        setErrors(index, prop, message) {
            this.errors = {
                ...this.errors,
                [`${index}.${prop}`]: message,
            };
        },

        deleteModule() {
            if (this.deleteButton) {
                if (confirm("Are you sure? Do you want to delete?")) {
                    axios
                        .get("module-delete", {
                            params: { model: this.deleteModel },
                        })
                        .then((res) => {
                            this.deleteModel = "";
                            this.$toast(res.data.message, "success");
                        });
                }
            }
        },

        checkModuleExist(event) {
            this.deleteModel = null;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.deleteModel = event.target.value;

                axios
                    .get("/module/check-model", {
                        params: { model_name: this.deleteModel },
                    })
                    .then((res) => {
                        if (res.data) {
                            (this.moduleNotExist = ""),
                                (this.deleteButton = true);
                        } else {
                            this.deleteButton = false;
                            this.moduleNotExist = "Module Not Exist";
                        }
                    });
            }, 600);
        },
    },
    created() {
        this.$store.dispatch("breadcrumb/storeLevels", breadcrumb);
    },

    validators: {
        "data.model_name": function (value = null) {
            var app = this;
            return Validator.value(value)
                .required("Model Name is required")
                .minLength(3)
                .regex(
                    "^[a-zA-Z_]*$",
                    "Must only contain alphabetic characters."
                )
                .regex("(?=.*?[A-Z])", "at least one uppercase letter required")
                .regex("(?=.*?[a-z])", "at least one lowercase letter required")
                .custom(function () {
                    if (!Validator.isEmpty(value)) {
                        app.disabled = true;
                        axios
                            .get("/module/check-model", {
                                params: { model_name: app.data.model_name },
                            })
                            .then((res) => {
                                if (res.data) {
                                    app.model_exist = true;
                                } else {
                                    app.model_exist = false;
                                }
                            });
                        return Promise.delay(1500).then(function () {
                            if (app.model_exist) {
                                return "Model name already exists";
                            }
                            app.disabled = false;
                        });
                    }
                });
        },
    },
};
</script>
