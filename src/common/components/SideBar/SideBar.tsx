import Link from 'next/link'

export const SideBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <Link href={'/public/sign-up'}>Sign Up</Link>
      <Link href={'/public/sign-in'}>Sign In</Link>
      <Link href={'/public/forgot-password'}>Forgot Password</Link>
      <Link href={'/public/terms-of-service'}>Terms of Service</Link>
      <Link href={'/public/privacy-policy'}>Privacy Policy</Link>
    </div>
  )
}
