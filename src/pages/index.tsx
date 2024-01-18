import { useTranslation } from '@/shared/lib/hooks'
import { getRootLayout } from '@/shared/ui'
import { PublicPage } from '@/shared/ui/PublicPage'

const Home = () => {
  const { text } = useTranslation()

  return (
    <PublicPage>
      <h1>{text.pages.home}</h1>
    </PublicPage>
  )
}

Home.getLayout = getRootLayout
export default Home
