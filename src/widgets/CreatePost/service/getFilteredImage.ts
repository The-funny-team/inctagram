import { createImageElement } from '@/widgets/CreatePost/service/createImageElement'
import { CroppedPicture } from '@/widgets/CreatePost/service/createPost.slice'

export const getFilteredImage = async (croppedPictureObj: CroppedPicture): Promise<string> => {
  const imageObj = await createImageElement(croppedPictureObj.img)
  const canvasObj = document.createElement('canvas')
  const ctx = canvasObj.getContext('2d')

  if (!ctx) {
    return ''
  }

  canvasObj.width = croppedPictureObj.croppedArea.width
  canvasObj.height = croppedPictureObj.croppedArea.height

  ctx.filter = croppedPictureObj.filter
  ctx.drawImage(imageObj, 0, 0)

  const dataUrl = canvasObj.toDataURL('image/jpeg')

  // canvasObj.toBlob(blob => {
  //   if (blob) {
  //     const timestamp = Date.now()
  //     const fileName = `photo_${timestamp}.png`
  //     const file = new File([blob], fileName, { type: 'image/png' })
  //
  //    //make request
  //   }
  // }, 'image/jpeg')

  imageObj.remove()
  canvasObj.remove()

  return dataUrl
}
