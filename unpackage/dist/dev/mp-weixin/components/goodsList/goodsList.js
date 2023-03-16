"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "goodsList",
  props: {
    goodsList: {
      type: Array,
      default: []
    }
  },
  emits: ["goGoodsDetail"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const navigate = (id) => {
      emits("goGoodsDetail", id);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.goodsList, (item, k0, i0) => {
          return {
            a: item.img_url,
            b: common_vendor.t(item.sell_price),
            c: common_vendor.t(item.market_price),
            d: common_vendor.t(item.title),
            e: item.id,
            f: common_vendor.o(($event) => navigate(item.id), item.id)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/components/goodsList/goodsList.vue"]]);
wx.createComponent(Component);
