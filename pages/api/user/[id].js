import { getUserAndRepos } from "../../../services/UserService";

export default async function handler({ query: { id } }, res) {
  const response = await getUserAndRepos(id)
  const status = !response.user ? 404 : 200;

  return res.status(status).json(response)
}
