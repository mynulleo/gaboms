<template>
  <!-- content part start -->
  <div class="view-page">
    <div class="row view-bg mt-3"> 
      <div class="w-100 mt-2">
        <div class="top--title mt-2">
          <h4>Title: {{ data?.title }}</h4>
        </div>
      </div>
      <div class="col-xl-6" v-if="(Array.isArray(fileColumns) && fileColumns.length > 0)">
        <Fieldset>
          <template v-slot:name>Image</template>
          <template v-slot:content>
            <div v-for="(file, inx) in fileColumns" :key="inx">
              <span v-for="(value, key) in data" :key="key">
                <div v-if="checkTrue(file.field, key)">
                  <div class="view-image" v-if="file.field == key">
                    <img :src=" value.includes('pdf') ? $root.baseurl + '/images/pdf.png' : value"
                      alt="prf" class="img-fluid w-100"
                      :style="!value.includes('pdf')
                          ? ''
                          : 'height: 50px;width: 50px !important;overflow: hidden;display: block;margin-left: 80px;'
                      "/>
                    <a :href="value" download v-if="value.includes('pdf')">
                      <i class="fa-solid fa-download"></i> Download
                    </a>
                  </div>
                </div>
              </span>
           </div>
          </template>
        </Fieldset>
        
      </div>

      <template v-if="typeof fields !== 'undefined'">
        <div :class="Array.isArray(fileColumns) && fileColumns.length > 0 ? 'col-xl-6' : 'col-xl-6'" :key="index">
          <Fieldset>
            <template v-slot:name>view page</template>
            <template v-slot:content>
              <table class="table table-striped table-bordered">
                <tbody>
                  <!----------- Belongs to ----------->
                  <template
                    v-if="belongs_to && belongs_to.data && belongs_to.fields"
                  >
                    <template
                      v-for="(item, index) in belongs_to.fields"
                      :key="index"
                    >
                      <tr>
                        <th class="text-capitalize">
                          {{ index !== 0 ? item : "Parent" }}
                        </th>
                        <th>:</th>
                        <td class="text-capitalize">
                          <template v-if="index !== 0">
                            {{ belongs_to.data[item] }}
                          </template>

                          <template v-else>
                            <a :href="`${$root.baseurl}/${belongs_to.model}/${belongs_to.data.id}`">
                              {{ belongs_to.data[item] }}
                            </a>
                          </template>
                        </td>
                      </tr>
                    </template>
                  </template>
                  <!----------- Belongs to ----------->

                  <tr v-for="(item, name) in fields" :key="'A' + name">
                    <slot v-if="item !== 'image'">
                      <slot v-if="item !== 'file'">
                        <th class="text-capitalize" v-if="typeof item == 'string'">
                          {{ item.replace(new RegExp("_", "g"), " ") }}:
                        </th>
                        <th v-if="typeof item == 'string'">:</th>
                        <td class="text-capitalize">
                          <span v-if="item == 'created_at'">
                            {{ data[item] ? $filter.enFormat(data[item]) : "N/A" }}
                          </span>

                          <span v-else-if="item == 'updated_at'">
                            {{ $filter.enFormat(data[item]) }}
                          </span>

                          <span v-else-if="item == 'image'">
                            <img :src="data[item]" width="100" />
                          </span>
                          <span v-else-if="item == 'img'">
                            <img :src="data[item]" width="100" />
                          </span>
                          <span v-else-if="item == 'thumbnail'">
                            <img :src="data[item]" width="100" />
                          </span>
                          <span v-else-if="item == 'thumb'">
                            <img :src="data[item]" width="100" />
                          </span>
                          <span v-else-if="item == 'logo'">
                            <img :src="data[item]" width="100" />
                          </span>
                          <span v-else-if="item == 'url'">
                            <!-- <iframe
                                  :src="data[item]"
                                  width="600"
                                  height="400"
                                ></iframe> -->
                            <a target="_blank" :href="url">{{ url }}</a>
                          </span>

                          <span v-else>
                            {{ data[item] }}
                          </span>
                        </td>
                      </slot>
                    </slot>
                  </tr>
                </tbody>
              </table>
            </template>
          </Fieldset>
        </div>
      </template>

      <template v-else>
        <template v-if="extra_row !== undefined">
          <div class="col-xl-6">
            <Fieldset> 
              <template v-slot:name>view page </template>
              <template v-slot:content>
                <table class="table table-striped table-bordered">
                  <tbody>
                    <template v-for="(item, index) in extra_row" :key="index">
                      <tr>
                        <th class="text-capitalize">{{ item[0] }}</th>
                        <th>:</th>
                        <td class="text-capitalize" v-for="(values, key) in item[1]" :key="key">
                          {{ data[item[0]][values] }}
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </template>
            </Fieldset>
          </div>
        </template>

        <div :class="Array.isArray(fileColumns) && fileColumns.length > 0 ? 'col-xl-6' : 'col-xl-6'"
          v-for="(slicedData, index) in sliceData(data, Object.keys(data).length)" :key="index">
          <Fieldset>
            <template v-slot:name>Information</template>
            <template v-slot:content>
              <table class="table table-striped table-bordered">
              <tbody>
                <!----------- Belongs to ----------->
                <template v-if="belongs_to && belongs_to.data && belongs_to.fields">
                  <template v-for="(item, index) in belongs_to.fields" :key="index">
                    <tr >
                      <th class="text-capitalize">
                        {{ index !== 0 ? item : "Parent" }}
                      </th>
                      <td>:</td>
                      <td class="text-capitalize">
                        <template v-if="index !== 0">
                          {{ belongs_to.data[item] }}
                        </template>

                        <template v-else>
                          <a :href="`${$root.baseurl}/${belongs_to.model}/${belongs_to.data.id}`">
                            {{ belongs_to.data[item] }}
                          </a>
                        </template>
                      </td>
                    </tr>
                  </template>
                </template>
                <!----------- Belongs to ----------->
                <tr v-for="(item, name) in slicedData" :key="'A' + name">
                      <!-- {{name}} : {{ item }} -->

                      <th class="text-capitalize">
                        {{ name.replace(new RegExp("_", "g"), " ") }}
                      </th>
                      <th>:</th>
                      <td class="text-capitalize">
                        <span v-if="name == 'created_at'">
                          {{ $filter.enFormat(item) }}
                        </span>
                        <span v-else-if="name == 'updated_at'">
                          {{ $filter.enFormat(item) }}
                        </span>
                        <span v-else-if="name.includes('image')">
                          <!-- <img :src="item" width="100" />
                          <a target="_blank" :href="item">Image Link</a> -->
                        </span>
                        <span v-else-if="name.includes('profile')">
                          <img :src="item" width="100" />
                        </span>
                        <span v-else-if="name.includes('img')">
                          <!-- <img :src="item" width="100" />
                          <a target="_blank" :href="item">Image Link</a> -->
                        </span>
                        <span v-else-if="name.includes('thumbnail')">
                          <!-- <img :src="item" width="100" /> -->
                        </span>
                        <span v-else-if="name.includes('original_image')">
                          <!-- <img :src="item" width="100" /> -->
                        </span>
                        <span v-else-if="name.includes('thumb')">
                          <!-- <img :src="item" width="100" /> -->
                        </span>
                        <span v-else-if="name.includes('logo')">
                          <img :src="item" width="100" />
                        </span>
                        <span v-else-if="name.includes('url')">
            
                          <a target="_blank" :href="url">{{ url }}</a>
                        </span>
                        <span v-else-if="name.includes('file')">
                        </span>
                        <span v-else-if="name == 'date'">{{
                          $filter.enFormat(item)
                        }}</span>
                        <span v-else> <span v-html="item"></span></span>
                      </td>
                   
                </tr>
              </tbody>
            </table>
            </template>
          </Fieldset>
        </div>
      </template>
    </div>
  </div>

  <!-- content part end -->
</template>

<script>
export default {
  setup() {},
  props: ["data", "fileColumns", "belongs_to", "fields", "extra_row"],
  methods: {
    checkTrue(field, index) {
      return field == index ? true : false;
    },
    loop(data, pieces) {
      if (data) {
        const count = Object.keys(data).length / pieces;
        return count > 1 ? count : 1;
      }
    },
    sliceData(obj, pieces) {
      const result = [];
      const keys = Object.keys(obj);
      const rowspan = Math.ceil(keys.length / pieces);
      const size = Math.ceil(keys.length / rowspan);

      for (let i = 0; i < keys.length; i += size) {
        const slice = {};
        for (let j = i; j < i + size && j < keys.length; j++) {
          slice[keys[j]] = obj[keys[j]];
        }
        result.push(slice);
      }
      return result;
    },
  },
};
</script>

<style scoped>

table{
  border: 1px solid #e0e4f2; 
  margin-top: -10px; 
  margin-bottom: 0;
}

table th:first-child {
  text-align: left !important;
  width: 45%;
  font-size: 13px;
}

table th:nth-child(2) {
  text-align: center !important;
  width: 10%;
  font-size: 13px;
}

table td {
  text-align: left !important;
  width: 45%;
  font-size: 13px;
}
</style>
