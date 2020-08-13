import request from "./network.js"
const baseURL = 'http://152.136.185.210:8000/api/z8/';

export function getMultiData() {
  return request({
    url: baseURL + "/home/multidata"
  })
}

export function getGoodsDate(type,page){
  return request({
    url: baseURL + "/home/data",
    data: {
      type: type,
      page: page
    }
  })
}