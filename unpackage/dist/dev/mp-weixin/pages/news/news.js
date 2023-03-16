"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_useNews = require("../../hooks/useNews.js");
if (!Math) {
  newsItem();
}
const newsItem = () => "../../components/newsItem/newsItem.js";
const _sfc_main = {
  __name: "news",
  setup(__props) {
    const {
      data,
      goDetail
    } = hooks_useNews.useNews();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(goDetail)),
        b: common_vendor.p({
          news: common_vendor.unref(data).news
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/news/news.vue"]]);
wx.createPage(MiniProgramPage);
