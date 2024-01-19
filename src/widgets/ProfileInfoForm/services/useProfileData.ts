import { useMeQuery } from '@/shared/api/profileApi'
import { profileFormDataCreator } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'

export const useProfileData = () => {
  const { data } = useMeQuery()
  const { text } = useTranslation()
  const { profileInfoForm: formText, profileInfoFormErrors: formErrorsText } = text.pages.profile
  const formData = profileFormDataCreator(data)

  return {
    formData,
    formErrorsText,
    formText,
  }
}
