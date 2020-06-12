import SearchInput from '../components/search/SearchInput'
import User from '../components/user/User'
import GridView from '../components/list/GridView'
import { useMemo } from 'react'

export default function Index() {

  const users = [{
    id: '1',
    fullname: 'Luke Skywalker',
    username: 'lukesky0283',
    description: 'I am your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '2',
    fullname: 'Buke Skywalker',
    username: 'bukesky0283',
    description: 'I am not your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '3',
    fullname: 'Suke Skywalker',
    username: 'sukesky0283',
    description: 'Am I your father?',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '4',
    fullname: 'Luke Skywalker',
    username: 'lukesky0283',
    description: 'I am your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '5',
    fullname: 'Buke Skywalker',
    username: 'bukesky0283',
    description: 'I am not your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '6',
    fullname: 'Suke Skywalker',
    username: 'sukesky0283',
    description: 'Am I your father?',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '7',
    fullname: 'Luke Skywalker',
    username: 'lukesky0283',
    description: 'I am your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '8',
    fullname: 'Buke Skywalker',
    username: 'bukesky0283',
    description: 'I am not your father',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }, {
    id: '9',
    fullname: 'Suke Skywalker',
    username: 'sukesky0283',
    description: 'Am I your father?',
    avatar: 'https://pbs.twimg.com/media/CelkLkkWsAEEvBz.jpg',
  }]

  const memorizedGrid = useMemo(() => <GridView Component={ User } collection={ users }/>, [users]);

  return (
    <div>
      <SearchInput
        onSearchUpdate={(value) => console.log(value)}
        placeholder="Search"
      />
    { memorizedGrid }
    </div>
  )
}
