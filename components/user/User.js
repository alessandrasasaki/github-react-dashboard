import Link from 'next/link'

export default function User({ id, avatar, fullname, username, description }) {
  return (
    <div>
      <Link href="/user/[id]" as={`/user/${id}`}>
        <div>
          <img src={ avatar } />
          <h4> { fullname }</h4>
          <h6> { username } </h6>
          <br/>
          <p> { description } </p>
        </div>
      </Link>
    </div>
  )
}
