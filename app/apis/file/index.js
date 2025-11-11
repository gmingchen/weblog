/**
 * 文件上传
 * @returns {Promise}
 */
export const fileUploadApi = (file) =>
  useRequest(
    '/file/upload',
    { file },
    {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  )
