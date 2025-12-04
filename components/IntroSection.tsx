import Image from "next/image"
import Link from "next/link"

function IntroSection() {
  return (
    <section className="mt-12 flex items-center space-x-10 rounded-xl shadow-xl px-3 py-2 ">
          <div className="flex flex-col ">
            <h2 className="text-6xl font-bold leading-tight text-gray-600">
              Hey There,
              <br />
              {`I'm Omar`}
            </h2>
            <Link href="mailto:Omarhassan.mansour@gmail.com" className="text-sm mt-30 mb-30  text-orange-500">
              omarhassan.mansour@gmail.com
            </Link>

            <div className="mt-10 flex gap-2">
              <p className="text-4xl font-bold text-gray-600">2</p>
              <p className="text-gray-600">
                YEARS
                <br /> EXPERIENCE
              </p>
            </div>
          </div>

          <Image
            className=" rounded-full object-cover"
            src="/my-image.png"
            width={500}
            height={500}
            alt={"my-image"}
          />

          <p className="text-gray-600 max-w-sm mb-80 ">
            I design beautifully simple
            <br />
            things, and I love what I do.
          </p>
        </section>
  )
}

export default IntroSection