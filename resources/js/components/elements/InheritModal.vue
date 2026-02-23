<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="`${id}`"
    aria-hidden="false"
    :data-name="`${name}`"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div :class="`modal-dialog ${type}`">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-black" :id="`${id}Label`">
            <slot name="title"></slot>
          </h5>
          <button type="button" class="btn-close" @click="hide()"></button>
        </div>
        <div class="modal-body" style="padding: 0px !important">
          <div class="row align-items-center">
            <slot name="body"></slot>
          </div>
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: ["id", "name", "type"],
  computed: {
    ...mapState("inherit", ["inherit"]),
  },
  methods: {
    hide() {
      $(`#${this.id}`).modal("hide");
      this.$store.commit("inherit/setInherit", false);
    },
  },
};
</script>

<style scoped>
</style>
