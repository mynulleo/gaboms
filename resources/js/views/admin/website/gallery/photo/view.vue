<template>
    <view-page :defaultTable="false" :dynamicModel="Album" :dynamicDataId="data.album_id">
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="img">
                                        <img :src="data?.thumb_two == 'no_server_image' ? emptyServerImage() : (data?.thumb_two || emptyImage())"
                                            alt="img-cover" style="width: 100%; height: 100%; object-fit: cover" />
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
                                        <th>Album</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            <router-link :to="{
                                                name: 'album.show',
                                                params: {
                                                    id: data?.album?.id,
                                                },
                                            }">{{
                                                data?.album?.name
                                                }}</router-link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <th style="text-align: center">:</th>
                                        <td>{{ data?.title ?? "N/A" }}</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <th style="text-align: center">:</th>
                                        <td>
                                            <span :class="[
                                                data?.status == 'active'
                                                    ? 'bg-success'
                                                    : 'bg-danger ',
                                                'badge mt-1 mx-2',
                                                'text-white ',
                                            ]">
                                                {{ ucfirst(data?.status) }}
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

<style scop>
.image {
    width: 100%;
    height: 300px;
}

.image img {
    width: 100%;
    height: 300px;
    object-fit: contain;
}
</style>

<script>
const model = "photo";

export default {
    data() {
        return {
            page_title: "Photo View",
            model: model,
            data: {},
            fields: ["title", "created_at"],
            belongs_to: {
                data: {},
                fields: ["name"],
                model: "album",
            },
        };
    },

    methods: {
        getPhoto() {
            this.$root.spinner = true;
            axios.get(`${this.model}/${this.$route.params.id}`).then((res) => {
                this.data = res.data;
            }).catch(error => { })
                .finally(() => {
                    this.$root.spinner = false;
                });
        },
    },

    created() {
        this.setBreadcrumbs(this.model, "view");
        this.getPhoto();
    },
};
</script>
