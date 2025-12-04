function ExperienceSection() {
  const Experiences = [
    {
      title: "Frontend Development Trainee MaVoid Training Program • Hybrid",
      duration: "Sep 2025 – Oct 2025 (40 hours)",
      details: [
        "Completed a structured frontend development training program focused on modern web technologies.",
        "Developed user interfaces using HTML, CSS, and JavaScript, applying responsive and cross-browser design techniques.",
        "Built interactive UI components using React.js, including components, props, and state management.",
        "Practiced version control with Git and collaborated in a workflow inspired by Agile methodologies.",
        "Applied UI/UX fundamentals to enhance layout structure and user experience across mini-projects..",
      ],
    },
  ];

  const renderExperience = Experiences.map((exp, idx) => {
    return (
      <div className="flex" key={idx}>
        <div className="ml-5">
          <h4 className="font-semibold text-gray-600">
            {exp.title} <br />
          </h4>
          <p className="text-gray-600 text-sm">{exp.duration}</p>
        </div>

        <div className="flex flex-col items-center space-y-3 absolute ml-142">

          <div className="w-6 h-6 rounded-full border-2 border-gray-300 p-1">
            <div className="w-full h-full rounded-full bg-teal-600"></div>
          </div>

          <div className="h-70 border-l-2 border-dashed border-gray-300"></div>

          <div className="w-6 h-6 rounded-full border-2 border-gray-300 p-1">
            <div className="w-full h-full rounded-full bg-orange-500"></div>
          </div>
        </div>

        <div className="flex flex-col ml-50 -mt-2 mb-5 space-y-2 h-full">
          {exp.details.map((detail, idx) => {
            return (
              <p
                key={idx}
                className="text-gray-700 font-semibold text-sm mt-2 leading-8"
              >
                {detail}
              </p>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <section className="rounded-xl shadow-xl ">
      <h3 className="text-3xl text-gray-600 font-bold mb-10 flex justify-center ">
        My Experience
      </h3>
      {renderExperience}
    </section>
  );
}

export default ExperienceSection;
