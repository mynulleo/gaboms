<template>
    <create-form @onSubmit="submit">
        <Select field="data.parent_id" title="Parent Menu" v-model="data.parent_id" label="name"
            :reduce="(obj) => obj.id" :options="parentMenu" placeholder="--Select One--" :closeOnSelect="true" />

        <Input v-model="data.title" field="data.title" title="Title" :req="true" class="col-md-3" />
        <Select field="data.type" title="Menu Type" :req="true" v-model="data.type" label="name"
            :reduce="(obj) => obj.id" :options="menu_types" placeholder="--Select One--" :closeOnSelect="true" />
        <Select field="data.menu_look_type" title="Menu Look Type" :req="true" v-model="data.menu_look_type"
            label="name" :reduce="(obj) => obj.id" :options="menu_look_types" placeholder="--Select One--"
            :closeOnSelect="true" />
        <Select title="Content" field="data.content_id" v-if="data.type == 'content'" :req="true"
            v-model="data.content_id" label="title" :reduce="(obj) => obj.id" :options="contents"
            placeholder="--Select One--" :closeOnSelect="true" />
        <Input v-if="data.type == 'outside_website'" :title="data.type == 'outside_website' ? 'URL' : 'Route Name'"
            field="data.url" v-model="data.url" :req="false" />

        <Select v-if="data.type == 'internal_link'" field="data.url" title="Route Name" :req="false" v-model="data.url"
            label="key" :reduce="(obj) => obj.key" :options="frontEndRoutes" placeholder="--Select Any--"
            :closeOnSelect="true" />

        <Input v-if="data.type == 'internal_link'" title="Params" field="data.params" v-model="data.params" />
        <Select field="data.position" title="Menu Position" :req="true" v-model="data.position" label="name"
            :reduce="(obj) => obj.id" :options="positions" placeholder="--Select One--" :closeOnSelect="true" />
        <Input title="Sorting" field="data.sorting" v-model="data.sorting" type="number" :req="true" />
        <Switch v-model="data.status" on-label="Active" off-label="Deactive"></Switch>
    </create-form>
</template>
<script>
const model = "frontMenu";
export default {
    data() {
        return {
            page_title: "",
            selectedValue: null,
            model: model,
            contents: [],
            /* extraData: {
                            contents: [],
                        }, */
            parentMenu: [],
            frontEndRoutes: [],
            menu_types: [
                { id: "content", name: "Content" },
                { id: "internal_link", name: "Internal Link" },
                { id: "outside_website", name: "Outside Website" },
            ],
            menu_look_types: [
                { id: "normal", name: "Normal" },
                { id: "mega", name: "Mega" },
            ],
            positions: [
                { id: "header", name: "Header" },
                { id: "top_bar", name: "Top Bar" },
                { id: "quick_link", name: "Quick Link" },
                { id: "footer", name: "Footer" },
                { id: "footer_bottom", name: "Footer Bottom" },
            ],
            data: {
                status: "active",
                sorting: 0,
            },
        };
    },
    watch: {
        "data.params"(next, prev) {
            if (next !== prev) {
                if (this.data.params) {
                    this.data.params = this.data.params.toLowerCase();
                }
            }
        },
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    methods: {
        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();
                this.$validate().then((res) => {
                    if (error > 0) {
                        this.$toast(
                            "You need to fill " + error + " more empty mandatory fields",
                            "warning"
                        );
                        return false;
                    }
                    if (res) {
                        if (this.data.id) {
                            this.update(this.model, this.data, this.data.id);
                        } else {
                            console.log("dta", this.model, this.data);
                            this.store(this.model, this.data);
                        }
                    }
                });
            });
        },
        get_parent: function () {
            axios.get("/parent-menus").then((res) => (this.parentMenu = res.data));
        },
        getFrontRoutes() {
            axios.get("/frontend-routes").then((res) => (this.frontEndRoutes = res.data));
            console.log("frontend-routes", this.frontEndRoutes);
        },
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = "Frontend Menu Edit";
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.page_title = "Frontend Menu Create";
            this.get_sorting("Website-FrontMenu");
        }
        this.getFrontRoutes();
        this.get_parent();
        axios.get("get-content?page=1&allData=true").then((res) => {
            this.contents = res.data;
        });
        // make parentMenu as array
        if (!Array.isArray(this.parentMenu)) {
            this.parentMenu = [];
        }
    },
    validators: {
        "data.menu_look_type": function (value = null) {
            return Validator.value(value).required("Menu look is required");
        },
        "data.type": function (value = null) {
            return Validator.value(value).required("Menu Type is required");
        },
        "data.position": function (value = null) {
            return Validator.value(value).required("Menu Position is required");
        },
        /* "data.params": function (value = null) {
                return Validator.value(value).regex("^[a-z0-9-]+$", "Only lowercase");
                }, */
        "data.title": function (value = null) {
            return Validator.value(value).required("Title is required");
        },
        "data.url": function (value = null) {
            if (this.data.type === "outside_website") {
                return Validator.value(value).url().required("URL is required");
            }
        },
        "data.content_id": function (value = null) {
            if (this.data.type == "content") {
                return Validator.value(value).required("Content is required");
            }
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
    },
};
</script>
