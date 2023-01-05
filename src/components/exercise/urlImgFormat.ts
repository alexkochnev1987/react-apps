export const urlImgFormat = (url: string) => {
  const changeStr = 'uc?export=view&id=';
  const replaceStr = `file/d/`;
  return url
    ? url.replace(RegExp(replaceStr, 'gi'), changeStr).split('/').slice(0, -1).join('/')
    : '';
};
