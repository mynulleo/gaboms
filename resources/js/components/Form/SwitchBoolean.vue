<template>
  <div :class="`col-md-${col} align-self-center`">
    <div class="form-group">
      <label class="form-label" :for="id ?? `input-${uuid}`">
        {{ title }}
        <sup v-if="req" class="text-danger">*</sup>

        <!-- icon error -->
        <span class="icon_error" v-if="has_error">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14.897 1a4 4 0 0 1 2.664 1.016l4.265 4.256a4 4 0 0 1 1.174 2.832v5.794a4 4 0 0 1 -1.016 2.664l-4.1 4.1a4 4 0 0 1 -2.83 1.174h-5.795a4 4 0 0 1 -2.664 -1.016l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604v-5.794a4 4 0 0 1 1.016 -2.664l4.1 -4.1a4 4 0 0 1 2.832 -1.174zM12 15a1 1 0 0 0 -1 1v.117a1 1 0 0 0 2 0v-.117a1 1 0 0 0 -1 -1zm0-8a3 3 0 0 0 -3 3a1 1 0 1 0 2 0a1 1 0 1 1 2 0c0 .552-.448 1-1 1a1 1 0 0 0 0 2a3 3 0 0 0 0-6z" />
          </svg>
          <span class="error_info active_error_info">
            {{ error_message }}
          </span>
        </span>
      </label>

      <div class="status_box">
        <div class="status_select">
          <input :id="id ?? `input-${uuid}`" class="switch" :class="{ 'readonly-switch': readonly }" type="checkbox"
            :name="name ?? `input-${uuid}`" v-model="status" @change="updateModel" :disabled="disabled" />
        </div>
        <div class="action">
          <span class="active" v-if="status">{{ onLabel }}</span>
          <span class="deactive" v-else>{{ offLabel }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      status: false,
      uuid: uuidv4(),
      has_error: false,
      error_message: "",
    };
  },
  props: {
    id: { type: String, default: null },
    modelValue: { type: [Boolean, Number, String], default: 0 },
    onLabel: { type: String, default: "Active" },
    offLabel: { type: String, default: "Inactive" },
    title: { type: String, default: "Field" },
    name: { type: String, default: null },
    req: { type: Boolean, default: false },
    col: { type: String, default: "6" },
    field: { type: String, default: null }, // error match এর জন্য
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  inject: {
    validate: {
      default: () => ({ errors: [] })
    }
  },

  watch: {
    "validate.errors": {
      immediate: true,
      handler() {
        if (this.validate.errors.length > 0) {
          const err = this.validate.errors.find(
            e => e.field === this.field
          );
          if (err) {
            this.has_error = true;
            this.error_message = err.message;
          } else {
            this.has_error = false;
            this.error_message = "";
          }
        } else {
          this.has_error = false;
          this.error_message = "";
        }
      },
    },

    modelValue: {
      immediate: true,
      handler(value) {
        this.status = Number(value) === 1;
      }
    }
  },

  methods: {
    onToggle(e) {
      if (this.readonly) {
        // rollback change
        e.target.checked = this.status;
        return;
      }

      this.updateModel();
    },
    updateModel() {
      const val = this.status ? 1 : 0;
      this.$emit("update:modelValue", val);
    },
  },

  created() {
    this.updateModel();
  },
};
</script>
