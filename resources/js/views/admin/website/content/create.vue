<template>
    <create-form @onSubmit="submit">
        <div class="col-lg-12">
            <Fieldset>
                <template v-slot:name>Content</template>
                <template v-slot:content>
                    <div class="col-lg-9">
                        <div class="row g-3">
                            <Input
                                v-model="data.title"
                                field="data.title"
                                title="Title"
                                :req="true"
                                col="12 col-sm-12"
                            />

                            <Input
                                v-model="data.url"
                                field="data.url"
                                title="Url"
                                :req="false"
                                col="12 col-sm-12"
                            />

                            <editor
                                v-model="data.description"
                                field="data.description"
                                required
                                title="Description"
                                col="12"
                            />
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div class="row g-3">
                            <File
                                title="Image"
                                field="data.original_image"
                                mime="img"
                                fileClassName="file2"
                                :showCrop="true"
                                :vHeight="
                                    $root.media_validators?.image?.min_height ??
                                    600
                                "
                                :vWidth="
                                    $root.media_validators?.image?.min_width ??
                                    600
                                "
                                :vSizeInKb="
                                    $root.media_validators?.image?.max_size ??
                                    5000
                                "
                                col="12 col-12"
                            />
                            <GlobalCrop
                                field="data.original_image"
                                v-on:update:modelValue="
                                    data.original_image = $event
                                "
                                :image="image.original_image"
                                :aspectRatio="{
                                    aspectRatio:
                                        ($root.media_validators?.image
                                            ?.min_width ?? 600) /
                                        ($root.media_validators?.image
                                            ?.min_height ?? 600),
                                }"
                                :minWidth="
                                    $root.media_validators?.image?.min_width ??
                                    600
                                "
                                :minHeight="
                                    $root.media_validators?.image?.min_height ??
                                    600
                                "
                            >
                            </GlobalCrop>
                        </div>
                    </div>
                    <Switch
                        v-model="data.status"
                        on-label="Active"
                        off-label="Deactive"
                        col="3"
                        :req="true"
                    ></Switch>
                    <Input
                        title="Sorting"
                        field="data.sorting"
                        v-model="data.sorting"
                        col="2"
                        type="number"
                        :req="true"
                    />
                </template>
            </Fieldset>
        </div>
        <div class="col-lg-12">
            <Fieldset>
                <template v-slot:name>Content File</template>

                <template v-slot:content>
                    <div class="col-lg-12">
                        <div class="text-end">
                            <span
                                class="btn badge bg-danger py-2 px-3 btn-danger mb-2 position-absolute multiple_file_field_reset rounded-pill"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Clear"
                                v-x-tooltip
                                @click="clearContentFiles"
                                style="padding: 3px 12px"
                            >
                                Clear
                            </span>
                        </div>
                        <div class="multiple_options_create table-responsive">
                            <table class="table table-bordered mb-0 mt-0">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>File</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-for="(
                                            file, index
                                        ) in data.content_files"
                                    >
                                        <tr v-if="file">
                                            <td>
                                                <div class="form-group">
                                                    <div
                                                        class="input-group position-relative"
                                                    >
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            v-model="file.title"
                                                            :name="`content_files[${index}][title]`"
                                                            placeholder="Enter title"
                                                            @input="
                                                                validateFileRow(
                                                                    index
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                    <small
                                                        v-if="
                                                            fileErrors[index] &&
                                                            fileErrors[index]
                                                                .title
                                                        "
                                                        class="text-danger d-inline-block fw-medium mt-1"
                                                    >
                                                        {{
                                                            fileErrors[index]
                                                                .title
                                                        }}
                                                    </small>
                                                    <!-- <small class="opacity-0 text-danger d-inline-block fw-medium mt-1"></small> -->
                                                </div>
                                            </td>
                                            <td>
                                                <div class="form-group">
                                                    <div
                                                        class="input-group position-relative"
                                                    >
                                                        <input
                                                            type="file"
                                                            class="form-control"
                                                            accept=".pdf, .doc, .docx, .xls, .xlsx"
                                                            @change="
                                                                handleFileUpload(
                                                                    $event,
                                                                    index
                                                                )
                                                            "
                                                            :name="`content_files[${index}][file]`"
                                                        />
                                                    </div>
                                                    <small
                                                        v-if="
                                                            fileErrors[index] &&
                                                            fileErrors[index]
                                                                .file
                                                        "
                                                        class="text-danger d-inline-block fw-medium mt-1"
                                                    >
                                                        {{
                                                            fileErrors[index]
                                                                .file
                                                        }}
                                                    </small>
                                                    <!-- <small class="opacity-0 text-danger d-inline-block fw-medium mt-1"></small> -->
                                                </div>
                                            </td>
                                            <td style="width: 120px">
                                                <div
                                                    class="multiple_fields_actions_btn d-flex align-items-center gap-2"
                                                >
                                                    <button
                                                        v-if="file.file"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        data-bs-title="View"
                                                        v-x-tooltip
                                                        class="btns view_one"
                                                        :disabled="!file.file"
                                                        @click="
                                                            openFile(file.file)
                                                        "
                                                        style="
                                                            background-color: #007bff;
                                                            color: white;
                                                            border: none;
                                                            padding: 8px 12px;
                                                            border-radius: 4px;
                                                        "
                                                    >
                                                        <i
                                                            class="far fa-eye"
                                                        ></i>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btns delete_one"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        data-bs-title="Delete"
                                                        v-x-tooltip
                                                        @click.prevent="
                                                            removeFile(index)
                                                        "
                                                        v-if="
                                                            Object.keys(
                                                                data.content_files
                                                            ).length > 1
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
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Delete"
                                                            v-x-tooltip
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path
                                                                d="M4 7l16 0"
                                                            />
                                                            <path
                                                                d="M10 11l0 6"
                                                            />
                                                            <path
                                                                d="M14 11l0 6"
                                                            />
                                                            <path
                                                                d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                                            />
                                                            <path
                                                                d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btns add_more"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        data-bs-title="Add"
                                                        v-x-tooltip
                                                        @click.prevent="
                                                            addFileRow()
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
                                                            />
                                                            <path
                                                                d="M12 5l0 14"
                                                            />
                                                            <path
                                                                d="M5 12l14 0"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <!-- <small class="opacity-0 text-danger d-inline-block fw-medium mt-1"></small> -->
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
            </Fieldset>
        </div>
        <!-- <Meta v-model="data.meta"/> -->
        <div class="col-lg-12">
            <div id="meta_box" class="static_fieldset">
                <div class="check_box style2">
                    <div class="form-check">
                        <input
                            class="form-check-input shadow-none d-none"
                            type="checkbox"
                            v-model="is_meta"
                            id="flexCheckChecked1"
                        />
                        <label class="form-check-label" for="flexCheckChecked1">
                            <span class="icon"></span> Show / Hide Meta
                            Information
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-lg-12" v-if="is_meta == true">
            <Fieldset>
                <template v-slot:name>Meta Information</template>
                <template v-slot:content>
                    <div class="row g-3">
                        <div class="col-12">
                            <v-select-container
                                field="meta_tag"
                                title="Meta Keywords(Optional)"
                                col="12 multiple_tags_input"
                            >
                                <v-select
                                    taggable
                                    multiple
                                    name="meta_tag"
                                    v-model="data.meta_tag"
                                    no-drop
                                ></v-select>
                            </v-select-container>
                        </div>
                        <div class="col-12">
                            <div class="form-element">
                                <label for="" class="form-label"
                                    >Meta Description(Optional)</label
                                >
                                <textarea
                                    name="meta_description"
                                    v-model="data.meta_description"
                                    class="form-control"
                                    id=""
                                    cols="30"
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </template>
            </Fieldset>
        </div> -->
    </create-form>
</template>

<script>
const model = "content";
import Editor from "../../../../components/Form/CKEditor";
// import Meta from "../../../../components/Form/Meta";

export default {
    // components: { Editor, Meta },
    components: { Editor },
    data() {
        return {
            page_title: "",
            model: model,
            data: {
                status: "active",
                original_image: "",
                meta_tag: null,
                // meta: {},
                content_files: [{ title: "", file: null }],
            },
            fileErrors: [],
            image: { original_image: "" },
            is_meta: false,
        };
    },
    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.image,
        };
    },
    watch: {
        $route: {
            handler: "asyncData",
            immediate: true,
        },
        "data.meta_tag": function (newVal) {
            this.updateIsMeta();
        },
        "data.meta_description": function (newVal) {
            this.updateIsMeta();
        },
        is_meta(newVal) {
            if (newVal === true) {
                this.metaScroll();
            }
        },
    },

    methods: {
        submit() {
            let hasError = false;
            this.data.content_files.forEach((_, index) => {
                this.validateFileRow(index);
                if (
                    this.fileErrors[index]?.title ||
                    this.fileErrors[index]?.file
                ) {
                    hasError = true;
                }
            });
            if (hasError) {
                this.$toast(
                    "Please correct the errors before submitting",
                    "warning"
                );
                return;
            }
            const error = this.validation.countErrors();
            this.$validate().then((res) => {
                if (error > 0) {
                    this.toast(
                        "You need to fill " +
                            error +
                            " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }
                if (res) {
                    this.$root.submit = true;
                    const formData = new FormData();
                    formData.append("title", this.data.title || "");
                    formData.append("url", this.data.url || "");
                    formData.append("description", this.data.description || "");

                    if (this.data.meta_tag && this.data.meta_tag.length > 0) {
                        formData.append(
                            "meta_tag",
                            JSON.stringify(this.data.meta_tag)
                        );
                    } else {
                        formData.append("meta_tag", JSON.stringify([]));
                    }
                    formData.append(
                        "meta_description",
                        this.data.meta_description || ""
                    );

                    formData.append("slug", this.$route.params.slug || "");
                    formData.append(
                        "image_base64",
                        this.data.original_image || ""
                    );
                    formData.append(
                        "image_resize_value",
                        this.$root.media_validators?.image?.resize_value ?? ""
                    );
                    // formData.append("is_meta", this.data.meta.is_meta ? 1 : 0);
                    formData.append("status", this.data.status || "inactive");
                    formData.append(
                        "sorting",
                        this.safeNumber(this.data.sorting)
                    );
                    this.data.content_files.forEach((item, index) => {
                        if (item) {
                            if (item.title) {
                                formData.append(
                                    `content_files[${index}][title]`,
                                    item.title
                                );
                            }

                            if (item.file && item.file instanceof File) {
                                formData.append(
                                    `content_files[${index}][file]`,
                                    item.file
                                );
                            }

                            formData.append(
                                `content_files[${index}][id]`,
                                item.id ?? ""
                            );
                        }
                    });
                    axios
                        .post("/content", formData)
                        .then((res) => {
                            if (res.data.slug || res.data.message) {
                                const slug =
                                    res.data.slug || this.$route.params.slug;
                                const type = res.data.type || "success";

                                this.$toast(
                                    res.data.message || "Save successful",
                                    type
                                );
                                this.$router.push({
                                    name: "content.index",
                                    params: { slug },
                                });
                            }
                            if (res.data.error) {
                                this.$toast(res.data.error, "error");
                                setTimeout(() => {
                                    location.reload();
                                }, 100);
                            } else if (res.data.warning) {
                                this.$toast(res.data.warning, "warning");
                                this.$router.push({
                                    name: "content.show",
                                    params: { slug: this.$route.params.slug },
                                });
                            }
                        })
                        .catch((error) => {
                            if (error.response.status === 422) {
                                $("#validateModal").modal("show");
                                if (error.response.data.exception) {
                                    this.$root.exception_errors =
                                        error.response.data.exception;
                                } else {
                                    this.$root.validation_errors =
                                        error.response.data.errors || {};
                                }
                                this.$toast(
                                    "You need to fill empty mandatory fields",
                                    "warning"
                                );
                            } else {
                                this.$toast("Something went wrong!", "error");
                            }
                        })
                        .then(() =>
                            setTimeout(() => (this.$root.submit = false), 200)
                        );
                }
            });
        },

        clearContentFiles() {
            for (let i = 0; i < this.data.content_files.length; i++) {
                delete this.data.content_files[i];
            }

            this.addFileRow();
        },

        // scroll for meta
        metaScroll() {
            const targetElement = document.querySelector("#meta_box");

            setTimeout(() => {
                if (targetElement) {
                    const extraOffset = 100; // Adjust this value to add more space at the bottom
                    const elementPosition =
                        targetElement.getBoundingClientRect().top +
                        window.scrollY;
                    window.scrollTo({
                        top: elementPosition - extraOffset,
                        behavior: "smooth",
                    });
                }
            }, 100);
        },
        // track of metaut
        updateIsMeta() {
            this.is_meta =
                !!(this.data.meta_tag && this.data.meta_tag.length > 0) ||
                !!(
                    this.data.meta_description &&
                    this.data.meta_description.trim() !== ""
                );
        },
        openFile(file) {
            let fileUrl;
            if (file instanceof File) {
                fileUrl = URL.createObjectURL(file);
                window.open(fileUrl, "_blank");
            } else if (typeof file === "string") {
                fileUrl = `${this.$root.storage_url}/${file}`;
                window.open(fileUrl, "_blank");
            }
        },
        addFileRow() {
            this.data.content_files.push({
                title: "",
                file: null,
            });
        },
        removeFile(index) {
            if (Object.keys(this.data.content_files).length > 1) {
                delete this.data.content_files[index];
            }
        },
        isLastItem(items, index) {
            return index === items.length - 1;
        },
        handleFileUpload(event, index) {
            const file = event.target.files[0];
            this.data.content_files[index].file = file;
            this.validateFileRow(index);
        },
        validateFileRow(index) {
            // Initialize error tracking for this row
            if (!this.fileErrors[index]) {
                this.fileErrors[index] = {};
            }

            const file = this.data.content_files[index].file;
            const title = this.data.content_files[index].title;

            if (file && !title) {
                this.fileErrors[index].title =
                    "Title is required when a file is uploaded.";
            } else {
                this.fileErrors[index].title = ""; // Clear the error if resolved
            }

            if (!file && title) {
                this.fileErrors[index].file =
                    "File is required when a title is provided.";
            } else {
                this.fileErrors[index].file = ""; // Clear the error if resolved
            }
        },
        getFileUrl(file) {
            if (file instanceof File) {
                return URL.createObjectURL(file);
            } else if (typeof file === "string") {
                return file;
            }
            return null;
        },
        asyncData() {
            if (this.$route.params.slug) {
                axios
                    .get(`${this.model}/${this.$route.params.slug}`)
                    .then((response) => {
                        this.data = response.data;

                        if (
                            !this.data.content_files ||
                            this.data.content_files.length === 0
                        ) {
                            this.data.content_files = [
                                { title: "", file: null },
                            ];
                        }

                        /* this.data.meta = {
                        is_meta: response.data.is_meta,
                        meta_tag: response.data.meta_tag,
                        meta_description: response.data.meta_description,
                    }; */
                    });

                var breadcrumb = [
                    {
                        route: model + ".create",
                        title: model + " Create",
                        slug: this.$route.params.slug
                            ? this.$route.params.slug
                            : "",
                    },
                ];
                this.$store.dispatch("breadcrumb/storeLevels", breadcrumb);
            }
        },
    },

    created() {
        if (this.$route.params.slug) {
            let slug = this.$route.params.slug;
            let title = slug.replace("-", " ");
            this.page_title = this.ucfirst(this.model) + " " + "Edit";
        } else {
            this.page_title = this.ucfirst(this.model) + " " + "Create";
            this.get_sorting("Website\\Content\\Content");
        }
        this.getMediaValidators("Content");
    },

    validators: {
        "data.title": function (value = null) {
            return Validator.value(value).required("Title is required");
        },
        "data.description": function (value = null) {
            return Validator.value(value).required("Description is required");
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
    },
};
</script>

<style scoped>
.custom-btn {
    font-size: 0.6rem;
    padding: 0.5rem 0.75rem;
    line-height: 2;
    width: 3rem;
    min-width: 2rem;
}

.custom-btn .fas {
    font-size: 0.6rem;
}
</style>
