<template>
    <fieldset>
        <span class="legend">Residence User</span>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>
                            <span v-if="user.role_id == 1" class="badge bg-primary">Owner</span>
                            <span v-if="user.role_id == 3" class="badge bg-info">Accounts</span>

                        </td>
                        <td>{{ user.full_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.mobile }}</td>
                        <td></td>
                    </tr>
                    <tr v-if="!users || users.length === 0">
                        <td colspan="6">No User Found</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: { users: { type: Array, default: () => [] } }
};
</script>
