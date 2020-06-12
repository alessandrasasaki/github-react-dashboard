import Link from 'next/link'

export default function User({ id, avatar, fullname, username, description, className=""}) {
  return (
    <div className={`card-container ${className}`}>
      <Link href="/user/[id]" as={`/user/${id}`}>
        <div className="card">
          <img className="card-image" src={ avatar } />
          <h4 className="card-fullname"> { fullname }</h4>
          <h6 className="card-username"> { username } </h6>
          <br/>
          <p className="card-description"> { description } </p>
        </div>
      </Link>
    </div>
  )
}
