/**
 * 获取标签列表
 * @returns {Promise}
 */
export const tagListApi = () => request('/tag/pass/list')

/* ************************************************分割线*************************************************** */

/**
 * 获取标签分页列表
 * @param {Object} params
 * @returns {Promise}
 */
export const tagPageApi = (params) => request('/tag/page', params)

/**
 * 新增标签
 * @param {Object} params
 * @returns {Promise}
 */
export const tagCreateApi = (params) => request('/tag/create', params, { method: 'POST' })

/**
 * 编辑标签
 * @param {Object} params
 * @returns {Promise}
 */
export const tagUpdateApi = (params) => request('/tag/update', params, { method: 'POST' })

/**
 * 编辑标签排序
 * @param {Object} params
 * @returns {Promise}
 */
export const tagUpdateSortApi = (params) => request('/tag/update/sort', params, { method: 'POST' })

/**
 * 编辑标签状态
 * @param {Object} params
 * @returns {Promise}
 */
export const tagUpdateStatusApi = (params) => request('/tag/update/status', params, { method: 'POST' })

/**
 * 删除标签
 * @param {Object} params
 * @returns {Promise}
 */
export const tagDeleteApi = (params) => request('/tag/delete', params, { method: 'POST' })
