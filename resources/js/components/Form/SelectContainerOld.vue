<template>
  <div
    :class="getClass()"
    class="col-sm-6 mt-0 pb-3 col-lg-4 col-xxl-3"
  >
    <div :class="isValidationError()">
      <label v-if="title" class="d-block w-100 mb-0 text-dark">
        <slot name="title"> {{ title.replaceAll("_", " ") }} </slot>

        <template v-if="tooltip">
          <sup v-if="req" class="text-danger">*</sup>
          <span class="ms-1 position-relative">
            <i
              :class="
                validate.firstError(this.field)
                  ? 'fa-solid fa-circle-question text-danger'
                  : ''
              "
            ></i>
            <small :class="getIcon(validate.firstError(this.field))">{{
              validate.firstError(this.field)
            }}</small>
          </span>

          <span class="float-end">
            <i
              class="fas fa-info-circle icon-color text-dark"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              :title="`Please Put ` + title.replaceAll('_', ' ') + ` Here`"
              ref="info"
            ></i>
          </span>
        </template>
      </label>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    field: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    col: {
      type: [String, Number],
    },
    req: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: Boolean,
      default: true,
    },
    responsive: {
      type: String,
      default: false,
    },
  },

  inject: ["validate"],
  computed: {
    fieldName() {
      return this.field.split(".").pop();
    },
  },
  methods: {
    getClass() {
      let className = "col-lg-" + this.col + " ";
      return className;
    },

    getIcon(error = null) {
      let errorStatus = this.validate.hasError(this.field);
      if (errorStatus && this.req) {
        $(".vs__dropdown-toggle").addClass("border-danger");
        return "position-absolute bg-danger text-white floating-tooltip text-center";
      } else if (error !== null) {
        $(".vs__dropdown-toggle").addClass("border-danger");
        return "position-absolute bg-danger text-white floating-tooltip text-center";
      } else if (this.field) {
        $(".vs__dropdown-toggle").removeClass("border-danger");
        $(".vs__dropdown-toggle").addClass("border-success");
        return "fas fa-circle-check text-success";
      }
    },
    isValidationError() {
      if (this.validate.hasError(this.field)) {
        const elm = window.document.getElementById("vs1__combobox");

        if (elm) {
          elm.style = "border-color:red !important;";
          return "invalide";
        }
      }
    },
  },
  mounted() {
    $('[data-bs-toggle="tooltip"]').tooltip();
  },
};
</script>

<style scoped>
.invalide {
  border-color: red !important;
}

.vs__dropdown-toggle {
  border: var(--vs-border-width) var(--vs-border-style) rgb(0 0 0) !important;
}
.vs__dropdown-menu li {
  color: #555;
}
.vs__search:focus {
  color: #555 !important;
}
.vs__dropdown-option--highlight {
  color: #fff !important;
}
.vs__search,
.vs__search:focus {
  margin: 5px 0 0 !important;
}
.icon-color {
  color: rgb(119 126 221);
}
</style>
