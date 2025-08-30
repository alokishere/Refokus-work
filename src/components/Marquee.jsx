
import './marquee.css' // import custom CSS for animations

const Marquee = () => {
  const images = [
    { imageurl: "icon/icon1 logo.svg" },
    { imageurl: "icon/icon2.svg" },
    { imageurl: "icon/icon3.svg" },
    { imageurl: "icon/icon4.svg" },
    { imageurl: "icon/icon5.svg" },
    { imageurl: "icon/icon6.svg" },
    { imageurl: "icon/icon7.svg" },
    { imageurl: "icon/icon8.svg" },
    { imageurl: "icon/icon9.svg" },
    { imageurl: "icon/icon10.svg" },
    { imageurl: "icon/icon11.svg" },
    { imageurl: "icon/icon12.svg" },
    { imageurl: "icon/icon14.svg" },
  ];

  return (
    <div className="relative w-full overflow-hidden mt-20 py-6">

      <div className="pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-zinc-900 to-transparent z-10" />

      <div className="marquee-left flex w-max gap-10">
        {images.concat(images).map((image, index) => (
          <div className="h-10" key={`m1-${index}`}>
            <img className="h-full w-auto" src={image.imageurl} alt="" />
          </div>
        ))}
      </div>

      <div className="marquee-right flex w-max gap-10 mt-10">
        {images.concat(images).map((image, index) => (
          <div className="h-10" key={`m2-${index}`}>
            <img className="h-full w-auto" src={image.imageurl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
