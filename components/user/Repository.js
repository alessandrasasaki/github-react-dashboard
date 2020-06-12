export default function Repository({ id, title, language, description, stars, link }) {
  return (
    <div className="repository-informations">
      <div className="repository-name">
        <a  className="repository-link" href={ link } target="_blank">
          { title }
        </a>
        <p className="repository-language"> { language } </p>
      </div>

      <h5 className="repository-description"> { description }</h5>

      <br/>
      <div className="repository-stars">
        <img className="repository-stars-icon" src="../static/images/icons/star.png" />
        <p className="epository-stars-number">  { stars } </p>
      </div>

    </div>
  )
}
