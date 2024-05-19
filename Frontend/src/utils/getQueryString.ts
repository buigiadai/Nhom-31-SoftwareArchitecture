export const parseParams = (params: any) => {
  let allParams: any = {};
  for (let [key, value] of new URLSearchParams(params).entries()) {
    allParams[key] = value;
  }
  return allParams;
};
