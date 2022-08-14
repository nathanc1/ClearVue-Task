import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import IconCrypto from "vue-cryptocurrency-icons";


Vue.use(IconCrypto);
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#242424'
          }
        }

      },
});
