<template>
    <fieldset>
        <span class="legend">Package Info</span>
        <div class="table-responsive">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <th style="width:30%">Package</th>
                        <th style="text-align: center; width: 2%;">:</th>
                        <td>{{ data.package?.title }}</td>
                    </tr>
                    <tr>
                        <th>Registration Fee</th>
                        <th>:</th>
                        <td>{{ data.package?.registration_fee }}</td>
                    </tr>
                    <tr>
                        <th>Monthly Fee</th>
                        <th>:</th>
                        <td>{{ data.package?.price }}</td>
                    </tr>
                    <tr>
                        <th>Yearly Fee</th>
                        <th>:</th>
                        <td>{{ data.package?.yearly_price }}</td>
                    </tr>
                    <tr>
                        <th>Floor</th>
                        <th>:</th>
                        <td>{{ data.package?.floor }}</td>
                    </tr>
                    <tr>
                        <th>Flat</th>
                        <th>:</th>
                        <td>{{ data.package?.flat }}</td>
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
