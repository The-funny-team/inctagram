import { ProtectedPage } from '@/hoc/ProtectedPage'
import { getWithNavbarLayout } from '@/shared/ui'

const ProfilePage = () => (
  <ProtectedPage>
    <h1>Profile Page</h1>
  </ProtectedPage>
)

ProfilePage.getLayout = getWithNavbarLayout
export default ProfilePage
