import { getWithNavbarLayout } from '@/shared/ui'
import { ProtectedPage } from '@/shared/ui/ProtectedPage'

const ProfilePage = () => {
  return (
    <ProtectedPage>
      <h1>Profile Page</h1>
    </ProtectedPage>
  )
}

ProfilePage.getLayout = getWithNavbarLayout
export default ProfilePage
