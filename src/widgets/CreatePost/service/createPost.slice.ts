import { getRandomId } from '@/shared/lib/helpers'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CroppedArea = {
  height: number
  width: number
  x: number
  y: number
}

export type PictureObj = {
  aspectRatio: number
  croppedArea: CroppedArea
  id: number
  img: string
  zoom: number
}

type CroppedPicture = {
  filter: string
  img: string
}

const initialState = {
  croppedPictures: [] as CroppedPicture[],
  pictures: [] as PictureObj[],
  stage: 0,
}

export const createPostSlice = createSlice({
  initialState,
  name: 'createPostSlice',
  reducers: {
    removePicture: (state, action: PayloadAction<{ id: PictureObj['id'] }>) => {
      const pictureId = state.pictures.findIndex(pic => pic.id === action.payload.id)
      const removed = state.pictures.splice(pictureId, 1)

      URL.revokeObjectURL(removed[0].img)
    },
    setAspectRatio: (
      state,
      action: PayloadAction<{ aspect: PictureObj['aspectRatio']; id: PictureObj['id'] }>
    ) => {
      const picId = state.pictures.findIndex(pic => pic.id === action.payload.id)

      if (picId !== -1) {
        state.pictures[picId].aspectRatio = action.payload.aspect
      }
    },
    setCroppedArea: (
      state,
      action: PayloadAction<{ croppedArea: CroppedArea; id: PictureObj['id'] }>
    ) => {
      const pictureId = state.pictures.findIndex(pic => pic.id === action.payload.id)

      state.pictures[pictureId].croppedArea = action.payload.croppedArea
    },
    setCroppedImages: (state, action: PayloadAction<{ croppedImages: string[] }>) => {
      state.croppedPictures = action.payload.croppedImages.map(el => ({
        filter: 'none',
        img: el,
      }))
    },
    setFilter: (state, action: PayloadAction<{ filter: string; index: number }>) => {
      if (state.pictures[action.payload.index]) {
        state.croppedPictures[action.payload.index].filter = action.payload.filter
      }
    },
    setNextStage: state => {
      state.stage += 1
    },
    setPictures: (state, action: PayloadAction<{ pictures: string[] }>) => {
      const newPictureObjs: PictureObj[] = action.payload.pictures.map(pic => ({
        aspectRatio: 4 / 3,
        croppedArea: { height: 0, width: 0, x: 0, y: 0 },
        filter: 'none',
        id: getRandomId(),
        img: pic,
        zoom: 1,
      }))

      state.pictures = state.pictures.concat(newPictureObjs)
    },
    setPrevStage: state => {
      state.stage -= 1
    },
    setZoom: (state, action: PayloadAction<{ id: PictureObj['id']; zoom: PictureObj['zoom'] }>) => {
      const pictureId = state.pictures.findIndex(pic => pic.id === action.payload.id)

      if (pictureId !== -1) {
        state.pictures[pictureId].zoom = action.payload.zoom
      }
    },
  },
})

export const {
  removePicture,
  setAspectRatio,
  setCroppedArea,
  setCroppedImages,
  setFilter,
  setNextStage,
  setPictures,
  setPrevStage,
  setZoom,
} = createPostSlice.actions
