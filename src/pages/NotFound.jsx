import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found | William Buechele");

  return (
    <section className="page-block page-intro">
      <h1>Page not found</h1>
      <p className="lede">
        That URL is not a page on this site. Try the homepage or one of the
        sections below.
      </p>
      <ul className="tag-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
}
