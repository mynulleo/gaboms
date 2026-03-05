<template>
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <fieldset>
                    <span class="legend">Client Import Instructions</span>
                    <div class="mt-3">

                        <div class="mb-3">
                            <strong>Step 1: Download the Excel Template</strong>
                            <p>
                                Click on the <strong><a :href="$root.storage_url + '/client.xlsx'">Download
                                        Template</a></strong> to get the predefined Excel
                                file.
                                <strong>Do not change column headers</strong>; only fill data in rows.
                            </p>
                        </div>

                        <div class="mb-3">
                            <strong>Step 2: Follow these Rules</strong>
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Field</th>
                                            <th>Rule / Format Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>clientid</td>
                                            <td>Must be unique</td>
                                        </tr>
                                        <tr>
                                            <td>reg_date</td>
                                            <td>Format: <code>YYYY-MM-DD</code></td>
                                        </tr>
                                        <tr>
                                            <td>service_id</td>
                                            <td>Must exist in services table</td>
                                        </tr>
                                        <tr>
                                            <td>name</td>
                                            <td>Required</td>
                                        </tr>
                                        <tr>
                                            <td>mobile</td>
                                            <td>Numeric only</td>
                                        </tr>
                                        <tr>
                                            <td>email</td>
                                            <td>Valid email format</td>
                                        </tr>
                                        <tr>
                                            <td>district_id</td>
                                            <td>Must exist</td>
                                        </tr>
                                        <tr>
                                            <td>area_id</td>
                                            <td>Must exist</td>
                                        </tr>
                                        <tr>
                                            <td>package_id</td>
                                            <td>Optional</td>
                                        </tr>
                                        <tr>
                                            <td>is_commission</td>
                                            <td>0 or 1</td>
                                        </tr>
                                        <tr>
                                            <td>commission_amount</td>
                                            <td>Numeric</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mb-3">
                            <strong>Step 3: Save the File</strong>
                            <p>
                                Save as <strong>.xlsx</strong> or <strong>.csv</strong>.
                                Do not add extra sheets.
                            </p>
                        </div>

                    </div>
                </fieldset>
            </div>

            <div class="col-md-4">
                <fieldset>
                    <span class="legend">Import File</span>
                    <create-form @onSubmit="submit" :title="false" formid="formdownload"
                        submitbuttontext="Import Clients">

                        <input type="file" name="clientexcel" accept=".xlsx,.csv" @change="onFileChange" required />

                        <p v-if="fileName">Selected: {{ fileName }}</p>
                    </create-form>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
const model = 'client';

export default {
    data() {
        return {
            model: model,
            page_title: 'Client Import',
            data: {
                clientexcel: null
            },
            fileName: '',
            errors: {}
        };
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    methods: {
        submit() {
            var form = document.getElementById('form');
            var formData = new FormData(form);
            formData.append('clientexcel', this.data.clientexcel ?? 0);

            this.store('bulkdataimport/clientimport', formData, 'client.index');
        },

        onFileChange(e) {
            const file = e.target.files[0];
            if (!file) return;

            const ext = file.name.split(".").pop().toLowerCase();
            if (!["xlsx", "csv"].includes(ext)) {
                alert("Only .xlsx or .csv file allowed");
                e.target.value = "";
                return;
            }

            this.data.clientexcel = file;
            this.fileName = file.name;
        },
    },
    created() {
        this.page_title = 'Client Bulk Import';
    },
    validators: {}
}
</script>
