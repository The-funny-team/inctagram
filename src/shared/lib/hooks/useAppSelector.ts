import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/application/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
