import{_ as o,s,o as a,c as t,w as e,i as d,a as l,u as n,d as u,k as i}from"./index-db1ec272.js";import{a as r,b as m}from"./uni-app.es.91fab9b9.js";import{u as p,G as f}from"./useGetHomeInfo.bbc7c1e3.js";const g=o({__name:"goods",setup(o){const{data:g,getGoods:c,goGoodsDetail:G}=p();return r((()=>{g.page+=1,c("reachBottom")})),m((()=>{setTimeout((()=>{g.page+=1,c("pullDownRefresh"),s()}),1e3)})),(o,s)=>{const r=d;return a(),t(r,null,{default:e((()=>[l(f,{onGoGoodsDetail:n(G),goodsList:n(g).goodsList},null,8,["onGoGoodsDetail","goodsList"]),n(g).flag?(a(),t(r,{key:0,class:"bottom"},{default:e((()=>[u("-----没有更多数据了-----")])),_:1})):i("",!0)])),_:1})}}},[["__scopeId","data-v-3892670f"]]);export{g as default};