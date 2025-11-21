/**
 * 获取专栏列表
 * @returns {Promise}
 */
export const columnListApi = () => request('/column/pass/list')

/* ************************************************分割线*************************************************** */

/**
 * 获取专栏分页列表
 * @param {Object} params
 * @returns {Promise}
 */
export const columnPageApi = (params) => request('/column/pass/page', params)

/**
 * 新增专栏
 * @param {Object} params
 * @returns {Promise}
 */
export const columnCreateApi = (params) => request('/slipper/column/create', params, { method: 'POST' })

/**
 * 编辑专栏
 * @param {Object} params
 * @returns {Promise}
 */
export const columnUpdateApi = (params) => request('/slipper/column/update', params, { method: 'POST' })

/**
 * 编辑专栏排序
 * @param {Object} params
 * @returns {Promise}
 */
export const columnUpdateSortApi = (params) => request('/slipper/column/update/sort', params, { method: 'POST' })

/**
 * 编辑专栏状态
 * @param {Object} params
 * @returns {Promise}
 */
export const columnUpdateStatusApi = (params) => request('/slipper/column/update/status', params, { method: 'POST' })

/**
 * 删除专栏
 * @param {Object} params
 * @returns {Promise}
 */
export const columnDeleteApi = (params) => request('/slipper/column/delete', params, { method: 'POST' })
