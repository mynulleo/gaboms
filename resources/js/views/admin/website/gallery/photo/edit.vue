<template>
    <create-form @onSubmit="submit">
            <File title="Image" field="data.thumb" mime="img" fileClassName="file2" col="3" :req="true" />
            <v-select-container field="data.album_id" :req="true" title="Album Name" col="4">
                <v-select v-model="data.album_id" label="name" :reduce="(obj) => obj.id" :options="albums"
                    placeholder="--Select One--" :closeOnSelect="true"></v-select>
            </v-select-container>
            <Input v-model="data.title" field="data.title" title="Title" col="5" />
            <Input title="Sorting" field="data.sorting" v-model="data.sorting" req col="2" />
            <Switch v-model="data.status" on-label="Active" off-label="Deactive" :req="true"></Switch>
    </create-form>
</template>

<script>
const model = "photo";

export default {
    data() {
        return {
            page_title:"Photo Edit",
            model: model,
            data: { album_id: null, title: "Test", thumb: "", sorting: 0 },
            image: { thumb: "" },
            albums: [],
        };
    },
    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.image,
        };
    },
    methods: {
        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();

                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " + error + " more empty mandatory fields",
                        "warning"
                    );
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);

                    formData.append("album_id", this.data.album_id);
                    formData.append("status", this.data.status);
                    this.update(this.model, formData, this.data.id, "image");
                }
            });
        },
        getAlbum() {
            axios.get("/get-album/Photos").then((res) => (this.albums = res.data));
        },
    },
    created() {
        this.setBreadcrumbs(this.model, "edit");
        this.get_data(`${this.model}/${this.$route.params.id}`);
        this.getAlbum();
    },

    validators: {
        "data.album_id": function (value = null) {
            return Validator.value(value).required("Album is required");
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
    },
};
</script>

