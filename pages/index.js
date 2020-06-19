import SearchInput from '../components/search/SearchInput'
import User from '../components/user/User'
import GridView from '../components/list/GridView'
import { useMemo, useState } from 'react'
import useSWR from 'swr'


export default function Index() {
  const [searchTerm, setSearchTerm] = useState('')

  const fetcher = (url) => fetch(url).then(response => response.json())
  const { data: users } = useSWR(!!searchTerm ? `/api/user?search=${searchTerm}` : null, fetcher)

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
