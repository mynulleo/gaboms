<template>
    <div>
        <!-- full page loading -->
        <div class="fullpage_loader" v-if="$root.initialLoader">
            <!-- <div class="loader"></div> -->
        </div>

        <router-view></router-view>

        <ValidationMessage />
    </div>
</template>

<script>
import ValidationMessage from "./elements/ValidationMessage.vue";

export default {
    components: {
        ValidationMessage,
    },

    props: {
        successMessage: {
            type: String,
            default: "",
        }
    },

    mounted() {
        if (this.successMessage) {
            this.$toast(this.successMessage, "success");
        }
    }
};
</script>
