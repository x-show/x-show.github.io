export const homeRoute = {
  // 首页
  "/demo": {
    component: function (resolve) {
      require(['../pages/home/home'], resolve)
    }
  }
}
