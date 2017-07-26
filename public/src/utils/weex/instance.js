/**
 * Created by jane on 2017/7/23.
 */
function isIOS() {
    return weex.config.env ? weex.config.env.platform === 'iOS' : false
}

function isWeb() {
    return weex.config.env.platform === 'Web'
}

function getDeviceInfo() {
    let env = weex.config.env
    let deviceWidth = env.deviceWidth
    let deviceHeight = env.deviceHeight
    return {
        deviceWidth: deviceWidth,
        deviceHeight: deviceHeight
    }
}

export default {
    isIOS, isWeb, getDeviceInfo
}