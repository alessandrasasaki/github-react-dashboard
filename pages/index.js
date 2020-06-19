import SearchInput from '../components/search/SearchInput'
import User from '../components/user/User'
import GridView from '../components/list/GridView'
import { useMemo, useState } from 'react'
import useSWR from 'swr'


export default function Index() {

  const [searchTerm, setSearchTerm] = useState('')

  const fetcher = (url) => fetch(url)
    .then(response => response.json())
    .then((data) => data.items.map(extractUser))

  const { data: users } = useSWR(!!searchTerm ? `https://api.github.com/search/users?q=${searchTerm}` : null, fetcher)

  const extractUser = (item) => (
    {
      username: item.login,
      avatar: item.avatar_url,
      description: item.bio,
      fullname: item.name || item.login
    }
  )

  const memorizedGrid = useMemo(() => <GridView Component={ User } collection={ users }/>, [users]);

  return (
    <div>
      <SearchInput
        onSearchUpdate={setSearchTerm}
        placeholder="Search"
      />
    { memorizedGrid }
    </div>
  )
}
