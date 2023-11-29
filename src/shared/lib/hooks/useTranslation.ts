import { useRouter } from 'next/router'

import { en, ru } from '../../../../locales'

export const useTranslation = () => {
  const router = useRouter()

  const text = router.locale === 'en' ? en : ru

  return { router, text }
}
