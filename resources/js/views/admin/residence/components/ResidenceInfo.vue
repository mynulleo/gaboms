<template>
    <fieldset>
        <span class="legend">Information</span>
        <div class="table-responsive">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th class="view_t_head">Id</th>
                        <th style="text-align: center; width: 2%;">:</th>
                        <td>{{ data.id }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Residenceno</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.residenceno }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Residence Name</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.residence_name }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Owner Name</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.owner_name }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Address</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.address }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Mobile</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.mobile }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Email</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.email }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Nid</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.nid }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Created At</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.created_at }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Updated At</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.updated_at }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Status</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    }
};
</script>
