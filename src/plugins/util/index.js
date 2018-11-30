import queryString from 'query-string'

let Util = {
  /** 获取URL的所有参数 */
  getQueryString: () => {
    let string = location.search || location.href.split('?')[1]
    return queryString.parse(string, {
      decode: false
    })
  },
  /** 获取access_token */
  getAccessToken: () => {
    if (Util.getQueryString().access_token) {
      return Util.getQueryString().access_token
    }
    return localStorage.getItem('access_token')
  }
}
export default {
  install (Vue) {
    Vue.prototype.$Util = Util
  }
}
