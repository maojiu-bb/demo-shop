"use strict";
const common_vendor = require("../common/vendor.js");
const useNewsDetail = () => {
  const data = common_vendor.reactive({
    detail: {}
  });
  common_vendor.onLoad(() => {
    getNewDetail();
  });
  const getNewDetail = () => {
    if (newDetail.status === 200) {
      data.detail = newDetail.data[0];
    } else {
      common_vendor.index.showToast({
        title: "获取咨询详情失败！",
        icon: "error"
      });
    }
  };
  return data;
};
exports.useNewsDetail = useNewsDetail;
