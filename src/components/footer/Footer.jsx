import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaBehance,
  FaWhatsapp,
} from "react-icons/fa";
import logo_black from "../../assets/logo_black.png"

const Footer = () => {
  return (
   <footer className="bg-gray-50 py-7 px-0 flex-wrap">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 ">

    <div className="flex flex-col">
      <img
        src={logo_black}
        alt="Logo"
        className="h-[100px] w-[160px] mb-6 transform translate-x-[70px] translate-y-[20px]"
      />
    </div>

    <div className="grid grid-cols-1 gap-y-2 text-[15px] text-gray-500">
      <div>
        <p>Al Barsha 1</p>
        <p>Rania Business Tower</p>
        <p>405 Dubai UAE</p>
      </div>
      <div>
        <p>Taras Shevchenko str 32</p>
        <p>Tashkent, Uzbekistan</p>
        <p>100015</p>
      </div>
      <div>
        <p>Лётная улица 99 стр. 1 "Loft River"</p>
        <p>Москва, Россия</p>
        <p>125424</p>
      </div>
    </div>

    <div className="flex flex-col gap-4 text-[15px] text-gray-700">
      <div>
        <p className="font-semibold">Contact UAE</p>
        <p>
          <a href="tel:+971586891771">+971 58 6891771</a>
        </p>
        <p>
          <a href="mailto:info@micasa-design.com" className="underline">
            info@micasa-design.com
          </a>
        </p>
      </div>

      <div>
        <p className="font-semibold">Contact UZB</p>
        <p>
          <a href="tel:+998954755000">+998 95 4755000</a>
        </p>
        <p>
          <a href="mailto:info@micasa-design.com" className="underline">
            info@micasa-design.com
          </a>
        </p>
      </div>

      <div>
        <p className="font-semibold">Contact RU</p>
        <p>
          <a href="tel:+79099400097">+7 909 9400097</a>
        </p>
        <p>
          <a href="mailto:info@micasa-design.ru" className="underline">
            info@micasa-design.ru
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-3 text-gray-600 mt-3 text-xl">
        <FaInstagram className="hover:text-black cursor-pointer" />
        <FaLinkedinIn className="hover:text-black cursor-pointer" />
        <FaFacebookF className="hover:text-black cursor-pointer" />
        <FaTelegramPlane className="hover:text-black cursor-pointer" />
        <FaBehance className="hover:text-black cursor-pointer" />
        <FaWhatsapp className="hover:text-black cursor-pointer" />
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="text-center text-sm text-gray-500 mt-8">
    © 2024 MICASA – Design & Architecture
  </div>
</footer>

  );
};

export default Footer;
