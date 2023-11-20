import { getByIdUsingGET, registerNewUserUsingPOST } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

export default function HomePage() {
  useQuery({
    queryFn: () => getByIdUsingGET(1),
    queryKey: ['user'],
  })

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
