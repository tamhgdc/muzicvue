//写home的所有接口
import request from '@/utils/request';

export const getSearchTag = (params) =>
  request({
    url: '/search/hot',
    params,
  });
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  });
