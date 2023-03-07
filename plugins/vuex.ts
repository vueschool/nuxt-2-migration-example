import { createStore } from "vuex";
import * as rootStore from "@/store/index";
export default defineNuxtPlugin((nuxtApp) => {
  const store = createStore(rootStore);
  nuxtApp.vueApp.use(store);
});
