"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useGetImages = require("../../hooks/useGetImages.js");
const _sfc_main = {
  __name: "pics",
  setup(__props) {
    const {
      data,
      changeActive,
      previewImg
    } = hooks_useGetImages.useGetImages();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(data).categorys, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.unref(data).active === index ? 1 : "",
            c: item.id,
            d: common_vendor.o(($event) => common_vendor.unref(changeActive)(index), item.id)
          };
        }),
        b: !common_vendor.unref(data).flag
      }, !common_vendor.unref(data).flag ? {
        c: common_vendor.f(common_vendor.unref(data).images, (item, index, i0) => {
          return {
            a: item.img_url,
            b: common_vendor.o(($event) => common_vendor.unref(previewImg)(index, $event), item.id),
            c: common_vendor.t(item.title),
            d: item.id
          };
        })
      } : {}, {
        d: common_vendor.unref(data).flag
      }, common_vendor.unref(data).flag ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/pics/pics.vue"]]);
wx.createPage(MiniProgramPage);
