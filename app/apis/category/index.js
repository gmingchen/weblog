/**
 * 获取分类列表
 * @returns {Promise}
 */
export const categoryListApi = () => request('/category/pass/list')

/* ************************************************分割线*************************************************** */

/**
 * 获取分类分页列表
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryPageApi = (params) => request('/category/pass/page', params)

/**
 * 新增分类
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryCreateApi = (params) => request('/slipper/category/create', params, { method: 'POST' })

/**
 * 编辑分类
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryUpdateApi = (params) => request('/slipper/category/update', params, { method: 'POST' })

/**
 * 编辑分类排序
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryUpdateSortApi = (params) => request('/slipper/category/update/sort', params, { method: 'POST' })

/**
 * 编辑分类状态
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryUpdateStatusApi = (params) => request('/slipper/category/update/status', params, { method: 'POST' })

/**
 * 删除分类
 * @param {Object} params
 * @returns {Promise}
 */
export const categoryDeleteApi = (params) => request('/slipper/category/delete', params, { method: 'POST' })
