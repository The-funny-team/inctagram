import { useMeQuery } from '@/shared/api/profileApi'
import { profileFormDataCreator } from '@/shared/lib/helpers'

export const useProfileData = () => {
  const { data } = useMeQuery()
  const formData = profileFormDataCreator(data)

  return {
    formData,
  }
}
