import SearchInput from '../components/search/SearchInput'

export default function Index() {
  return (
    <div>
      <SearchInput
        onSearchUpdate={(value) => console.log(value)}
        placeholder="Search" />
    </div>
  )
}
