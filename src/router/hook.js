/**
 * 定义全局的路由钩子
 */

export default {
  beforeEach: (to, from, next) => {
    console.log('hook')
    next()
  }
}
