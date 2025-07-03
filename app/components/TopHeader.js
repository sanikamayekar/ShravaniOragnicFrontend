import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="w-full bg-[#D9D9D9] text-black text-xs sm:text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 py-2 px-4 md:px-5 lg:px-20">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full sm:w-auto">
          <p className="flex items-center gap-1">
            <Image
              src="/images/icons/whatsapp.png" // Correct path to the WhatsApp icon
              alt="WhatsApp"
              width={16} // Adjust size of icon
              height={16} // Adjust size of icon
            />
            <span>+91 7845974362</span>
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/images/icons/email.png" // Correct path to the email icon
              alt="Email"
              width={16} // Adjust size of icon
              height={16} // Adjust size of icon
            />
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
            <Image
              src="/images/icons/facebook.png" // Correct path to the Facebook icon
              alt="Facebook"
              width={24} // Adjust size
              height={24} // Adjust size
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <Image
              src="/images/icons/twitter.png" // Correct path to the Twitter icon
              alt="Twitter"
              width={24} // Adjust size
              height={24} // Adjust size
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <Image
              src="/images/icons/instagram.png" // Correct path to the Instagram icon
              alt="Instagram"
              width={24} // Adjust size
              height={24} // Adjust size
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-green-700 transition-colors duration-200"
          >
            <Image
              src="/images/icons/youtube.png" // Correct path to the YouTube icon
              alt="YouTube"
              width={24} // Adjust size
              height={24} // Adjust size
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
