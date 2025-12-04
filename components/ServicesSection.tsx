import Card from "@/components/Card";

import { CgScreen } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";

function ServicesSection() {
  const services = [
    {
      title: "Website Design",
      projects: 10,
      icon: <CgScreen />,
      bgColor: "bg-teal-700",
    },
    {
      title: "Mobile App Design",
      projects: 1,
      icon: <CiMobile3 />,
      bgColor: "bg-yellow-400",
    },
    // {
    //   title: "Brand Identity",
    //   projects: 47,
    //   icon: <TbBrandBinance />,
    //   bgColor: "bg-orange-500",
    // },
  ];

  const renderServiceCard = services.map((service, idx) => (
    <Card key={idx}>
      <div
        className={`rounded-full ${service.bgColor} text-white w-10 h-10 flex items-center justify-center mr-4`}
      >
        {service.icon}
      </div>

      <div>
        <h4 className="font-semibold">{service.title}</h4>
        <span className="text-gray-500">{service.projects} Projects</span>
      </div>
    </Card>
  ));

  return (
    <section className="mt-16 flex">
      <div className="grid grid-cols-1 gap-4 mt-8">
        {renderServiceCard}
      </div>

      <div className="flex flex-col ml-116 mt-8">
        <div className="">
          {" "}
          <h3 className="text-4xl text-gray-600 font-bold">What do I help?</h3>
          <p className="text-gray-600 mt-4 max-w-lg tracking-wide leading-8">
            I will help you with finding a solution and solve <br /> your
            problems. We use process design to create digital <br />{" "}
            products.Beside that also help their business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
