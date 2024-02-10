import { useState } from 'react'

import { Modal } from '@/shared/ui'
import { Cropping } from '@/widgets/CreatePost/ui/Cropping'
import { Filtering } from '@/widgets/CreatePost/ui/Filtering'
import { ImageSelection } from '@/widgets/CreatePost/ui/ImageSelection'
import { Publish } from '@/widgets/CreatePost/ui/Publish'

import s from './CreatePost.module.scss'

type Props = {
  isOpen: boolean
  isOpenChange: (open: boolean) => void
}

export const CreatePost = ({ isOpen, isOpenChange }: Props) => {
  const [photos, setPhotos] = useState<string[]>([])
  const [stage, setStage] = useState<number>(0)

  const onCloseHandler = () => {
    isOpenChange(false)
    setPhotos([])
    setStage(0)
  }
  const setPrevHandler = () => {
    setStage(stage => stage - 1)
  }
  const setNextHandler = () => {
    setStage(stage => stage + 1)
  }
  const setPhotosHandler = (photos: string[]) => {
    setPhotos(currentFiles => [...currentFiles, ...photos])
  }
  const removePhotoHandler = (index: number) => {
    setPhotos(currentPhotos => {
      const currentPhotosCopy = [...currentPhotos]

      currentPhotosCopy.splice(index, 1)

      return currentPhotosCopy
    })
    URL.revokeObjectURL(photos[index])
  }

  return (
    <Modal className={s.modal} isOpen={isOpen} onIsOpenChange={onCloseHandler}>
      {stage === 0 && (
        <ImageSelection
          onCloseBtn={onCloseHandler}
          setNext={setNextHandler}
          setPhotos={setPhotosHandler}
        />
      )}
      {stage === 1 && (
        <Cropping
          onRemove={removePhotoHandler}
          photos={photos}
          setNext={setNextHandler}
          setPerv={setPrevHandler}
          setPhotos={setPhotosHandler}
        />
      )}
      {stage === 2 && <Filtering setNext={setNextHandler} setPerv={setPrevHandler} />}
      {stage === 3 && <Publish setPerv={setPrevHandler} />}
    </Modal>
  )
}
