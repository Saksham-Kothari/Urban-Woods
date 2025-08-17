import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-6">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <RiFacebookFill className="text-2xl text-neutral-800 hover:text-neutral-500 transition-colors" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <RiTwitterFill className="text-2xl text-neutral-800 hover:text-neutral-500 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <RiInstagramFill className="text-2xl text-neutral-800 hover:text-neutral-500 transition-colors" />
          </a>
        </div>
        <p className="text-neutral-500 text-sm">
          &copy; {currentYear} UrbanWood. All rights reserved.
        </p>
      </div>

      <div className="py-4 flex flex-col items-center text-neutral-500 text-sm">
        <ul className="flex space-x-4">
          <li>
            <a href="/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
