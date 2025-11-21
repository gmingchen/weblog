

/* ************************************************分割线*************************************************** */

/**
 * 获取日记分页列表
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryPageApi = (params) => request('/diary/page', params)

/**
 * 获取日记详情
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryInfoApi = (params) => request('/diary/info', params)

/**
 * 新增日记
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryCreateApi = (params) => request('/diary/create', params, { method: 'POST' })

/**
 * 编辑日记
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryUpdateApi = (params) => request('/diary/update', params, { method: 'POST' })

/**
 * 编辑日记是否私密
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryUpdatePrivateApi = (params) => request('/diary/update/private', params, { method: 'POST' })

/**
 * 编辑日记状态
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryUpdateStatusApi = (params) => request('/diary/update/status', params, { method: 'POST' })

/**
 * 删除日记
 * @param {Object} params
 * @returns {Promise}
 */
export const diaryDeleteApi = (params) => request('/diary/delete', params, { method: 'POST' })
