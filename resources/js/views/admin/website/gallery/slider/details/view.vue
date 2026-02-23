<template>
    <view-page :defaultTable="false">
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="view_file_item text-center" style="width: 100%; height: 100%;">
                                        <div class="img" style="width: 100%; height: 100%;">
                                            <img :src="data?.thumb_one == 'no_server_image' ? emptyServerImage() : (data?.thumb_one || emptyImage())"
                                                alt="img-cover" style="width: 100%; height: 100%; object-fit: cover;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-8 col-lg-12">
                    <fieldset>
                        <span class="legend">Information</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Title</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ ucfirst(data?.title ?? " ") }}</td>
                                    </tr>
                                    <!-- <tr>
                                        <th>Slider Name</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.meta_description ?? " " }}</td>
                                    </tr> -->
                                    <tr v-if="data.url">
                                        <th>Url</th>
                                        <th style="text-align: center;">:</th>
                                        <td>
                                            <a :href="data?.url" target="_blank">{{ data?.url }}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Has Button</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.has_button ?? " " }}</td>
                                    </tr>
                                    <tr>
                                        <th>Button Name</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.button_name ?? " " }}</td>
                                    </tr>
                                    <tr>
                                        <th>Button Type</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.button_type ?? " " }}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <th style="text-align: center;">:</th>
                                        <td>
                                            <p class="text" v-html="data?.description"></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sorting</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.sorting ?? " " }}</td>
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
    </view-page>
</template>

<script>
const model = "slider-details";

export default {
    data() {
        return {
            page_title: "Slider Details View",
            model: model,
            data: {},
        };
    },
    created() {
        this.setBreadcrumbs(this.model, "view");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
