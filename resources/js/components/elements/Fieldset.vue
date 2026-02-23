<template>
    <div>
        <div class="viewer_devider"></div>
        <fieldset>
            <span class="legend">
                <slot name="name">{{ title }}</slot>
            </span>
            <div class="viewer_devider"></div>
            <div class="row custom_row g-3">
                <slot name="content"></slot>
            </div>
        </fieldset>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
    },
};
</script>
