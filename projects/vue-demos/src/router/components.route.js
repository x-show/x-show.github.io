export const componentsRoute = {
  // 首页
  "/vue-checklist": {
    component: function (resolve) {
      require(['../pages/vue-checklist/checklist'], resolve)
    }
  }
};
