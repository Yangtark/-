import axios from 'axios'
export default {
  state: {
    bannerlist: []
  },
  getters: {

  },
  actions: {
    getBannerList ({ commit }) {
      axios.get('https://www.daxunxun.com/banner').then(res => {
        let arr = []
        res.data.map(item => {
          arr.push('https://www.daxunxun.com' + item)
        })
        commit('changeBannerList', arr)
      })
    }
  },
  mutations: {
    changeBannerList (state, data) {
      state.bannerlist = data
    }
  }
}
