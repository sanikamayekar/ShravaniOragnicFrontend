import { FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// SSR with getServerSideProps
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function TopHeader() {
  return (
    <div className="w-full bg-[#D9D9D9] text-black text-xs sm:text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 py-2 px-6 md:px-32">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full sm:w-auto">
          <p className="flex items-center gap-1">
            <FaWhatsapp className="text-green-600 w-4 h-4" />
            <span>+91 7845974362</span>
          </p>
          <p className="flex items-center gap-1">
            <FaEnvelope className="text-green-600 w-4 h-4" />
            <span>shravni@gmail.com</span>
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-6 text-black">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <FaFacebook className="w-6 h-6 text-black hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <FaTwitter className="w-6 h-6 text-black hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <FaInstagram className="w-6 h-6 text-black hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <FaYoutube className="w-6 h-6 text-black hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
}