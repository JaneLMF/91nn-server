/**
 * @description API 封装工具类
 */

import qs from 'qs'
import nn from 'utils/debug'
//import {urlEncode} from 'utils/string'
let stream = weex.requireModule('stream')

// http base url
const baseUrl = 'http://192.168.1.100:3000/'
// 生产环境
// const baseUrl = 'http://192.168.1.100:3000/'

function get(url, params) {
  return new Promise((resolve, reject) => {
    console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
    stream.fetch({
      method: 'GET',
      url: `${baseUrl + url}?${qs.stringify(params)}`,
      type: 'json'
    }, res => {
      if (res.ok && res.data && res.data.errCode === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      nn.log('get in progress:' + progress.length)
    })
  })
}

function post(url, body) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url: baseUrl + url,
      type: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, res => {
      if (res.ok && res.data && res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      nn.log('get in progress:' + progress.length)
    })
  })
}

function del(url) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'DELETE',
      url: baseUrl + url,
      type: 'json'
    }, res => {
      if (res.ok && res.data && res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      nn.log('get in progress:' + progress.length)
    })
  })
}

function put(url, body) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'PUT',
      url: baseUrl + url,
      type: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }, res => {
      if (res.ok && res.data && res.data.code === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }, progress => {
      nn.log('get in progress:' + progress.length)
    })
  })
}

export default {
  get, post, del, put
}
