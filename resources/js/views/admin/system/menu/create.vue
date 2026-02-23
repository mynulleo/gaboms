<template>
    <create-form @onSubmit="submit">
        <Select field="data.parent_id" title="Parent Menu" v-model="data.parent_id" label="name"
            :reduce="(obj) => obj.id" :options="allMenus" placeholder="--Select One--" :closeOnSelect="true" />
        <Input title="Menu Name" v-model="data.menu_name" field="data.menu_name" :req="true" />

        <v-select-container field="data.icon" title="Menu Icon" :req="true">
            <v-select v-model="data.icon" label="icon" :reduce="(obj) => obj.icon" :options="icons"
                placeholder="--Select Any--" :closeOnSelect="true"
                :class="validation.hasError('data.icon') ? 'v-border' : ''">
                <template #option="{ icon, icon_name }">
                    <em v-html="icon"></em> &nbsp; {{ icon_name }}
                </template>
            </v-select>
        </v-select-container>

        <Select field="data.route_name" title="Route Name" :req="true" v-model="data.route_name" label="name"
            :reduce="(obj) => obj.id" :options="permissions" placeholder="No Route" :closeOnSelect="true" />

        <Input title="Params" v-model="data.params" field="data.params" />
        <Input title="Sorting" field="data.sorting" v-model="data.sorting" type="number" :req="true" />
        <Radio v-if="data.route_name" title="Show Under Dashboard" v-model="data.show_dasboard" field="data.show_dasboard" :list="[
            { value: 1, title: 'Yes' },
            { value: 0, title: 'No' },
        ]" :req="true" />
        <Radio title="Show Under Profile" v-model="data.show_profile" field="data.show_profile" :list="[
            { value: 1, title: 'Yes' },
            { value: 0, title: 'No' },
        ]" :req="true" />

        <Select v-if="data.show_dasboard == 1" field="data.module_name" title="Module Name" :req="true"
            v-model="data.module_name" label="name" :reduce="(obj) => obj.base" :options="allModules"
            placeholder="--Select Any--" :closeOnSelect="true" />

    </create-form>
</template>

<script>
const model = "menu";
import icons from "./json/icon.json";

export default {
    data() {
        return {
            page_title: "",
            model: model,
            allMenus: [],
            icons: icons,
            allModules: [],
            data: {
                sorting: 0,
                show_dasboard: 0,
                show_profile: 0,
                module_name: null,
            },
        };
    },
    watch: {
        "data.params"(next, prev) {
            if (next !== prev) {
                this.data.params = this.data.params?.toLowerCase();
            }
        },
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    computed: {
        permissions() {
            let arr = [
                { id: this.$route.params.id ? null : "", name: "No Route" },
            ];
            
            if (
                this.$root.permissions &&
                Object.keys(this.$root.permissions).length > 0
            ) {
                this.$root.permissions.forEach((routeName) => {
                    arr.push({ id: routeName, name: routeName });
                });
            }
            return arr;
        },
    },
    methods: {
        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();

                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " +
                        error +
                        " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }

                if (res) {
                    if (this.data.id) {
                        this.update(this.model, this.data, this.data.id);
                    } else {
                        this.store(this.model, this.data);
                    }
                }
            });
        },
        getMenus() {
            axios
                .get("/get-menus/menu")
                .then((res) => (this.allMenus = res.data));
        },
        getModules() {
            axios
                .get("/get-modules")
                .then((res) => (this.allModules = res.data));
        },
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = "Backend Menu Edit";
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.page_title = "Backend Menu Create";
            this.get_sorting("System-Menu");
        }
        this.getMenus();
        this.getModules();
    },
    validators: {
        "data.params": function (value = null) {
            return Validator.value(value).regex(
                "^[a-z0-9-]+$",
                "Only lowercase"
            );
        },
        "data.menu_name": function (value = null) {
            return Validator.value(value).required("Menu name is required");
        },
        "data.module_name, data.show_dasboard": function (moduleName = null, showDashboard = null) {
            if (parseInt(showDashboard) === 1) {
                return Validator.value(moduleName).required("Module name is required");
            } else {
                return Validator.value(moduleName);
            }
        },
        "data.show_dasboard": function (value = null) {
            return Validator.value(value).required("Show dasboard is required");
        },
        "data.icon": function (value = null) {
            return Validator.value(value).required("Icon is required");
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
