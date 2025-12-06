import Image from "next/image";
import Link from "next/link";

function IntroSection() {
  return (
    <section className="relative mt-12 flex items-center space-x-10 rounded-xl shadow-lg px-3 py-2" id="IntroSection">
      <div className="flex flex-col ">

        <h2 className="relative text-4xl w-fit md:text-4xl lg:text-5xl xl:text-7xl z-20
        font-bold leading-tight text-gray-600 transition-all duration-400 ">
          Hey There,
          <br />
          {`I'm Omar`}
        </h2>

        <Link
          href="mailto:Omarhassan.mansour@gmail.com"
          className="text-[8px] md:text-[10px] xl:text-[15px] mt-30 mb-50 text-orange-500 w-fit "
        >
          omarhassan.mansour@gmail.com
        </Link>

        <div className=" md:absolute md:bottom-10 w-fit flex gap-2">
          <p className="text-4xl font-bold text-gray-600">2</p>
          <p className="text-gray-600">
            YEARS
            <br /> EXPERIENCE
          </p>
        </div>
      </div>

      <Image
        className="absolute rounded-full object-cover w-100 md:w-90 lg:w-120 lg:ml-2  2xl:w-130
        xl:left-90 lg:left-55 md:left-38 left-0 h-auto z-10 transition-all duration-400"
        src="/my-image.png"
        width={500}
        height={500}
        alt={"my-image"}
        loading="eager"
      />
      <div className="top-10 left-62 absolute md:mb-80 md:ml-50 lg:ml-112 xl:ml-162 xl:mb-90 2xl:ml-120 md:w-fit transition-all duration-400">
        <p className="text-gray-600 text-[11px] md:text-sm lg:text-md xl:text-lg text-sm ">
          I design beautifully simple
          <br /> things, and I love what I do.
        </p>
      </div>
    </section>
  );
}

export default IntroSection;
