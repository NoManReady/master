import { getActiveRule, isProd } from "./utils";

export const prefix = "/app";
export default [
  {
    name: "shuyue",
    icon: require("@/assets/shuyue.jpg"),
    title: "小玥玥！！",
    desc: "炒鸡可爱的小屁孩",
    entry: isProd() ? "https://shuyue.131407.vip" : "//127.0.0.1:9001",
    activeRule: getActiveRule(`${prefix}/shuyue`)
  },
  {
    name: "linqin",
    icon: require("@/assets/linqin.jpg"),
    title: "林🐷",
    desc: "我是一只无忧虑，憨憨的Pig",
    entry: isProd() ? "https://linqin.131407.vip" : "//127.0.0.1:9002",
    activeRule: getActiveRule(`${prefix}/linqin`)
  },
  {
    name: "blog",
    icon: require("@/assets/logo.png"),
    title: "青椒鱿鱼派",
    desc: "每天写一写，总会变厉害的",
    entry: isProd() ? "https://blog.131407.vip" : "//127.0.0.1:9003",
    activeRule: getActiveRule(`${prefix}/blog`)
  }
];
