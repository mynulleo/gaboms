<template>
    <view-page :defaultTable="false">
        <div class="view_page">
            <div class="row custom_row">
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Profile Image</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="view_file_item text-center" style="width: 100%; height: 100%">
                                        <div class="img" style="width: 100%; height: 100%">
                                            <!-- <img
                                                :src="
                                                    data?.profile_one
                                                        ? data.profile_one
                                                        : emptyImage()
                                                "
                                                alt="img-cover"
                                                style="
                                                    width: 100%;
                                                    height: 100%;
                                                    object-fit: cover;
                                                "
                                            /> -->
                                            <img :src="data?.profile_one == 'no_server_image' ? emptyServerImage() : (data?.profile_one || emptyImage())"
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
                        <span class="legend">Profile Details</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.name ?? " " }}</td>
                                    </tr>
                                    <tr>
                                        <th>Role</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.role?.name ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.mobile ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.email ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.gender ?? "" }}</td>
                                    </tr>

                                    <tr>
                                        <th>Birthdate</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.birth_date ?? " " }}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.address ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>City</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.city ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>State</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.state ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Zip Code</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.zip_code ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Road Number</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.road_number ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.description ?? "" }}</td>
                                    </tr>

                                    <tr>
                                        <th>Status</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            <span :class="[
                                                data?.status == 'active'
                                                    ? 'bg-success'
                                                    : 'bg-danger ',
                                                'badge mt-1',
                                                'text-white ',
                                            ]">{{ ucfirst(data?.status) }}
                                            </span>
                                        </td>
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
const model = "admin";

export default {
    data() {
        return {
            page_title: "Admin View",
            model: model,
            data: {},
            fileColumns: [{ field: "thumb", title: "Image" }],
        };
    },
    created() {
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
