"use strict";
const common_vendor = require("../../common/vendor.js");
const status = 200;
const data = {
  images: [
    "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
    "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png"
  ],
  info: {
    id: 87,
    title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
    add_time: "2015-04-19T16:51:03.000Z",
    goods_no: "SD9102356032",
    stock_quantity: 60,
    market_price: 2499,
    sell_price: 2195
  },
  detail: {
    title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
    content: '<p>\r\n	荣耀6 Plus，该机型分为两款型号，分别为PE-TL10和PE-UL00的新机型，并且根据工信部设备认证中心公布的信息显示，移动版本PE-TL20和PE-TL00M也已经拿到了入网许可证，拥有7.5mm的纤薄机身，支持TDD-LTE/TD-SCDMA/GSM网络。双800万后置摄像头+800万前置摄像头。采用5.5英寸1080p分辨率显示屏，搭载1.8GHz麒麟925八核处理器，内置3GB RAM+32GB ROM存储组合，支持存储卡扩展。\r\n</p>\r\n<p align="center">\r\n	<span style="color:#FF0000;font-size:16px;"><img class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/bbcimg/productDesc/descImg/201503/desc04/A0004794664/3997361.jpg" /></span> \r\n</p>'
  }
};
const goodsDetail = {
  status,
  data
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
const _sfc_main = {
  __name: "goodDetail",
  setup(__props) {
    const data2 = common_vendor.reactive({
      images: [],
      info: {},
      detail: {},
      options: [{
        icon: "headphones",
        text: "客服"
      }, {
        icon: "shop",
        text: "店铺",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "购物车",
        info: 2
      }],
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    });
    common_vendor.onLoad(() => {
      getGoodsDetail();
    });
    const getGoodsDetail = () => {
      {
        data2.images = goodsDetail.data.images;
        data2.info = goodsDetail.data.info;
        data2.detail = goodsDetail.data.detail;
      }
    };
    const onClick = (e) => {
      common_vendor.index.showToast({
        title: `${e.content.text}模块尚未开发！`,
        icon: "none",
        duration: 600
      });
    };
    const buttonClick = (e) => {
      if (e.index === 0) {
        common_vendor.index.showToast({
          title: "加入购物车成功！",
          icon: "success",
          duration: 600
        });
      } else {
        common_vendor.index.showToast({
          title: "订单支付模块尚未开发！",
          icon: "none"
        });
      }
      data2.options[2].info++;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data2.images, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        }),
        b: common_vendor.t(data2.info.sell_price),
        c: common_vendor.t(data2.info.market_price),
        d: common_vendor.t(data2.info.title),
        e: common_vendor.t(data2.info.goods_no),
        f: common_vendor.t(data2.info.stock_quantity),
        g: data2.detail.content,
        h: common_vendor.o(onClick),
        i: common_vendor.o(buttonClick),
        j: common_vendor.p({
          fill: true,
          options: data2.options,
          buttonGroup: data2.buttonGroup
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HbuilderX/ui-app/heima_shop/pages/goodDetail/goodDetail.vue"]]);
wx.createPage(MiniProgramPage);
