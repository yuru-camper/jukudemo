import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    img: require('@/assets/img/herts.jpg'),
    name: '洋光塾',
    address: '秋田県秋田市手形学園町1-1',
    rate: 4.7,
    id: 'hiromitu',
    bio: 'ひろみつ塾です！進学校から中堅校まで、幅広くお任せください！',
    thumbs:[
        require('@/assets/img/3d.png'),
        require('@/assets/img/biseki.png'),
        require('@/assets/img/flow.png'),
        require('@/assets/img/kondo.png'),
        require('@/assets/img/napo.jpg'),
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
