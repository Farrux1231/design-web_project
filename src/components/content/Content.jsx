import { useRef } from 'react';
import React from 'react';
import nestOne from "../../assets/main/nestOne.png";
import oxygen from "../../assets/main/oxygen.png";
import plove from "../../assets/main/plove.png";
import villa from "../../assets/main/privateVilla.MP4";
import boulvard from "../../assets/main/boulvard.png";
import garbus from "../../assets/main/garbus.png";

const Content = () => {
  const items = [
    {
      title: "Nest ONE Apartment",
      subtitle: "Modern Design",
      image: nestOne,
    },
    {
      title: "Oxygen Apartment",
      subtitle: "Neo Classic",
      image: oxygen,
    },
    {
      title: "Plove",
      subtitle: "Lounge Bar",
      image: plove,
    },
    {
      title: "Private Villa",
      subtitle: "Modern Design",
      video: villa, 
    },
    {
      title: "Garden Home",
      subtitle: "Classic Style",
      image: boulvard,
    },
    {
      title: "City Apartment",
      subtitle: "Urban Feel",
      image: garbus,
    },
  ];

  return (
    <div className='w-full bg-[#f8f6f6]'>
        <div className="grid grid-cols-6 grid-rows-3 gap-4 p-6 py-[115px] w-[90%] m-auto">
            <div className="col-span-4 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg ">
              <Item item={items[0]} />
            </div>
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg">
              <Item item={items[1]} />
            </div>
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg">
              <Item item={items[2]} />
            </div>
            <div className="col-span-4 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg">
              <Item item={items[3]} />
            </div>
            <div className="col-span-3 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg">
              <Item item={items[4]} />
            </div>
            <div className="col-span-3 row-span-1 relative group overflow-hidden rounded-[5px] shadow-lg">
              <Item item={items[5]} />
            </div>
        </div>
    </div>

  );
};

export default Content

const Item = ({ item }) => {
  const videoRef = useRef(null);
  const isVideo = !!item.video;

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="w-full h-[550px] relative overflow-hidden rounded-[5px] shadow-lg group "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image or Video */}
      {isVideo ? (
        <video
          ref={videoRef}
          src={item.video}
          className="w-full h-full object-cover transition-transform duration-500"
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Text in center, always visible */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
          <p className="text-lg md:text-xl">{item.subtitle}</p>
        </div>
      </div>

      {/* Optional: slight overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  );
};
