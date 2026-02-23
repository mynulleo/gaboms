<template>
    <button
        :type="type"
        :disabled="$root.submit ? true : false"
        class="theme_btn"

    >
        <span v-if="$root.submit">
            <i class="fa fa-spinner fa-spin"></i>
            <span v-if="process">{{ process }}...</span>
            <span v-else> Processing...</span>
        </span>
        <span v-else> {{ btnTitle }}</span>
    </button>
</template>

<script>
export default {
    data() {
        return {
            btnTitle: this.title,
        };
    },

    props: {
        title: {
            type: String,
        },

        process: {
            type: String,
        },

        type: {
            type: String,
            default: "submit",
        },
    },

    mounted() {
        let split = this.$route.name.split(".");
        if (split.length == 2) {
            if (this.title == "Submit" && split[1] == "edit") {
                this.btnTitle = "Update";
            }
        }
    },
};
</script>
