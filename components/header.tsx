import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/VeganStylePersonalUse-5Y58.ttf",
});

function Header() {
  const headerItems = [
    { title: "Services", link: "#" },
    { title: "Works", link: "#" },
    { title: "Notes", link: "#" },
    { title: "Experience", link: "#" },
  ];

  const renderHeaderItems = () => {
    return headerItems.map(({ title, link }, idx) => (
      <Link
        className="relative px-6 py-2 font-semibold rounded-full
        hover:border-r hover:border-l hover:border-[#8bbab3] hover:text-[#8bbab3] hover:transition-all hover:duration-500 "
        key={idx}
        href={link}
      >
        {title}
      </Link>
    ));
  };

  return (
    <header className="flex items-center justify-between px-3  ">
      <h1 className={`text-3xl font-bold ${myFont.className} text-gray-600`}>Omar</h1>
      <nav className="flex space-x-6 text-gray-600 font-medium">
        {renderHeaderItems()}
      </nav>
      <div className="text-sm font-semibold text-gray-600">01142563801</div>
    </header>
  );
}

export default Header;
