<template>
    <div class="row custom_row g-3">
        <div class="col-xl-6 col-lg-12" v-if="typeof fields !== 'undefined'">
            <fieldset>
                <span class="legend">Information</span>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tbody>
                            <template v-if="
                                belongs_to &&
                                belongs_to.data &&
                                belongs_to.fields
                            ">
                                <tr v-for="(item, index) in belongs_to.fields" :key="index">
                                    <th class="view_t_head">
                                        {{ index !== 0 ? headline(item) : "Parent" }}
                                    </th>
                                    <th style="text-align: center">:</th>
                                    <td>
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

                            <tr v-for="(item, name) in fields" :key="'A' + name">
                                <template v-if="item !== 'image'">
                                    <template v-if="item !== 'file'">
                                        <th class="view_t_head" v-if="typeof item == 'string'">
                                            {{
                                                headline(item.replace(
                                                    new RegExp("_", "g"),
                                                    " "
                                                ))
                                            }}:
                                        </th>
                                        <th v-if="typeof item == 'string'" style="text-align: center">
                                            :
                                        </th>
                                        <td>
                                            <span v-if="item == 'created_at'">
                                                {{
                                                    data[item]
                                                        ? $filter.enFormat(
                                                            data[item]
                                                        )
                                                        : "N/A"
                                                }}
                                            </span>

                                            <span v-else-if="item == 'updated_at'">
                                                {{
                                                    $filter.enFormat(data[item])
                                                }}
                                            </span>

                                            <span v-else-if="item == 'image'">
                                                <img :src="data[item]" :href="data[item]" v-x-zoom-image width="100" />
                                            </span>
                                            <span v-else-if="item == 'img'">
                                                <img :src="data[item]" :href="data[item]" v-x-zoom-image width="100" />
                                            </span>
                                            <span v-else-if="item == 'thumbnail'">
                                                <img :src="data[item]" :href="data[item]" v-x-zoom-image width="100" />
                                            </span>
                                            <span v-else-if="item == 'thumb'">
                                                <img :src="data[item]" :href="data[item]" v-x-zoom-image width="100" />
                                            </span>
                                            <span v-else-if="item == 'logo'">
                                                <img :src="data[item]" :href="data[item]" v-x-zoom-image width="100" />
                                            </span>
                                            <span v-else-if="item == 'url'">
                                                <a target="_blank" :href="url">{{ url }}</a>
                                            </span>

                                            <span v-else>
                                                {{ data[item] }}
                                            </span>
                                        </td>
                                    </template>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>

        <div class="col-xl-6 col-lg-12" v-else-if="extra_row !== undefined">
            <fieldset>
                <span class="legend">Information</span>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tbody>
                            <tr v-for="(item, index) in extra_row" :key="index">
                                <th class="view_t_head">{{ headline(item[0]) }}</th>
                                <th style="text-align: center">:</th>
                                <td>
                                    <div v-for="(values, key) in item[1]" :key="key">
                                        {{ data[item[0]][values] }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </fieldset>
        </div>

        <template v-else>
            <div class="col-xl-6 col-lg-12" v-for="(slicedData, index) in sliceData(
                data,
                Object.keys(data).length
            )" :key="index">
                <fieldset>
                    <span class="legend">Information</span>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <tbody>
                                <template v-if="
                                    belongs_to &&
                                    belongs_to.data &&
                                    belongs_to.fields
                                ">
                                    <tr v-for="(item, index) in belongs_to.fields" :key="index">
                                        <th class="view_t_head">
                                            {{ index !== 0 ? headline(item) : "Parent" }}
                                        </th>
                                        <th style="text-align: center">:</th>
                                        <td>
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

                                <!----------- Belongs to ----------->
                                <tr v-for="(item, name) in slicedData" :key="'A' + name">
                                    <!-- {{name}} : {{ item }} -->

                                    <th class="view_t_head">
                                        {{ headline(name) }}
                                    </th>
                                    <th style="text-align: center">:</th>
                                    <td>
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
                                        <span v-else-if="
                                            name.includes('show_profile')
                                        ">
                                            <span v-html="item"></span>
                                        </span>

                                        <span v-else-if="name.includes('profile')">
                                            <img :src="item" :href="item" v-x-zoom-image width="100" />
                                        </span>
                                        <span v-else-if="name.includes('img')">
                                            <!-- <img :src="item" width="100" />
                          <a target="_blank" :href="item">Image Link</a> -->
                                        </span>
                                        <span v-else-if="name.includes('thumbnail')">
                                            <!-- <img :src="item" width="100" /> -->
                                        </span>
                                        <span v-else-if="
                                            name.includes('original_image')
                                        ">
                                            <!-- <img :src="item" width="100" /> -->
                                        </span>
                                        <span v-else-if="name.includes('thumb')">
                                            <!-- <img :src="item" width="100" /> -->
                                        </span>
                                        <span v-else-if="name.includes('logo')">
                                            <img :src="item" :href="item" v-x-zoom-image width="100" />
                                        </span>
                                        <span v-else-if="name.includes('url')">
                                            <a target="_blank" :href="url">{{
                                                url
                                                }}</a>
                                        </span>
                                        <span v-else-if="name.includes('file')">
                                        </span>
                                        <span v-else-if="name == 'date'">{{
                                            $filter.enFormat(item)
                                            }}</span>
                                        <span v-else>
                                            <span v-html="item"></span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </fieldset>
            </div>
        </template>

        <div class="col-xl-6 col-lg-12" v-if="Array.isArray(fileColumns) && fileColumns.length > 0">
            <fieldset>
                <span class="legend">Media</span>
                <div class="view_file">
                    <div class="row g-3">
                        <template v-for="(file, inx) in fileColumns" :key="inx">
                            <template v-for="(value, key) in data" :key="key">
                                <div class="col-lg-4" v-if="
                                    checkTrue(file.field, key) &&
                                    file.field == key
                                ">
                                    <div class="view_file_item text-center" data-bs-toggle="tooltip"
                                        data-bs-placement="top" :data-bs-title="headline(file.title)" v-x-tooltip>
                                        <div class="img">
                                            <img :src="value.includes('pdf')
                                                ? $root.baseurl +
                                                '/images/pdf.png'
                                                : value
                                                " alt="img-cover" />
                                        </div>
                                        <p v-if="value.includes('pdf')">
                                            <a :href="value" download>
                                                <i class="fa-solid fa-download"></i>
                                                Download
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    setup() { },
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
