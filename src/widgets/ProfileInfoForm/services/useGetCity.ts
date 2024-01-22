import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

import { useGetCitiesMutation } from '@/shared/api/citiesApi'
import { isFetchBaseQueryError } from '@/shared/lib/helpers'

import { UserProfileFormValuesType } from './useProfileForm'

type Props = {
  country: string | undefined
  setValue: (name: keyof UserProfileFormValuesType, value: string) => void
}

export const useGetCity = ({ country, setValue }: Props) => {
  const [getCitiesByCountry, { data: citiesOptions = [], isLoading: citiesLoading }] =
    useGetCitiesMutation()
  const renderCount = useRef(0)

  useEffect(() => {
    if (!country) {
      return
    }
    renderCount.current && setValue('city', '')
    if (!renderCount.current) {
      renderCount.current += 1
    }

    country &&
      getCitiesByCountry({ country })
        .unwrap()
        .catch(error => {
          if (isFetchBaseQueryError(error)) {
            toast.error(error.data.message as string)
          } else {
            toast.error('Failed to load list of cities')
          }
        })
  }, [country])

  return { citiesLoading, citiesOptions }
}
