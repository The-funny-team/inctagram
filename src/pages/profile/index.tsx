import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const ProfilePage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <main>Profile Page</main>
    </>
  )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
