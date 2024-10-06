export default function Footer() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/people">People</a>
        <a href="/projects">Projects</a>
        <a href="/clients">Clients</a>
        <a href="/apply">Apply</a>
        <a href="/faqs">FAQs</a>
        <p>
          Contact us at <a href="mailto:c4cneu@gmail.com">c4cneu@gmail.com</a>
        </p>
      </div>
      <div>
        <p>Made with love by Code4Community</p>
        <p>Northeastern University, Boston, MA</p>
      </div>
      <div>
        <a href="https://www.facebook.com/c4cneu/" target="_blank">
          Facebook
        </a>
        <a href="http://instagram.com/c4cneu" target="_blank">
          Instagram
        </a>
        <a href="https://github.com/Code-4-Community" target="_blank">
          GitHub
        </a>
        <a href="https://c4cneu.slack.com/" target="_blank">
          Slack
        </a>
        <a
          href="https://www.linkedin.com/company/code-4-community/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://youtube.com/channel/UC7FI2u_BVjB0EkKMmx-yibA"
          target="_blank"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
