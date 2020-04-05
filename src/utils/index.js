export const getActiveRule = prefix => {
  return location => location.pathname.startsWith(prefix);
};

export const isProd = () => {
  return process.env.NODE_ENV === "production";
};
