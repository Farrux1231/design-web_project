import React from 'react'
import info from "../../assets/info_image/info-image.webp"
import apex from "../../assets/brands/apex.png"
import axor from "../../assets/brands/axor.png"
import benjamin from "../../assets/brands/Benjamin.png"
import bold from "../../assets/brands/bold.png"
import candella from "../../assets/brands/candella.png"
import daikin from "../../assets/brands/daikin.png"
import flamilano from "../../assets/brands/flamilano.png"
import flua from "../../assets/brands/flua.png"
import grohe from "../../assets/brands/grohe.png"
import hettich from "../../assets/brands/hettich.png"
import inter from "../../assets/brands/inter.png"
import jnk from "../../assets/brands/jnk.png"
import laminam from "../../assets/brands/laminam.png"
import mudo from "../../assets/brands/mudo.png"
import onix from "../../assets/brands/onix.png"
const image = {info}

const images = [
  { src: apex, alt: "Apex Bank" },
  { src: axor, alt: "Axor" },
  { src: benjamin, alt: "Benjamin Moore" },
  { src: bold, alt: "Bold Development" },
  { src: candella, alt: "Candella" },
  { src: daikin, alt: "Daikin" },
  { src: flamilano, alt: "Fla Milano" },
  { src: flua, alt: "Flua" },
  { src: grohe, alt: "Grohe" },
  { src: hettich, alt: "Hettich" },
  { src: inter, alt: "Inter" },
  { src: jnk, alt: "JNK Project" },
  { src: laminam, alt: "Laminam" },
  { src: mudo, alt: "Mudo" },
  { src: onix, alt: "Onyx" },
];

const Info = () => {
  return (
    <div>
    <section class=" py-24 flex flex-col items-center text-center px-6">
  <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
    About Us
  </h2>
<br />
  <p class="max-w-3xl text-gray-500 text-base md:text-lg leading-relaxed">
    <span class="font-medium text-gray-500">MICASA</span> – is a modern design studio located in Tashkent.
    However, we are executing projects all over the world. Each meeting with a client for us is an opportunity
    to find out their preferences, produce unique ideas and apply that knowledge to our project,
    so that the results are higher than their expectations...
  </p>

</section>
<img
    src={image.info}
    alt={"sddfgh"}
    className="w-full h-[600px]"
  />

<section className="bg-white py-20 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-12">
        Some of the brands we've working with
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-12 place-items-center max-w-6xl mx-auto">
        {images.slice(0, 15).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-[100px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
    </div>

  )
}

export default Info