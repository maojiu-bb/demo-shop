"use strict";
const common_vendor = require("../common/vendor.js");
const status = 200;
const data = [
  {
    id: 13,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 14,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 15,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 16,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 17,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 18,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 19,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 20,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 21,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 13,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 22,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 23,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 24,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 25,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 26,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 27,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 28,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 29,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 30,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 12,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 11,
    title: "1季度多家房企利润跌幅超50% 去库存促销战打响",
    add_time: "2015-04-16 03:50:28",
    zhaiyao: "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
    click: 1,
    img_url: "https://ts1.cn.mm.bing.net/th/id/R-C.e7c36e99c2b25f59f2a9810cab31917e?rik=4QIrvZjb3DeP7w&riu=http%3a%2f%2fp2.itc.cn%2fimages01%2f20200622%2fc9d210b4e4a5474f943128bf222f4326.jpeg&ehk=SFJBl8hA5WTn0%2fNlJsYjAzTuM7GuzyJEOofsdlKjz6I%3d&risl=&pid=ImgRaw&r=0"
  }
];
const news = {
  status,
  data
};
const useNews = () => {
  const data2 = common_vendor.reactive({
    news: []
  });
  common_vendor.onLoad(() => {
    getNews();
  });
  const getNews = () => {
    {
      data2.news = news.data;
    }
  };
  const goDetail = (id) => {
    common_vendor.index.navigateTo({
      url: "/pages/newDetail/newDetail?id=" + id
    });
  };
  return {
    data: data2,
    goDetail
  };
};
exports.useNews = useNews;
