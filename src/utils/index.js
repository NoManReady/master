import { ROUTER_MODE } from "@/router";
export const getActiveRule = prefix => {
  return location => {
    let path = null;
    if (ROUTER_MODE === "history") {
      path = location.pathname;
    } else {
      path = location.hash.slice(1);
    }
    return path.startsWith(prefix);
  };
};

export const isProd = () => {
  return process.env.NODE_ENV === "production";
};


//获取给定进制随机值（取整）
export const unixColor = (hex = 16) => {
  return (~~(Math.random() * hex)).toString(hex)
}

//获取颜色随机值
export const randomColor = () => {
  let _color = Array.from({ length: 5 }).reduce((a, b) => { return unixColor() + a }, unixColor())
  return `#${_color}`
}