import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/header";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";

export default function PortfolioPage() {
  return (
    <div className="w-full px-20 min-h-screen bg-[#f8f6ef] flex flex-col">
      {/* LEFT SIDE */}
      <div className="w-full px-16 py-12 space-y-12">
        <Header />

        {/* INTRO */}

        <IntroSection />

        {/* SERVICES */}
        <ServicesSection />
      </div>

      {/* RIGHT SIDE bg-[#f3e0a2] */}
      <div className=" p-12 space-y-16">
        <ExperienceSection/>

        <section className="text-gray-600">
          <h3 className="text-3xl font-bold mb-6">My Latest Works</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              App Design
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              Web Design
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
              Branding
            </div>
          </div>
        </section>

        <footer className="pt-12">
          <h3 className="text-3xl font-bold mb-4">
            Let`s make something amazing together.
          </h3>

          <p className="text-gray-700 mb-4">Start by saying hi</p>

          <div className="text-sm text-gray-600 space-y-1">
            <p>14th New York, USA</p>
            <p>+001 234 567</p>
            <p>contact@binjan.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
