<template>
    <!--  <div class="col-lg-12">
        <div class="static_fieldset">
            <div class="check_box style2">
                <div class="form-check">
                    <input class="form-check-input shadow-none d-none" type="checkbox" id="flexCheckChecked1"
                        v-model="data.is_meta" @change="updateModel">
                    <label class="form-check-label" for="flexCheckChecked1">
                        Show / Hide Meta Information
                    </label>
                </div>
            </div>
        </div>
    </div> -->

    <div class="col-lg-12">
        <div id="meta_box" class="static_fieldset">
            <div class="check_box style2">
                <div class="form-check">
                    <input class="form-check-input shadow-none d-none" type="checkbox" v-model="data.is_meta"
                        @change="updateModel" id="flexCheckChecked1">
                    <label class="form-check-label" for="flexCheckChecked1">
                        <span class="icon"></span> Show / Hide Meta Information
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-12" v-if="data.is_meta">
        <Fieldset>
            <template v-slot:name>Meta Information</template>
            <template v-slot:content>
                <div class="row g-3">
                    <div class="col-12">
                        <v-select-container field="meta_tag" title="Meta Keywords(Optional)"
                            col="12 multiple_tags_input">
                            <v-select taggable multiple name="meta_tag" v-model="data.meta_tag" no-drop
                                @change="updateModel"></v-select>
                        </v-select-container>
                    </div>
                    <div class="col-12">
                        <div class="form-element">
                            <label for="" class="form-label">Meta Description(Optional)</label>
                            <textarea name="meta_description" v-model="data.meta_description" @change="updateModel"
                                class="form-control" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </template>
        </Fieldset>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Object,
        },

        /* div_Id: {
            type: string,
            default: false,
        }, */
    },

    data() {
        return {
            data: {
                is_meta: false,
                meta_tag: [],
                meta_description: "",
            }
        }
    },

    watch: {
        modelValue(value) {
            if (value?.is_meta === true) {
                this.data = value;
            }
        }
    },

    methods: {
        updateModel() {
            this.$emit('update:modelValue', this.data);
        },
    },
}
</script>
