"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "contact",
  setup(__props) {
    common_vendor.reactive({
      longitude: 24.2914,
      latitude: 38.676,
      scale: 14,
      markers: [{
        longitude: 24.2914,
        latitude: 38.676,
        iconPath: "@/static/hmlogo.png"
      }]
    });
    const makePhoneCall = () => {
      common_vendor.index.makePhoneCall({
        phoneNumber: "400-618-9090",
        success() {
        },
        fail() {
          common_vendor.index.showToast({
            title: "拨打电话失败！",
            icon: "error"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(makePhoneCall)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
