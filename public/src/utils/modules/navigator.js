/**
 * Created by jane on 2017/7/23.
 */
import qs from 'qs'
import ip from 'config'
import instance from 'utils/weex/instance'
import routePage from 'router/page'
import nn from 'utils/debug'

let navigator = weex.requireModule('navigator')

function getBaseUrl() {
    let bundleUrl = weex.config.bundleUrl
    let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
    let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFrame.app') > 0
    let nativeBase = ''
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/native/'
    } else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('native/') + 5)
    } else {
        let host = `${ip}:8080`
        let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
        if (matches && matches.length >= 2) {
            host = matches[1]
        }
        nativeBase = `http://${host}/dist/native/`
    }
    let h5Base = '?page=../dist/web/'
    // // in Browser or WebView
    let inBrowserOrWebView = typeof window === 'object'
    return inBrowserOrWebView ? h5Base : nativeBase
}

function pushWeb(url, query) {
    if (instance.isWeb()) {
        window.location.href = url
        return
    }
    query = query ? query : {}
    query.url = url
    push(routePage.web, query)
}

function pushByUrl(url, query) {
    navigator.push({
        url: query ? `${url}?${qs.stringify(query)}` : url,
        animated: 'true'
    }, event => {
        nn.log('callback: ', event)
    })
}

function push(routePage, query = {}) {
    query.title = routePage.title;
    query.pageName = routePage.pageName;
    nn.log('getBaseUrl', getBaseUrl())
    let url = query ? `${getBaseUrl()}${routePage.jsPath}.js?${qs.stringify(query)}` : `${getBaseUrl()}${routePage}.js`
    nn.log('push ' + url)
    navigator.push({
        url,
        animated: 'true'
    }, event => {
        nn.log('callback: ', event)
    })
}

function pop() {
    navigator.pop({
        animated: 'true'
    }, event => {
        nn.log('callback: ', event)
    })
}

export default {
    push, pushByUrl, getBaseUrl, pushWeb, pop
}