import Vue from "vue";
import App from "./App.vue";
import Page404 from "@/views/404";
import router from "./router";
import store from "./store";
import "@/utils/elementImport";
import "@/style/index.scss";
import 'animate.css'
Vue.config.productionTip = false;

import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  addErrorHandler,
  start
} from "qiankun";

import apps from "./apps";

import gallery from '@/directives/gallery'

Vue.directive(gallery.name,gallery)

let app = null;
function render({ appContent, loading } = {}) {
  if (!app) {
    app = new Vue({
      el: "#master",
      router,
      store,
      data() {
        return {
          content: appContent,
          loading
        };
      },
      render(h) {
        return h(App);
      }
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}
render();

//注册子应用
registerMicroApps(
  apps.map(app => {
    return {
      ...app,
      render
    };
  })
);

// 设置默认子应用
// setDefaultMountApp("/app/shuyue");
// 第一个子应用加载完毕回调
// runAfterFirstMounted(app => {
//   console.log(app);
// });

addErrorHandler(e => {
  let Err = new Vue({
    render(h) {
      let entry = apps.find(app => app.name === e.appName) || {}
      return h(Page404, { props: { error: JSON.stringify(e, null, 4), href: entry.entry } });
    }
  });
  app.content = Err.$mount().$el.outerHTML;
  app.loading = false
});
// 启动微服务
start({prefetch: false});
