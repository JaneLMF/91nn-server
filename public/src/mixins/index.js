/**
 * Created by jane on 2017/7/23.
 * @Describe : 全局mixins参数配置
 */

import navigator from 'utils/modules/navigator'
import model from 'utils/modules/model'
import routerPage from 'router/page'
import nn from 'utils/debug'
import {getQueryStringByName} from 'utils/string'

export default {
    data() {
        return {
            nn,
            model,
            routerPage,
            router: {},
            platform: weex.config.env.platform.toLowerCase()
        }
    },

    created() {
        let self = this
        this.router.push = function ({page, params, query}) {
            if (self.platform === 'web') {
                if (page === self.routerPage.web) {
                    navigator.pushByUrl(query.url)
                    return
                }
                self.$router.push({
                    path: page.path,
                    params: params,
                    query: query
                })
                return
            }
            navigator.push(page, query)
        }

        this.router.replace = function ({page, params, query}) {
            if (self.platform === 'web') {
                self.$router.replace({
                    path: page.path,
                    params: params,
                    query: query
                })
                return
            }
            navigator.push(page, query)
            navigator.pop()
        }

        this.router.pop = function () {
            if (self.platform === 'web') {
                self.$router.back()
                return
            }
            navigator.pop()
        }
    },

    methods: {
        getQuery(key) {
            return this.platform === 'web' ? this.$route.query[key] : getQueryStringByName(key)
        }
    }
}
