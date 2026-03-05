<template>
    <view-page>
        <div class="row custom_row g-3">
            <div class="col-lg-12">
                <div class="row justify-content-center mb-3">
                    <div class="col-md-7">
                        <div class="box box-success">
                            <p class="text-center p-2">
                                A description of all necessary step of creating
                                <span class="text-red font-weight-bold"
                                    >module</span
                                >
                                is given below
                                <span class="text-maroon font-weight-bold"
                                    >(Please, follow these instruction)</span
                                >
                            </p>
                        </div>
                        <!-- /.box -->
                    </div>
                </div>

                <!-- ==================== File Create ==================== -->
                <section class="content text-dark ms-3" v-if="!$root.spinner">
                    <!-- row -->
                    <div class="row">
                        <div class="col-md-12">
                            <!-- The time line -->
                            <ul class="timeline list-unstyled">
                                <!-- Laravel Route item -->
                                <li>
                                    <div class="timeline-item">
                                        <h5
                                            class="timeline-header no-border mb-3"
                                        >
                                            <b>1) Laravel Route: </b>
                                            Copy the newly created route in
                                            'admin.php' into 'auth:acces' block
                                        </h5>
                                    </div>
                                </li>
                                <!-- END Laravel Route item -->
                                <!-- Vue Route item -->
                                <li>
                                    <div class="timeline-item">
                                        <h5
                                            class="timeline-header no-border mb-3"
                                        >
                                            <b>2) Vue Route: </b>
                                            <span
                                                class="text-maroon font-weight-bold"
                                                >resources/js/Router/router.js</span
                                            >
                                        </h5>
                                        <div class="timeline-body">
                                            Please copy below routes into
                                            router/index.js
                                            <br />
                                            <code>
                                                // ------------------<span
                                                    class="text-uppercase"
                                                    >{{
                                                        data.name
                                                    }}
                                                    PORTION</span
                                                >------------------
                                                <br />
                                                <span class="text-maroon">
                                                    { path: '/{{ data.route }}',
                                                    name: '{{
                                                        data.route
                                                    }}.index', component: () =>
                                                    import('./../views/admin/{{
                                                        data.route
                                                    }}/index')},
                                                    <br />
                                                    { path: '/{{
                                                        data.route
                                                    }}/create', name: '{{
                                                        data.route
                                                    }}.create', component: () =>
                                                    import('./../views/admin/{{
                                                        data.route
                                                    }}/create')},
                                                    <br />
                                                    { path: '/{{
                                                        data.route
                                                    }}/:id', name: '{{
                                                        data.route
                                                    }}.show', component: () =>
                                                    import('./../views/admin/{{
                                                        data.route
                                                    }}/view')},
                                                    <br />
                                                    { path: '/{{
                                                        data.route
                                                    }}/:id/edit', name: '{{
                                                        data.route
                                                    }}.edit', component: () =>
                                                    import('./../views/admin/{{
                                                        data.route
                                                    }}/create')},
                                                    <br />
                                                </span>
                                            </code>
                                        </div>
                                    </div>
                                </li>
                                <!-- END Vue Route item -->
                                <!-- Database item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            <b>3) Database: </b>
                                            <span
                                                class="text-success font-weight-bold"
                                                >{{ data.database }}</span
                                            >
                                        </h5>
                                        <div class="timeline-body">
                                            add your needed field in
                                            <span
                                                class="text-maroon font-weight-bold"
                                                >migration</span
                                            >
                                            file, and run this command
                                            <span
                                                class="text-maroon font-weight-bold"
                                                >php artisan migrate</span
                                            >
                                        </div>
                                    </div>
                                </li>
                                <!-- END Database item -->
                                <!-- view File item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            <b>4) Vue File: </b>
                                            <span
                                                class="text-success font-weight-bold"
                                                >{{ data.vue_file }}</span
                                            >
                                        </h5>
                                        <div class="timeline-body">
                                            Customize your
                                            <b class="text-maroon"
                                                >Create.vue</b
                                            >
                                            form as the requirement
                                            <br />
                                            <span class="text-maroon">
                                                please provide validation rule
                                                for each and every field
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <!-- END Vue File item -->
                                <!-- Controller item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            <b>5) Controller: </b>
                                            <span
                                                class="text-success font-weight-bold"
                                                >{{ data.controller }}</span
                                            >
                                        </h5>
                                        <!-- <div class="timeline-body">
                    If this line does not exist :
                    <span
                      class="text-maroon font-weight-bold"
                    >use App\Http\Controllers\Controller;</span>
                    You just comment out of this line or
                    <b
                      class="text-maroon"
                    >remove this</b>
                  </div>-->
                                    </div>
                                </li>
                                <!-- END Controller item -->
                                <!-- model item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            <b>6) Model: </b>
                                            <span
                                                class="text-success font-weight-bold"
                                            >
                                                {{ data.model }}
                                            </span>
                                        </h5>
                                    </div>
                                </li>
                                <!-- END model item -->
                                <!-- Resource item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            <b>7) Resource: </b>
                                            <span
                                                class="text-success font-weight-bold"
                                            >
                                                {{ data.resource }}
                                            </span>
                                        </h5>
                                    </div>
                                </li>
                                <!-- END Resource item -->
                                <!-- Setting item -->
                                <li class="mt-3">
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            8) For menu and system update, Click
                                            below button<br />
                                            <br />

                                            <a
                                                @click="systemRoleUpdate"
                                                class="btn btn-xs mr-2 btn-success pull-left text-white"
                                            >
                                                <i class="fa fa-refresh"></i>
                                                <span class="text-capitalize"
                                                    >Update System Role</span
                                                >
                                            </a>
                                            &nbsp;
                                            <a
                                                target="_blank"
                                                :href="$root.baseurl + '/clear'"
                                                class="btn btn-xs mr-2 btn-danger pull-left text-white"
                                            >
                                                <i class="fa fa-refresh"></i>
                                                <span class="text-capitalize"
                                                    >Clear</span
                                                >
                                            </a>
                                        </h5>
                                        <div class="timeline-body mt-3">
                                            Please add this menu to seeder file
                                            for backup
                                            <b class="text-success"
                                                >database/seeders/MenuSeeder.php</b
                                            >
                                            <br />
                                            Your menu has been created and the
                                            <b class="text-success">{{
                                                data.name
                                            }}</b>
                                            menu is at the top of the
                                            <b class="text-success"
                                                >Dashboard</b
                                            >
                                            menu. You will see after reloading.
                                            <br />Finally reload the browser
                                            <b class="text-maroon"
                                                >( ctrl + f5 )</b
                                            >.
                                        </div>
                                    </div>
                                </li>

                                <!-- END Setting item -->
                                <!-- Setting item -->
                                <li class="mt-3">
                                    <i
                                        class="fa fa-thumbs-up bg-blue text-white"
                                    ></i>
                                    <div class="timeline-item">
                                        <h5 class="timeline-header no-border">
                                            9) If you complete all the processes
                                            then your module is ready to work
                                            <br />
                                            <br />
                                            <b class="text-success"
                                                >Congrats !!</b
                                            >
                                            Go ahead
                                        </h5>
                                    </div>
                                </li>
                                <!-- END Setting item -->
                            </ul>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </section>
            </div>
        </div>
    </view-page>
</template>

<script>
const model = "module";

export default {
    data() {
        return {
            page_title: "Module Instruction",
            model: model,
            data: {},
        };
    },
    methods: {
        getRules: function () {
            this.$root.spinner = true;
            axios
                .get("/module/create", {
                    params: { model_name: this.$route.params.model },
                })
                .then((res) => (this.data = res.data))
                .catch((error) => console.log(error))
                .then((alw) =>
                    setTimeout(() => (this.$root.spinner = false), 300)
                );
        },
        systemRoleUpdate() {
            axios.get("/systems-update").then((res) => {
                this.$toast(res.data.message, "success");
            });
        },
    },
    created() {
        this.getRules();
    },
};
</script>
