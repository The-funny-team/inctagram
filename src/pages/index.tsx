import { useTranslation } from '@/shared/lib/hooks'
import { getNavbarLayout } from '@/shared/ui'

const Home = () => {
  const { text } = useTranslation()

  return <h1>{text.pages.home}</h1>
}

Home.getLayout = getNavbarLayout
export default Home
