import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// SSR with getServerSideProps
export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2a6b33] text-white py-10 px-2 md:px-30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: About */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-bold mb-6 text-white leading-tight">
                Shravani Organic Life
              </h4>
              <p className="text-base lg:text-lg text-gray-200 leading-relaxed font-light">
                At Shravani Organic Life, we are committed to promoting a healthy, sustainable lifestyle through 100% natural and organic products. From farm to home, we grow with care and love to nourish each your body and soul.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-bold mb-6 text-white leading-tight">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    About Shravani
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Product Range
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Top Categories */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-bold mb-6 text-white leading-tight">
                Top Categories
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Organic Vegetables
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Herbal Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Natural Skincare
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Cold-Pressed Oils
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base lg:text-lg text-gray-200 hover:text-[#f4a300] transition-colors duration-300 font-light">
                    Whole Grains
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl lg:text-2xl font-bold mb-6 text-white leading-tight">
                Contact Us
              </h4>
              <div className="space-y-3">
                <p className="text-base lg:text-lg text-gray-200 leading-relaxed font-light">
                  Plat No, 45, Near Green Valley Farm. Organic, Market Road, Satara, Maharashtra
                </p>
                <p className="text-base lg:text-lg text-gray-200 font-light">
                  Email: <a href="mailto:info@shravaniorganiclife.com" className="hover:text-[#f4a300] transition-colors duration-300 underline decoration-dotted">info@shravaniorganiclife.com</a>
                </p>
                <p className="text-base lg:text-lg text-gray-200 font-light">
                  Phone: <a href="tel:+919876543210" className="hover:text-[#f4a300] transition-colors duration-300 underline decoration-dotted">+91 98 76 54 3210</a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-[#3d7a46]">
            <a href="#" className="text-2xl lg:text-3xl hover:text-[#f4a300] transition-all duration-300 transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl lg:text-3xl hover:text-[#f4a300] transition-all duration-300 transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl lg:text-3xl hover:text-[#f4a300] transition-all duration-300 transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Light Green Section */}
      <div className="bg-[#b4d54d] py-6">
        <div className="container mx-auto text-center text-sm text-[#333333] px-6 md:px-32">
          <p className="font-light">
            © 2025 Shravani Organic Life. All Rights Reserved. | Designed by TF Strategies Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;