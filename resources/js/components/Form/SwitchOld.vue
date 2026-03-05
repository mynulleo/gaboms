<template>
  <div class="">
    <span :id="id"> <slot></slot> </span>
    <label for="" class="d-block w-100"
      >{{ title ? title : "Status" }}
      <sup v-if="req" class="text-danger">*</sup></label
    >
    <button
      :name="name"
      class="btn-redesign"
      type="button"
      role="switch"
      :aria-checked="isChecked.toString()"
      :aria-labelledby="id"
      @click="toggle"
    >
      <span>{{ onLabel }}</span> <span>{{ offLabel }}</span>
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: null,
      isChecked: this.value,
    };
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    onLabel: {
      type: String,
      default: "on",
    },
    offLabel: {
      type: String,
      default: "off",
    },
    title: {
      type: String,
      default: false,
    },
    name: {
      type: String,
      default: false,
    },
    req: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      let value = "active";

      if (this.isChecked) {
        value = "deactive";
      } else {
        value = "active";
      }

      this.$emit("update:modelValue", value);
      this.isChecked = !this.isChecked;
    },
  },
  mounted() {
    this.id = Math.random().toString(36).substring(2, 15);
  },
  created() {
    console.log(this.modelValue);
    if (this.modelValue == "active") {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  },
};
</script>

<style scoped>
button {
  padding: 0.25rem 0.5rem;
  border: 0.25rem solid;
  border-radius: 0.25rem;
  font: inherit;
}

[aria-checked] span {
  font-size: 0.75rem;
  font-weight: bold;
  display: inline-block;
  border-radius: 0.25rem;
  padding: 0.25rem;
  color: rgb(102, 101, 101);
}

[aria-checked="false"] :last-child {
  background-color: red;
  border: 2px solid transparent;
  color: #fff;
}

[aria-checked="true"] :first-child {
  background-color: green;
  border: 2px solid transparent;
  color: #fff;
}
</style>
