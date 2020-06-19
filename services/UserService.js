const extractUser = (item) => (
  {
    username: item.login,
    avatar: item.avatar_url,
    description: item.bio,
    fullname: item.name || item.login
  }
)

export const queryUsers = async (searchTerm) => {
  const url = `https://api.github.com/search/users?q=${searchTerm}`
  const response = await fetch(url)
  const data = await response.json()

  return data.items.map(extractUser)
}
