/**
 * 获取验证码
 * @returns 
 */
export const captchaApi = () => request('/auth/pass/captcha')

/**
 * 登录
 * @param {*} data 
 * @returns 
 */
export const loginApi = (params) => request('/auth/pass/login', params, { method: 'POST' })

/**
 * 获取登录用户信息
 * @returns {Promise}
 */
export const loginUserApi = () => request('/auth/user')
