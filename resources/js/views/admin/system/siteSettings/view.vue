<template>
    <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
        <div class="viewer_devider"></div>
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-3">
                                <div class="col-lg-4">
                                    <div class="view_file_item text-center">
                                        <div class="img">
                                            <img :src="data?.logo_one ===
                                                'no_server_image'
                                                ? emptyServerImage()
                                                : data?.logo_one ||
                                                emptyImage()
                                                " alt="logo-image" class="img-fluid" />
                                        </div>
                                        <div class="image-name">Logo</div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="view_file_item text-center">
                                        <div class="img">
                                            <!-- <img :src="data?.logo_small_one ? data.logo_small_one : emptyImage()" alt=""
                                                class="img-fluid" /> -->
                                            <img :src="data?.logo_small_one ===
                                                'no_server_image'
                                                ? emptyServerImage()
                                                : data?.logo_small_one ||
                                                emptyImage()
                                                " alt="logo-image" class="img-fluid" />
                                        </div>
                                        <div class="image-name">Small Logo</div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="view_file_item text-center">
                                        <div class="img">
                                            <!-- <img :src="data?.favicon ? data.favicon : emptyImage()" alt=""
                                                class="img-fluid" /> -->
                                            <img :src="data?.favicon ===
                                                'no_server_image'
                                                ? emptyServerImage()
                                                : data?.favicon ||
                                                emptyImage()
                                                " alt="logo-image" class="img-fluid" />
                                        </div>
                                        <div class="image-name">Favicon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Links</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th class="view_t_head">Web</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.web ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Facebook</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.fb }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Twitter</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.tw }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Linkedin</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.ln }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Youtube</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.yt }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>

                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Information</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th class="view_t_head">Title</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.title ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Short Title</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.short_title ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">
                                            Contact Email
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.contact_email ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">
                                            Feedback Email
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ data?.feedback_email ?? "" }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Mobile One</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.mobile1 ?? "" }}</td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Mobile One</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.mobile2 ?? "" }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Statistics</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th class="view_t_head">
                                            Residence
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ data?.residence }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">
                                            Flat
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ data?.flat }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">
                                            Resident
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ data?.resident }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">
                                            Registration
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ data?.registration }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Created at</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ enFormat(data?.created_at) }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="view_t_head">Updated at</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            {{ enFormat(data?.updated_at) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>

                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Address</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th class="view_t_head">Address</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.address }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-12 mt-2">
                                <div class="address--maps mt-4">
                                    <iframe :src="data?.map" width="100%" height="auto" style="border: 0"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Address Two</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th class="view_t_head">Address Two</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.address_two }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="col-12 mt-2">
                                <div class="address--maps mt-4">
                                    <iframe :src="data?.map_two" width="100%" height="auto" style="border: 0"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </view-page>
</template>

<script>
const model = "siteSetting";

export default {
    data() {
        return {
            page_title: "Site Settings",
            model: model,
            data: {},
            page_type: "view",
        };
    },
    created() {
        // this.setBreadcrumbs(this.model, "view", "", `${this.model}.show`);
        // await this.get_data(`${this.model}/${this.$route.params}`);
        this.$root.spinner = true;
        axios
            .get(this.model)
            .then((res) => {
                this.data = res.data;
            })
            .catch((error) => {
                console.log(error);
                this.$toast("Something went wrong");
                return false;
            })
            .finally(() => {
                this.$root.spinner = false;
            });
    },
};
</script>

<style scoped>
.color-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: 1px solid #ccc;
}

/* for map */
.address {
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

.address--maps {
    width: 100%;
    height: 100%;
}

.address--maps iframe {
    width: 100%;
    height: 100%;
}

.image-name {
    margin-top: 0.5rem;
    /* Adjust spacing as needed */
    font-size: 0.9rem;
    color: #555;
    /* Adjust color as needed */
}
</style>
