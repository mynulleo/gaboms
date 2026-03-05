<template>
    <fieldset>
        <span class="legend">Official Information</span>
        <div class="table-responsive">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th class="view_t_head">Category</th>
                        <th style="text-align: center; width: 2%;">:</th>
                        <td>{{ data.category?.title }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Package</th>
                        <th style="text-align: center; width: 2%;">:</th>
                        <td>{{ data.package?.title }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Payment Period</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.payment_period }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Reg Date</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.reg_date }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Expired Date</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.expired_date }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Promo Code</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.promo_code }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Db Host</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.db_host }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Db Name</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.db_name }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Db User</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.db_user }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Db Password</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.db_password }}</td>
                    </tr>
                    <tr>
                        <th class="view_t_head">Block</th>
                        <th style="text-align: center;">:</th>
                        <td>{{ data.block }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: { data: { type: Object, required: true } }
};
</script>
