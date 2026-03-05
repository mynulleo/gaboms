<template>
    <view-page :defaultTable="false" :dynamicModel="Album" :dynamicDataId="data.album_id">
        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-8 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-3">
                                <div class="col-lg-6">
                                    <div class="card overflow-hidden mt-2">
                                        <div class="card-body">
                                            <div class="text-center" style="width: 100%; height: 100%;">
                                                <div class="img" style="width: 100%; height: 100%;">
                                                    <img :src="data?.thumbnail_one == 'no_server_image' ? emptyServerImage() : (data?.thumbnail_one || emptyImage())"
                                                        alt="img-cover"
                                                        style="width: 100%; height: 100%; object-fit: cover" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card overflow-hidden mt-2">
                                        <div class="card-body">
                                            <template v-if="isYouTubeVideo && youtubeEmbedUrl">
                                                <iframe width="100%" height="350px" :src="youtubeEmbedUrl"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen>
                                                </iframe>
                                            </template>
                                            <template v-else-if="data?.url">
                                                <object width="100%" height="350px" :data="data?.url"></object>
                                            </template>
                                            <template v-else>
                                                <div
                                                    style="display: flex; justify-content: center; align-items: center; height: 350px;">
                                                    <p>No video found</p>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Information</span>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Album</th>
                                        <th style="text-align: center;">:</th>
                                        <router-link :to="{
                                            name: 'album.show',
                                            params: {
                                                id: data?.album?.id,
                                            },
                                        }">{{
                                            data?.album?.name
                                        }}</router-link>
                                    </tr>
                                    <tr>
                                        <th>URL</th>
                                        <th style="text-align: center;">:</th>
                                        <td><a :href="data?.url" target="_blank">{{ data?.url }}</a>
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
const model = "video";

export default {
    data() {
        return {
            page_title: "Video View",
            model: model,
            data: {},
            fields: ["title", "thumbnail", "url", "sorting", "status", "created_at"],
            belongs_to: {
                data: {},
                fields: ["name"],
                model: "album",
            },
        };
    },
    computed: {
        isYouTubeVideo() {
            return this.data.url && this.data.url.includes('youtube.com/watch');
        },
        youtubeEmbedUrl() {
            if (this.isYouTubeVideo) {
                const videoId = this.data.url.split('v=')[1].split('&')[0];
                return `https://www.youtube.com/embed/${videoId}`;
            }
            return '';
        }
    },
    methods: {
        getVideo() {
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
        this.getVideo();
    },
};
</script>
