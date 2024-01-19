import { User } from '@/shared/api/profileApi'

export const profileFormDataCreator = (data: User | null | undefined) => {
  return {
    aboutMe: data?.aboutMe || '',
    city: data?.city || '',
    country: data?.country || '',
    dateOfBirth: (data?.dateOfBirth && new Date(data.dateOfBirth)) || undefined,
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    username: data?.username || '',
  }
}
