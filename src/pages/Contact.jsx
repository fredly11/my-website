import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { profile } from "../content";

export default function Contact() {
  useDocumentTitle("Contact | William Buechele");

  return (
    <section className="page-block">
      <div className="page-intro">
        <h1>Contact</h1>
        <p className="lede">
          Best reach is email. I am open to remote Technical Support Engineer,
          Cloud Support, and junior DevOps conversations.
        </p>
      </div>
      <ul className="contact-list">
        <li>
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" />
            <span>
              <strong>Email</strong>
              <span className="email-text">{profile.email}</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-card"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            <span>
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/william-buechele</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-card"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            <span>
              <strong>GitHub</strong>
              <span>github.com/fredly11</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-card"
            href={profile.site}
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe aria-hidden="true" />
            <span>
              <strong>Website</strong>
              <span>williambuechele.com</span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
