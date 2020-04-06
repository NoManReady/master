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
