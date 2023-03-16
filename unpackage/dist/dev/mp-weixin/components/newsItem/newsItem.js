"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "newsItem",
  props: {
    news: {
      type: Array,
      default: []
    }
  },
  emits: ["newDetail"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const navigate = (id) => {
      emits("newDetail", id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.news, (item, k0, i0) => {
          return {
            a: item.img_url,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.add_time),
            d: common_vendor.t(item.click),
            e: item.id,
            f: common_vendor.o(($event) => navigate(item.id), item.id)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/components/newsItem/newsItem.vue"]]);
wx.createComponent(Component);
