import { useTranslation } from '@/shared/lib/hooks'
import { getWithNavbarLayout } from '@/shared/ui'

const Home = () => {
  const { text } = useTranslation()

  return <h1>{text.pages.home}</h1>
}

Home.getLayout = getWithNavbarLayout
export default Home
