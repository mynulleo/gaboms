<template>
  <Teleport to="body">
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      :aria-labelledby="`${id}`"
      aria-hidden="true"
      data-bs-keyboard="false"
    >
      <div :class="`modal-dialog ${type}`">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black" :id="`${id}Label`">
              <slot name="title"></slot>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row align-items-center">
              <slot name="body"></slot>
            </div>
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: ["id", "name", "type"],
};
</script>

<style scoped>
</style>
