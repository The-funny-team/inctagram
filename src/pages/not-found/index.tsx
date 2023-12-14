import { Button, Typography, getRootLayout } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div>
      <Image alt={'not-found'} height={192} src={'/notFound.png'} width={451} />
      <div>
        <Typography variant={'regularText16'}>Sorry! Page not found!</Typography>
      </div>
      <Button as={Link} fullWidth={false} href={'/'}>
        Back to home page
      </Button>
    </div>
  )
}

NotFoundPage.getLayout = getRootLayout
export default NotFoundPage
