"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useNewsDetail = require("../../hooks/useNewsDetail.js");
const _sfc_main = {
  __name: "newDetail",
  setup(__props) {
    hooks_useNewsDetail.useNewsDetail();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(_ctx.data.detail.title),
        b: common_vendor.t(_ctx.data.detail.add_time),
        c: common_vendor.t(_ctx.data.detail.click),
        d: _ctx.data.detail.content
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/newDetail/newDetail.vue"]]);
wx.createPage(MiniProgramPage);
