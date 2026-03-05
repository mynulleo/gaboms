<template>
    <view-page :defaultTable="false">
        <div class="view_page pb-4">
            <div class="row custom_row g-3">
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="view_file_item text-center" style="width: 100%; height: 100%;">
                                        <div class="img" style="width: 100%; height: 100%;">
                                            <!-- <img :src="data?.image_one ? data?.image_one : emptyImage()" alt="img-cover"
                                                style="width: 100%; height: 100%; object-fit: cover;"> -->
                                            <img :src="data?.image_one == 'no_server_image' ? emptyServerImage() : (data?.image_one || emptyImage())"
                                                alt="img-cover" style="width: 100%; height: 100%; object-fit: cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div class="col-xl-8 col-lg-12">
                    <fieldset>
                        <span class="legend">News Details</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Title</th>
                                        <th style="text-align: center;">:</th>
                                        <td> {{ ucfirst(data?.title ?? "") }}</td>
                                    </tr>
                                    <tr>
                                        <th>Category</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ ucfirst(data?.category?.title ?? "") }}</td>
                                    </tr>
                                    <tr>
                                        <th>News Date</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ enFormat(data?.date) ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Sorting</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.sorting ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <th style="text-align: center;">:</th>
                                        <td><span :class="[
                                            data?.status == 'active'
                                                ? 'bg-success'
                                                : 'bg-danger ',
                                            'badge mt-1 mx-2',
                                            'text-white ',
                                        ]">
                                                {{ ucfirst(data?.status) }}
                                            </span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div class="view_page pb-4">
            <div class="row custom_row g-3">
                <div class="col-xl-12 col-lg-12">
                    <fieldset>
                        <span class="legend">News Description</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <p class="text" v-html="data?.description"></p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="view_page">
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
const model = "news";

export default {
    data() {
        return {
            page_title: "News View",
            model: model,
            data: {},
        };
    },
    methods: {
        stripHTMLTags(input) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = input;
            return tempDiv.textContent || tempDiv.innerText || '';
        }
    },
    created() {
        this.setBreadcrumbs(this.model, "view");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
