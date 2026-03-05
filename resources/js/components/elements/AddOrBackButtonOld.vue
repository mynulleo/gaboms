<template>
    <div class="btn-back position-relative" v-if="inherit == false">
        <router-link class="position-absolute btn-back-pos overflow-hidden"
            v-if="$root.checkPermission(route) && icon == 'plus'" :to="{
                name: route,
                query: { page: icon != 'plus' ? $route.query.page : '' },
            }">
            <div class="combo">
                <!-- <template v-if="icon !== 'plus'">
          <i class="fa-solid fa-circle-left text-white"></i>
          <span class="text-white">Back </span>
        </template> -->

                <i class="fa-solid fa-circle-plus text-white"></i>
                <span class="text-white">Add </span>
            </div>
        </router-link>
        <a v-if="$root.checkPermission(route) && icon !== 'plus'" class="position-absolute btn-back-pos overflow-hidden"
            style="cursor: pointer;" @click="$router.go(-1)">
            <i class="fa-solid fa-circle-left text-white"></i>
            <span class="text-white">Back </span>
        </a>

        <!-- Edit button -->
        <router-link v-if="editRoute" class="position-absolute btn-back-pos overflow-hidden" :to="editRoute">
            <div class="combo">
                <i class="fa-solid fa-circle-edit text-white"></i>
                <span class="text-white">Edit </span>
            </div>
        </router-link>
    </div>

    <!-- Gitlab -->
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    props: ["route", "icon", "portion", "title", "extraButtons", "editRoute"],
    computed: {
        ...mapState("inherit", ["backButton"]),
    },
};
</script>

<style scoped>
/* .btn-back .btn-back-pos {
  top: -20px;
  right: -20px;
  border-radius: 20px 0 0 20px;
  transition: 0.6s;
  color: black;
  background-color: #00bcd4;
  box-sizing: border-box;
}
.btn-back .btn-back-pos .combo {
  width: 80px;
  display: flex;
  align-items: center;
}

.btn-back .btn-back-pos i {
  font-size: 16px;
  padding: 4px 0 5px 5px;
}
.btn-back a span {
  padding-left: 9px;
  text-transform: capitalize;
  font-size: 18px;
  color: white;
  transition: 0.6s ease-out;
} */
</style>
