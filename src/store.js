import Vue from 'vue'
import Vuex from 'vuex'
import course from '@/views/course/store'
import home from '@/views/home/store'
import living from '@/views/living/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    course,
    home,
    living
  }
})
