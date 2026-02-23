<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="testcrop" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{ image }}
                        <cropper ref="cropper" :src="image" :stencil-props="aspectRatio" :default-size="defaultSize">
                        </cropper>
                        <div class="col-12 text-center">
                            <hr />
                            <button class="btn btn-success btn-sm text-white" @click="cropImage">
                                CROP IMAGE
                            </button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <b-modal id="canvas" title="Upload Photo" size="lg" no-close-on-backdrop>
            <cropper ref="cropper" :src="image" :stencil-props="aspectRatio" :default-size="defaultSize"></cropper>
            <div class="col-12 text-center">
                <hr />
                <button class="btn btn-success btn-sm text-white" @click="cropImage">
                    CROP IMAGE
                </button>
            </div>
        </b-modal> -->
    </div>
</template>
<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
    name: "CropImage",
    props: {
        image: String,
        aspectRatio: Object,
        width: Number,
        height: Number,
        field: String,
    },
    methods: {
        defaultSize() {
            return {
                width: 200,
                height: 200,
            };
        },
        cropImage() {
            const result = this.$refs.cropper.getResult();
            this.$parent.data[this.field] = result.canvas.toDataURL("image/jpeg");
            this.$bvModal.hide("canvas");
        },
    },
    components: {
        Cropper,
    },
};
</script>

<style>
.vue-advanced-cropper {
    height: 350px !important;
    background: #ddd !important;
}
</style>