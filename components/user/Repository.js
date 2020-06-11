export default function Repository({ id, title, language, description, stars, link }) {
  return (
    <div>
      <a href={ link } target="_blank">
        { title }
      </a>
        <p> { language } </p>
      <h5> { description }</h5>

      <br/>
      <p> { stars } </p>
    </div>
  )
}
