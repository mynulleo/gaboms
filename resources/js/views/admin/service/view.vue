<template>
  <view-page>
    <div class="view_page pb-4">
      <div class="row custom_row g-3">
        <div class="col-xl-6 col-lg-12">
          <fieldset>
            <span class="legend">Service Details</span>
            <div class="table-responsive">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th style="text-align: center">:</th>
                    <td>{{ ucfirst(data.title ?? "") }}</td>
                  </tr>
                  <tr>
                    <th>Auto Invoice</th>
                    <th style="text-align: center">:</th>
                    <td>{{ ucfirst(data.auto_invoice ? 'Yes' : "No") }}</td>
                  </tr>
                  <tr>
                    <th>Module</th>
                    <th style="text-align: center">:</th>
                    <td>{{ ucfirst(data.module ? 'Yes' : "No") }}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <th style="text-align: center">:</th>
                    <td>{{ ucfirst(data.description ?? "") }}</td>
                  </tr>
                  <tr>
                    <th>Sorting</th>
                    <th style="text-align: center">:</th>
                    <td>{{ ucfirst(data.sorting ?? "") }}</td>
                  </tr>

                  <tr>
                    <th>Status</th>
                    <th style="text-align: center">:</th>
                    <td>
                      <span :class="[
                        data?.status == 'active'
                          ? 'bg-success'
                          : 'bg-danger ',
                        'badge mt-1 mx-2',
                        'text-white ',
                      ]">
                        {{ ucfirst(data.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </view-page>
</template>

<script>
const model = "service";

export default {
  data() {
    return {
      page_title: "Service View",
      model: model,
      data: {},
      fileColumns: [
        {
          field: "original_image",
          title: "Image",
          field: "original_image_small",
          title: "Icon",
        },
      ],
    };
  },
  created() {
    this.setBreadcrumbs(this.model, "view");
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>
