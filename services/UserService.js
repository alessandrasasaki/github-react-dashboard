const extractUser = (item) => (
  {
    username: item.login,
    avatar: item.avatar_url,
    description: item.bio,
    fullname: item.name || item.login
  }
)

const extractRepos = (item) => (
  {
    stars: item.stargazers_count,
    title: item.name,
    description: item.description,
    link: item.html_url,
    language: item.language
  }
)

export const queryUsers = async (searchTerm) => {
  const url = `https://api.github.com/search/users?q=${searchTerm}`
  const response = await fetch(url)
  const data = await response.json()

  return data.items.map(extractUser)
}

const getUser = async (username) => {
  const url = `https://api.github.com/users/${username}`
  const response = await fetch(url)
  const githubUser = await response.json()

  return extractUser(githubUser)
}

const getUserRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`
  const response = await fetch(url)
  const githubRepos = await response.json()

  return githubRepos.map(extractRepos)
}

export const getUserAndRepos = async (username) => {
  const [user, repos] = await Promise.all([getUser(username), getUserRepos(username)])

  return {
    user: {
      repos,
      ...user
    }
  }
}
