<template>
    <view-page :defaultTable="false">
        <!-- <template v-slot:custom_header>
            <div class="top--title">
                <h4>Album: {{ data?.album?.name }}</h4>
            </div>
        </template> -->
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Information</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Album</th>
                                        <th style="text-align: center;">:</th>
                                        <td><router-link :to="{
                                            name: 'album.show',
                                            params: { id: data?.id },
                                        }">{{ data?.album?.name }}</router-link></td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <th style="text-align: center;">:</th>
                                        <td>{{ data?.title ?? " " }}</td>
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

                <div class="col-xl-6 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-3">
                                <div class="col-lg-4">
                                    <div class="view_file_item text-center">
                                        <div class="img">
                                            <img :src="data.thumb ? data.thumb : emptyImage()" alt="img-cover">
                                        </div>
                                    </div>
                                </div>

                            </div>
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
            axios.get(`${this.model}/${this.$route.params.id}`).then((res) => {
                this.data = res.data;
            });
        },
    },

    created() {
        this.setBreadcrumbs(this.model, "view");
        this.getPhoto();
    },
};
</script>
