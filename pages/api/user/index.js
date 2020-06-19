import { queryUsers } from "../../../services/UserService";

export default async function handler(req, res) {
  const users = await queryUsers(req.query.search)
  const status = users.length === 0 ? 404 : 200;

  return res.status(status).json(users)
}

