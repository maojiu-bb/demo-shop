"use strict";
const common_vendor = require("../common/vendor.js");
const status$1 = 200;
const data$1 = [
  {
    id: 1,
    url: "http://www.itcast.cn/subject/phoneweb/index.html",
    img: "http://m.itheima.com/images/slidead/mobile/20191213180241750x410.jpg"
  },
  {
    id: 2,
    url: "http://www.itcast.cn/subject/phoneweb/index.html",
    img: "http://m.itheima.com/images/slidead/mobile/20191210154717750-410.jpg"
  },
  {
    id: 3,
    url: "http://www.itcast.cn/subject/phoneweb/index.html",
    img: "http://m.itheima.com/images/slidead/mobile/20190327135101750x410-%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B9%BB%E7%81%AF.jpg"
  }
];
const swiper = {
  status: status$1,
  data: data$1
};
const goods = [
  {
    page: 1,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  },
  {
    page: 2,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.BrSY04vOOyoJjDcXdu4isQHaIc?pid=ImgDet&rs=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  },
  {
    page: 3,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p2.itc.cn/images01/20220627/fb87796ecf4245588adb6c1388d4f187.jpeg",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  },
  {
    page: 4,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.550165139efdeae9f4de37d938803acc?rik=FF4yS9lA6MViwg&riu=http%3a%2f%2fsy0.img.pcpop.com%2farticle%2f3%2f3058%2f3058101.jpg_p-w730&ehk=v%2fFMe0klpmjPeYXlfXAbOy3rsLiehdF3%2bUYwM0QlbPQ%3d&risl=&pid=ImgRaw&r=0",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  },
  {
    page: 5,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://z0.sinaimg.cn/auto/crop?img=http:%2F%2Fl.sinaimg.cn%2Fn%2Ffront%2F115%2Fw600h315%2F20220623%2F0a09-0fa3f98aa2a6590a0a1d22d6ac0edf19.jpg%2Foriginal.jpg&size=360_360&focus=center&keep_quality=1&sharp=1",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  },
  {
    page: 6,
    status: 200,
    data: [
      {
        id: 1,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 2,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 3,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 4,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 5,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 6,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 7,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 8,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 9,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      },
      {
        id: 10,
        title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        add_time: "2015-04-19T16:51:03.000Z",
        zhaiyao: "荣耀6 Plus，该机型分为两款型号，分别为PE-",
        click: 0,
        img_url: "https://p6.itc.cn/images01/20220630/42ccc2efd849497a99269972ebd16bfe.png",
        sell_price: 2195,
        market_price: 2499,
        stock_quantity: 60
      }
    ]
  }
];
const status = 200;
const data = [
  {
    title: "黑马超市",
    icon: "iconfont icon-ziyuan",
    path: "/pages/goods/goods"
  },
  {
    title: "联系我们",
    icon: "iconfont icon-guanyuwomen",
    path: "/pages/contact/contact"
  },
  {
    title: "社区图片",
    icon: "iconfont icon-tupian",
    path: "/pages/pics/pics"
  },
  {
    title: "学习视频",
    icon: "iconfont icon-shipin",
    path: "/pages/videos/videos"
  }
];
const navs = {
  status,
  data
};
const useGetHomeInfo = () => {
  const data2 = common_vendor.reactive({
    swiper: [],
    navs: [],
    goodsList: [],
    page: 1,
    flag: false
  });
  common_vendor.onLoad(() => {
    getGoods();
    getSwiper();
    getNavs();
  });
  const getSwiper = () => {
    {
      data2.swiper = swiper.data;
    }
  };
  const getNavs = () => {
    {
      data2.navs = navs.data;
    }
  };
  const getGoods = (type) => {
    if (data2.page > goods.length) {
      data2.flag = true;
      return;
    } else {
      if (goods[data2.page - 1].status === 200) {
        const res = goods[data2.page - 1].data;
        if (type === "reachBottom") {
          data2.goodsList = [...data2.goodsList, ...res];
        } else if (type === "pullDownRefresh") {
          data2.goodsList = [...res, ...data2.goodsList];
        } else {
          data2.goodsList.push(...res);
        }
      } else {
        failMessage("商品列表");
      }
    }
  };
  const failMessage = (message) => {
    common_vendor.index.showToast({
      title: `获取${message}失败！`,
      icon: "error"
    });
  };
  const navClickHandler = (url) => {
    common_vendor.index.navigateTo({
      url
    });
  };
  const goGoodsDetail = (id) => {
    common_vendor.index.navigateTo({
      url: "/pages/goodDetail/goodDetail?id=" + id
    });
  };
  return {
    data: data2,
    navClickHandler,
    getGoods,
    goGoodsDetail
  };
};
exports.useGetHomeInfo = useGetHomeInfo;
