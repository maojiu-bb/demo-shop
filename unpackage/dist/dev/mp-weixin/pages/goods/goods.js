"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useGetHomeInfo = require("../../hooks/useGetHomeInfo.js");
if (!Math) {
  GoodsList();
}
const GoodsList = () => "../../components/goodsList/goodsList.js";
const _sfc_main = {
  __name: "goods",
  setup(__props) {
    const {
      data,
      getGoods,
      goGoodsDetail
    } = hooks_useGetHomeInfo.useGetHomeInfo();
    common_vendor.onReachBottom(() => {
      data.page += 1;
      getGoods("reachBottom");
    });
    common_vendor.onPullDownRefresh(() => {
      setTimeout(() => {
        data.page += 1;
        getGoods("pullDownRefresh");
        common_vendor.index.stopPullDownRefresh();
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(goGoodsDetail)),
        b: common_vendor.p({
          goodsList: common_vendor.unref(data).goodsList
        }),
        c: common_vendor.unref(data).flag
      }, common_vendor.unref(data).flag ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
