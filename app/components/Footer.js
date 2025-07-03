"use client";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#2a6b33] text-white py-16 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: About */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Shravani Organic Life</h4>
              <p className="text-sm">
                At Shravani Organic Life, we are committed to promoting a healthy, sustainable lifestyle through 100% natural and organic products. From farm to home, we grow with care and love to nourish each your body and soul.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-[#f4a300]">FAQ’s</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">About Shravani</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Product Range</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Reviews</a></li>
              </ul>
            </div>

            {/* Column 3: Top Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Top Categories</h4>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-[#f4a300]">Organic Vegetables</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Herbal Products</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Natural Skincare</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Cold-Pressed Oils</a></li>
                <li><a href="#" className="hover:text-[#f4a300]">Whole Grains</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="text-sm">Plat No, 45, Near Green Valley Farm. Organic, Market Road, Satara, Maharashtra</p>
              <p className="text-sm">Email: <a href="mailto:info@shravaniorganiclife.com" className="hover:text-[#f4a300]">info@shravaniorganiclife.com</a></p>
              <p className="text-sm">Phone: <a href="tel:+919876543210" className="hover:text-[#f4a300]">+91 98 76 54 3210</a></p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-2xl hover:text-[#f4a300]"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-[#f4a300]"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-[#f4a300]"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Light Green Section */}
      <div className="bg-[#b4d54d] py-4">
        <div className="container mx-auto text-center text-sm text-[#333333]">
          <p>© 2025 Shravani Organic Life. All Rights Reserved. | Designed by TF Strategies Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



