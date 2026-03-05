<template>
    <v-select-container
        title="Select Status"
        field="search_data.status"
        col="4"
    >
        <v-select
            v-model="search_data.status"
            label="name"
            :reduce="(obj) => obj.value"
            :options="modules"
            placeholder="--Select Status--"
            :closeOnSelect="true"
        ></v-select>
    </v-select-container>
</template>

<script>
export default {
    inject: ["search_data"],
    data() {
        return {
            modules: [
                { name: "All", value: "" },
                { name: "Active", value: "active" },
                { name: "Deactive", value: "deactive" },
            ],
        };
    },
};
</script>
