"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useGetHomeInfo = require("../../hooks/useGetHomeInfo.js");
if (!Math) {
  GoodList();
}
const GoodList = () => "../../components/goodsList/goodsList.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const {
      data,
      navClickHandler,
      goGoodsDetail
    } = hooks_useGetHomeInfo.useGetHomeInfo();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).swiper, (item, k0, i0) => {
          return {
            a: item.img,
            b: item.id
          };
        }),
        b: common_vendor.f(common_vendor.unref(data).navs, (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(navClickHandler)(item.path), index)
          };
        }),
        c: common_vendor.o(common_vendor.unref(goGoodsDetail)),
        d: common_vendor.p({
          goodsList: common_vendor.unref(data).goodsList
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
