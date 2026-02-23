<template>
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <fieldset>
                    <span class="legend">Import Instructions</span>
                    <div class="mt-3">
                        <div class="mb-3">
                            <strong>Step 1: Download the Excel Template</strong>

                            <p>
                                Click on the
                                <strong><a :href="$root.storage_url + '/employees.xlsx'">Download Template</a></strong>
                                to get the predefined Excel file. The template already contains all required
                                columns.
                                <strong>Do not change column headers</strong>; only fill the data in rows below the
                                headers.
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
                                            <td>Name</td>
                                            <td>Must not be empty</td>
                                        </tr>
                                        <tr>
                                            <td>Employee ID</td>
                                            <td>Must be unique</td>
                                        </tr>
                                        <tr>
                                            <td>Department</td>
                                            <td>Must match existing departments in the system</td>
                                        </tr>
                                        <tr>
                                            <td>Joining Date</td>
                                            <td>Format: <code>YYYY-MM-DD</code> (e.g., 2026-01-19)</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>Must be valid email format (<code>example@domain.com</code>)</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>Optional, numeric only</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="mb-3">
                            <strong>Step 3: Save the File</strong>
                            <p>
                                Save the file in <strong>.xlsx format</strong> only. Do not add extra sheets or rename
                                the file.
                            </p>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-md-4">
                <fieldset>
                    <span class="legend">Import File</span>
                    <create-form @onSubmit='submit' :title="false" formid="formdownload"
                        submitbuttontext="Download Excel">
                        <input type="file" name="empexcel" accept=".xlsx,.csv" @change="onFileChange" required />

                        <p v-if="fileName">Selected: {{ fileName }}</p>
                    </create-form>
                </fieldset>
            </div>
        </div>
    </div>

</template>
<script>

const model = 'employee';

export default {
    data() {
        return {
            model: model,
            page_title: 'Employee Import',
            data: {
                empexcel: null
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
        submit: function (e) {

            var form = document.getElementById('form');
            var formData = new FormData(form);
            formData.append('empexcel', this.data.empexcel ?? 0);
            this.store('bulkdataimport/empimport', formData, 'employee.index');
        },

        onFileChange(e) {
            const file = e.target.files[0];
            if (!file) return;

            // only xlsx / csv check
            const ext = file.name.split(".").pop().toLowerCase();
            if (!["xlsx", "csv"].includes(ext)) {
                alert("Only .xlsx or .csv file allowed");
                e.target.value = "";
                return;
            }

            this.data.empexcel = file;
            this.fileName = file.name;
        },
    },
    created() {
        this.page_title = 'Bulk Floor & Flat Create';
    },
    validators: {}
}

</script>