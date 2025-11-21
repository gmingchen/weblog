

/* ************************************************分割线*************************************************** */

/**
 * 获取文章分页列表
 * @param {Object} params
 * @returns {Promise}
 */
export const articlePageApi = (params) => request('/article/page', params)

/**
 * 获取文章详情
 * @param {Object} params
 * @returns {Promise}
 */
export const articleInfoApi = (params) => request('/article/info', params)

/**
 * 新增文章
 * @param {Object} params
 * @returns {Promise}
 */
export const articleCreateApi = (params) => request('/article/create', params, { method: 'POST' })

/**
 * 编辑文章
 * @param {Object} params
 * @returns {Promise}
 */
export const articleUpdateApi = (params) => request('/article/update', params, { method: 'POST' })

/**
 * 编辑文章是否精选
 * @param {Object} params
 * @returns {Promise}
 */
export const articleUpdateFeaturedApi = (params) => request('/article/update/featured', params, { method: 'POST' })

/**
 * 编辑文章状态
 * @param {Object} params
 * @returns {Promise}
 */
export const articleUpdateStatusApi = (params) => request('/article/update/status', params, { method: 'POST' })

/**
 * 删除文章
 * @param {Object} params
 * @returns {Promise}
 */
export const articleDeleteApi = (params) => request('/article/delete', params, { method: 'POST' })
