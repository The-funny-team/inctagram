import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography, getRootLayout } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  const { text } = useTranslation()
  const t = text.pages.notFound

  return (
    <div>
      <Image alt={'not-found'} height={192} src={'/notFound.png'} width={451} />
      <div>
        <Typography variant={'regularText16'}>{t.title}</Typography>
      </div>
      <Button as={Link} fullWidth={false} href={'/'}>
        {t.captionBtn}
      </Button>
    </div>
  )
}

NotFoundPage.getLayout = getRootLayout
export default NotFoundPage
