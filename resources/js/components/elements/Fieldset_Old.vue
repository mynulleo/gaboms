<template>
  <fieldset class="border border-primary w-100 p-4 rounded">
    <legend class="" style="font-size: 1.2rem">
      <slot name="name"></slot>
    </legend>
    <div class="row">
      <slot name="content"></slot>
    </div>
  </fieldset>
</template>

<script>
export default {};
</script>

<style scoped>
fieldset {
  border: 1px solid #9c9c9ce8 !important;
  margin-bottom: 25px;
  background-color: #fff;
}

</style>
