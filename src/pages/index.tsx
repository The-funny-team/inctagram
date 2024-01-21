import { getNavbarLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'

const Home = () => {
  const { text } = useTranslation()

  return <main>{text.pages.home}</main>
}

Home.getLayout = getNavbarLayout
export default Home
