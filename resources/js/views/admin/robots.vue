<template>
    <div>
        <div
            class="component_loader"
            :class="{ 'z-top': $root.initialLoader }"
            v-if="$root.spinner"
        >
            <div class="loader"></div>
        </div>

        <div class="viewer_devider"></div>
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Robots.txt</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            <pre>{{ fileContent }}</pre>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Edit Robots.txt</span>
                        <div class="viewer_devider"></div>
                        <div class="table-responsive">
                            <textarea
                                name="editableContent"
                                v-model="editableContent"
                                class="form-control"
                                id=""
                                cols="30"
                                rows="4"
                            ></textarea>
                            <button
                                @click="saveFileContent"
                                class="btn-load"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Save"
                                v-x-tooltip
                            >
                                Save
                            </button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            fileContent: "",
            editableContent: "",
        };
    },

    methods: {
        getFileContent() {
            this.$root.spinner = true;
            axios
                .get("robots-file")
                .then((res) => {
                    this.fileContent = res.data;
                    this.editableContent = res.data;

                    setTimeout(() => {
                        this.$root.spinner = false;
                    }, 200);
                })
                .catch(() => {
                    this.$root.spinner = false;
                    console.error("Error fetching file content");
                });
        },
        saveFileContent() {
            this.$root.spinner = true;
            axios
                .post("robots-file", {
                    content: this.editableContent,
                })
                .then((response) => {
                    console.log(response.data.success);

                    this.fileContent = this.editableContent;

                    setTimeout(() => {
                        this.$root.spinner = false;
                    }, 200);

                    this.$toast(response.data.success, "success");
                })
                .catch(() => {
                    this.$root.spinner = false;
                    console.error("Error saving file");
                });
        },
    },
    created() {
        this.getFileContent();
    },
};
</script>

<style scoped>
.btn-load {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.container {
    display: flex;
    justify-content: space-between;
    margin: 20px;
}

.display-box,
.edit-box {
    width: 45%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
}
</style>
