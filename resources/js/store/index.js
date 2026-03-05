import Vuex from 'vuex'
import auth from './auth'
import global from './global'
import breadcrumb from './breadcrumb'
import setting from './modules/setting/setting'
import country from './modules/support/country'
import inherit from './modules/support/modal/inherit'
import category from './modules/master/category'
import crop from "./modules/support/crop/crop"

export default new Vuex.Store({
  state: {
  },

  mutations: {
  },

  actions: {
  },
  modules: {
      auth,
      crop,
    breadcrumb,
    global,
    setting,
    country,
    inherit,
    category
  }
})
