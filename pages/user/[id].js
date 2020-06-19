import { useRouter } from 'next/router'
import useSWR from 'swr'
import ListView from '../../components/list/ListView'
import Repository from '../../components/user/Repository'
import User from '../../components/user/User'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Person() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `https://api.github.com//users/${query.id}/repos`,
    fetcher
  )

  return (
    <div className="user-page-content">
      <User { ...user } className="user-page-card" />
      <ListView Component={ Repository } collection={ repositories }/>
    </div>
  )
}
