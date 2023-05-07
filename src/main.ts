import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import UUID from "vue-uuid";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);

app.provide("emitter", emitter);

app.use(UUID).use(store).use(router).mount("#app");
