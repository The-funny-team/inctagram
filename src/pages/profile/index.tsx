import { getRootLayout } from '@/shared/ui'
import { getWithNavbarLayout } from '@/shared/ui/WithNavbarLayout/WithNavbarLayout'

const ProfilePage = () => (
  <div>
    <h1>Profile Page</h1>
  </div>
)

ProfilePage.getLayout = getWithNavbarLayout
export default ProfilePage
