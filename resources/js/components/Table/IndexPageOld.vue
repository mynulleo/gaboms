<template>
  <div class="content-part">
    <div v-if="!$root.spinner" class="inner-content">
      <slot name="button" v-if="button">
        <AddOrBackButton
          :route="$parent.model + '.create'"
          :portion="$parent.model"
          :icon="'plus'"
        />
      </slot>
      <div class="global-form">
        <div class="global-form-header">
          <div class="row">
            <!-- search form -->
            <div
              v-if="searchBlock"
              :class="
                button
                  ? 'col-sm-12 col-lg-12'
                  : 'col-sm-12 col-lg-12'
              "
            >
              <Fieldset>
                <template v-slot:name>SEARCH BOX</template>
                <template v-slot:content>
                  <slot name="left-side">
                    <form v-on:submit.prevent="$parent.search">
                      <div class="row">
                        <slot name="search-field"></slot>

                        <template v-if="default_search">
                          <Search
                            :fields_name="$parent.fields_name"
                            v-if="$parent.fields_name && searchBlock"
                          />
                        </template>
                      </div>
                    </form>
                  </slot>
                </template>
              </Fieldset>
            </div>
            <!-- search form -->

            <!-- add or back button -->
            <slot name="button" v-if="button">
              
            </slot>
            <!-- add or back button -->
          </div>
        </div>
      </div>

      <Fieldset>
        <template v-slot:name>
          <div style="text-transform: capitalize" v-if="breadcrumbs[0]">
            {{
              capitalize(
                breadcrumbs[Object.keys(breadcrumbs).length - 1]["title"]
              )
            }}
          </div>
        </template>
        <template v-slot:content>
          <!-- default -->
          <slot name="table-list"></slot>

          <!-- base-table -->
          <base-table v-if="defaultTable"></base-table>
          <!-- base-table -->
        </template>
      </Fieldset>

      <Pagination />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultTable: {
      type: Boolean,
      default: true,
    },
    button: {
      type: Boolean,
      default: true,
    },
    searchBlock: {
      type: Boolean,
      default: true,
    },
    default_search: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
