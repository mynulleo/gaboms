<template>
    <view-page>
        <div class="view_page pb-4">
            <div class="row custom_row g-3">
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div
                                        class="view_file_item text-center"
                                        style="width: 100%; height: 100%"
                                    >
                                        <div
                                            class="img"
                                            style="width: 100%; height: 100%"
                                        >
                                            <img
                                                :src="
                                                    data?.original_image
                                                        ? data?.original_image
                                                        : emptyImage()
                                                "
                                                alt="img-cover"
                                                style="
                                                    width: 100%;
                                                    height: 100%;
                                                    object-fit: cover;
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Testimonial Details</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ ucfirst(data.name ?? "") }}</td>
                                    </tr>
                                    <tr>
                                        <th>Designation</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{
                                                ucfirst(data.designation ?? "")
                                            }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sorting</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ ucfirst(data.sorting ?? "") }}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            <span
                                                :class="[
                                                    data?.status == 'active'
                                                        ? 'bg-success'
                                                        : 'bg-danger ',
                                                    'badge mt-1 mx-2',
                                                    'text-white ',
                                                ]"
                                            >
                                                {{ ucfirst(data.status) }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="view_page pb-4">
                <div class="row custom_row g-3">
                    <div class="col-xl-12 col-lg-12">
                        <fieldset>
                            <span class="legend"> Description</span>
                            <div class="view_file">
                                <div class="row g-4">
                                    <div class="col-lg-12">
                                        <div
                                            class="view_file_item"
                                            style="width: 100%; height: 100%"
                                        >
                                            <p
                                                class="text"
                                                v-html="data?.description"
                                            ></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </view-page>
</template>

<script>
const model = "testimonial";
export default {
    data() {
        return {
            page_title: "Testimonial View",
            model: model,
            data: {},
            fileColumns: [
                {
                    field: "original_image",
                    title: "Image",
                },
            ],
        };
    },
    created() {
        this.setBreadcrumbs(this.model, "view");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
