import { useRouter } from 'next/router'
import useSWR from 'swr'
import ListView from '../../components/list/ListView'
import Repository from '../../components/user/Repository'
import User from '../../components/user/User'

export default function UserPage() {
  const { query: { id } } = useRouter()

  const fetcher = (url) => fetch(url).then(response => response.json())
  const { data } = useSWR(!!id ? `/api/user/${id}` : null, fetcher)
  const user = !!data ? data.user : null

  return user && (
    <div className="user-page-content">
      <User { ...user } className="user-page-card" />
      <ListView Component={ Repository } collection={ user.repos }/>
    </div>
  )
}
