import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          {profile.name} · {profile.location}
        </p>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope aria-hidden="true" />
              <span className="email-text">{profile.email}</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
