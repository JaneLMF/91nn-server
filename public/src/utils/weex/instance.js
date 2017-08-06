/**
 * Created by jane on 2017/7/23.
 */
function isIOS() {
    return weex.config.env ? weex.config.env.platform.toLowerCase() == 'ios' : false
}

function isWeb() {
    return weex.config.env.platform.toLowerCase == 'web'
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