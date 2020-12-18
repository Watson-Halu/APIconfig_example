import '@fortawesome/fontawesome-free/css/all.css'
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import zhHans from "vuetify/es5/locale/zh-Hans"


Vue.use(Vuetify);

// Vue.component('HelloWorld', {
//   methods: {
//     changeLocale () {
//       this.$vuetify.lang.current = 'zhHans'
//     },
//   },
// })

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    lang: {
      locales: { zhHans },
      current: 'zhHans',
    },
});
