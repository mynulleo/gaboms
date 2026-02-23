<template>
  <RenderlessPagination
    :data="data"
    :limit="limit"
    :keep-length="keepLength"
    @pagination-change-page="onPaginationChangePage"
    v-slot="slotProps"
  >
    <div
      class="pagination mt-4 d-flex justify-content-start justify-content-md-end"
      v-bind="$attrs"
      aria-label="Pagination"
      v-if="slotProps.computed.total > slotProps.computed.perPage"
    >
      <ul>
        <li class="arrow">
          <a
            href="#"
            :disabled="!slotProps.computed.prevPageUrl"
            v-on="slotProps.prevButtonEvents"
            ><i class="fa fa-arrow-left"></i
          ></a>
        </li>

        <li class="mid-pagi">
          <a
            href="#"
            :class="`${
              slotProps.computed.currentPage == page ? 'active' : null
            } `"
            :aria-current="slotProps.computed.currentPage ? 'page' : null"
            v-for="(page, key) in slotProps.computed.pageRange"
            :key="key"
            v-on="slotProps.pageButtonEvents(page)"
          >
            <span>
              {{ page }}
            </span>
          </a>
        </li>
        <li class="arrow">
          <a href="#"><i class="fa fa-arrow-right"></i></a>
        </li>
      </ul>
    </div>
  </RenderlessPagination>
</template>

<script>
import RenderlessPagination from "laravel-vue-pagination/src/RenderlessPagination.vue";

export default {
  inheritAttrs: false,
  emits: ["pagination-change-page"],
  components: {
    RenderlessPagination,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    limit: {
      type: Number,
      default: 0,
    },
    keepLength: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeClass: null,
    };
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit("pagination-change-page", page);
    },
  },
};
</script>
