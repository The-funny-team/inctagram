import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/application/store'

export const useAppDispatch: () => AppDispatch = useDispatch
