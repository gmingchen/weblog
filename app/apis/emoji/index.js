/**
 * 获取Emoji列表
 * @returns {Promise}
 */
export const emojiListApi = () => useRequest('/emoji/pass/list')
