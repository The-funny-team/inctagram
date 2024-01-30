import { WelcomePage } from '@/_pages/WelcomePage'
import { useMeQuery } from '@/shared/api/profileApi'
import { useTranslation } from '@/shared/lib/hooks'

const Home = () => {
  const { text } = useTranslation()
  const { data } = useMeQuery()

  if (!data) {
    return WelcomePage.getLayout(<WelcomePage />)
  }
}

export default Home
