<template>
    <view-page>


        <div class="view_page pb-4">
            <div class="row custom_row g-3">
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Notice Details</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Start Date</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ enFormat(data?.notice_date) }}</td>
                                    </tr>
                                    <tr>
                                        <th>End Date</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ enFormat(data?.notice_end) }}</td>
                                    </tr>
                                    <tr>
                                        <th>Notice Type</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.type ?? '' }}</td>
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
                                    <tr>
                                        <th>Created At</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.created_at ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Updated At</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.updated_at ?? "" }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-4 col-lg-12" v-if="data.file">
                    <fieldset>
                        <span class="legend">File</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="view_file_item text-center" style="width: 100%; height: 100%;">
                                        <div class="img" style="width: 100%; height: 100%;">
                                            <a :href="data.file" target="_blank">
                                                <img :src="pdfImage()" alt="img-cover"
                                                    style="width: 100%; height: 100%; object-fit: cover;">
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-6 col-lg-12" v-if="data.description">
                    <fieldset>
                        <span class="legend">Notice Details</span>
                        <p class="text" v-html="data?.description"></p>
                    </fieldset>
                </div>


            </div>
        </div>
    </view-page>
</template>

<script>
const model = "notice";

export default {
    data() {
        return {
            page_title: "Notice View",
            model: model,
            data: {},
            fileColumns: [],
        };
    },
    created() {
        this.setBreadcrumbs(this.model, "view");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
