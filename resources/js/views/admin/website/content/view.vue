<template>
    <view-page>
        <div class="content_view_page">
            <div class="row custom_row g-3">
                <div class="col-xxl-8 col-xl-8">
                    <fieldset>
                        <h3 class="content_view_title">Title : {{ ucfirst(data?.title) }}</h3>
                        <p>Sorting : {{ ucfirst(data?.sorting) }}</p>
                        <p>Status : {{ ucfirst(data?.status) }}</p>
                        <p v-html="data.description"></p>
                    </fieldset>
                </div>
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="view_file_item text-center" style="width: 100%; height: 100%;">
                                        <div class="img" style="width: 100%; height: 100%;">
                                            <img :src="data?.image_one == 'no_server_image' ? emptyServerImage() : (data?.image_one || emptyImage())" alt="img-cover"
                                                style="width: 100%; height: 100%; object-fit: cover;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="viewer_devider"></div>
        <div class="view_page mt-2">
            <div class="row custom_row g-3">
                <div class="col-xl-12 col-lg-12">
                    <fieldset>
                        <span class="legend">{{ ucfirst(model) + " File" }}</span>
                        <!-- Your template starts here -->
                        <template v-if="data && data.content_files">
                            <div v-if="Object.keys(data.content_files).length > 0" class="base_table_list">
                                <div class="table-responsive text-nowrap">
                                    <table class="table custom_table_hover">
                                        <thead>
                                            <tr>
                                                <th class="sl" style="min-width: 70px">
                                                    <span class="heading"> SL </span>
                                                </th>
                                                <th>
                                                    <div class="heading">Title</div>
                                                </th>
                                                <th>
                                                    <div class="heading">Action</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(dataFile, index) in data.content_files" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>
                                                    <a v-if="dataFile.file"
                                                        :href="`${$root.storage_url}/${dataFile.file}`"
                                                        target="__blank">
                                                        <img :src="$root.asset_url + '/images/pdf.png'"
                                                            style="height: 20px; width: 20px" />
                                                    </a>{{ dataFile.title }}
                                                </td>
                                                <td class="action_td custom_table_action">
                                                    <div class="actions d-block">
                                                        <div class="action_btn">
                                                            <!-- Eye button for viewing the file -->
                                                            <a target="_blank"
                                                                :href="`${$root.storage_url}/${dataFile.file}`"
                                                                v-if="dataFile.file">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                                    <path
                                                                        d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                                </svg>
                                                            </a>
                                                            <!-- Delete button -->
                                                            <a @click="destroy(dataFile.id, index)"
                                                                v-if="$root.checkPermission('content.destroy')">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" viewBox="0 0 24 24" fill="none"
                                                                    stroke="currentColor" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    data-bs-title="Delete" v-x-tooltip>
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <path d="M4 7l16 0" />
                                                                    <path d="M10 11l0 6" />
                                                                    <path d="M14 11l0 6" />
                                                                    <path
                                                                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                                    <path
                                                                        d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </template>
                        <!-- Your template ends here -->

                    </fieldset>
                </div>
            </div>
        </div>

        <div class="viewer_devider"></div>
        <div class="view_page mt-2">
            <div class="row custom_row g-3">
                <div class="col-xl-12 col-lg-12">
                    <fieldset>
                        <span class="legend">Meta Information</span>
                        <template v-if="(data.meta_tag && data.meta_tag.length) || data.meta_description">
                            <div class="col-lg-12 mt-2" v-if="data.meta_tag && data.meta_tag.length">
                                <button class="btn btn-light border" v-for="(item, index) in data.meta_tag"
                                    :key="index">
                                    {{ item }}
                                </button>
                            </div>
                            <div class="col-lg-12 mt-2" v-if="data.meta_description">
                                <p>
                                    {{ data.meta_description }}
                                </p>
                            </div>
                        </template>
                        <template v-else>
                            <div class="col-lg-12 mt-2 text-center">
                                <p>No meta info found</p>
                            </div>
                        </template>
                    </fieldset>
                </div>
            </div>
        </div>
    </view-page>
</template>

<script>
const model = "content";
export default {
    data() {
        return {
            page_title: "",
            model: model,
            data: {},
        };
    },

    watch: {
        data() {
            this.data.meta_tag = this.data.meta_tag;
        },
    },

    methods: {
        destroy(id, index) {
            if (confirm("Are you sure want to delete?")) {
                this.$root.spinner = true;
                const params = { file: true };
                axios
                    .delete("/" + this.model + "/" + id, { params })
                    .then((res) => {
                        if (index !== -1) {
                            this.data.content_files.splice(index, 1);
                        }
                    })
                    .catch((error) => console.log(error))
                    .then((alw) => setTimeout(() => (this.$root.spinner = false), 200));
            }
        },
        /* convertMetaTagsToString(metaTags) {
          return "dd";
          try {
            const parsedMetaTags = JSON.parse(metaTags);
            return parsedMetaTags.join(", ");
          } catch (error) {
            console.error("Failed to parse meta tags:", error);
            return "";
          }
        }, */
    },
    created() {
        this.page_title = this.ucfirst(this.model) + " " + "View";
        this.get_data(`${this.model}/${this.$route.params.slug}`);
    },
};
</script>

<style scoped>
.action_td {
    text-align: center;
}

.actions {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.action_btn {
    display: inline-flex;
    gap: 10px;
}
</style>
