import Navbar from "../components/Navbar";

const Postcard = () => (
  <div className="w-[296px] h-[194px] p-2">
    <img
      src="/Timeline/postcard.webp"
      alt="Postcard"
      className="w-full h-auto object-contain"
    />
  </div>
);

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/Timeline/timeline_bg.webp')] bg-cover bg-center">
      <Navbar />
      <div className="flex justify-between my-4 w-full px-4">
        <Postcard />
        <Postcard />
        <Postcard />
      </div>
      
      <div className="flex-grow flex flex-col justify-end">
        <div className="flex items-end justify-between mb-[-12px]">
          <div className="flex items-end">
            <div className="w-[100px] h-[100px] flex-shrink-0">
              <img
                src="/Timeline/bush.webp"
                alt="Bush"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[100px] h-[133px] flex-shrink-0 -ml-[40px]">
              <img
                src="/Timeline/timeline_mario.webp"
                alt="Mario"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <Postcard />
          <Postcard />
          <div className="flex flex-col items-center">
            <div className="w-[70px] h-[73px] mb-[5px]">
              <img
                src="/Timeline/star.webp"
                alt="Star"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[153px] h-[192px] flex-shrink-0 z-10">
              <img
                src="/Timeline/tub.webp"
                alt="Tub"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[235px] brick-col"></div>
      </div>
    </div>
  );
};

export default Timeline;
