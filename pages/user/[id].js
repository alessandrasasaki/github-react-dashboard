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
    () => query.id && `/api/people/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  const user = {
    id: '1',
    fullname: 'Luke Skywalker',
    username: 'lukesky0283',
    description: 'I am your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }

  const repositories = [{
    id: 1,
    title: 'AppDoidao',
    language: 'Ruby',
    description: 'app que faz coisas doidonas',
    stars: 3,
    link: 'https://github.com/vinifig/google-search-crawler'
  },
  {
    id: 2,
    title: 'AppLegal',
    language: 'Nextjs',
    description: 'apooiioioioioiooii',
    stars: 3,
    link: 'https://github.com/vinifig/google-search-crawler'
  },
  {
    id: 3,
    title: 'NaoEhUmApp',
    language: 'Javascipt',
    description: 'nao',
    stars: 3,
    link: 'https://github.com/vinifig/google-search-crawler'
  }]

  return (
    <div className="user-page-content">
      <User { ...user } className="user-page-card" />
      <ListView Component={ Repository } collection={ repositories }/>
    </div>
  )
}
