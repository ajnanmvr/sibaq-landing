import autoColor from "@/utils/autoColor";
import Link from "next/link";
const data = {
  general: [
    {
      title: "Brochure",
      date: "24-11-2024",
      path: "/downloads/sibaq-25-brochure.pdf",
    },
    {
      title: "Concept Note",
      date: "16-11-2024",
      path: "/downloads/general-concept-note.pdf",
    },
    {
      title: "By Law",
      date: "16-11-2024",
      path: "/downloads/general-bylaw.pdf",
    },
    {
      title: "Program List",
      date: "16-11-2024",
      path: "/downloads/general-program-list.pdf",
    },
  ],
  niics: [
    {
      title: "Concept Note",
      date: "16-11-2024",
      path: "/downloads/niics-concept-note.pdf",
    },
    { title: "By Law", date: "16-11-2024", path: "/downloads/niics-bylaw.pdf" },
    {
      title: "Program List",
      date: "16-11-2024",
      path: "/downloads/niics-program-list.pdf",
    },
  ],
  zahrawiyya: [
    {
      title: "Concept Note",
      date: "16-11-2024",
      path: "/downloads/zahrawiyya-concept-note.pdf",
    },
    {
      title: "By Law",
      date: "16-11-2024",
      path: "/downloads/zahrawiyya-bylaw.pdf",
    },
    {
      title: "Program List",
      date: "16-11-2024",
      path: "/downloads/zahrawiyya-program-list.pdf",
    },
  ],
};
export default function Downloads() {
  const colors = ["yellow", "blue", "green", "red"];

  return (
    <div className="md:px-52 flex flex-col justify-center items-center pt-20">
      {Object.entries(data).map(([section, items]) => (
        <div
          key={section}
          className="flex justify-center flex-col items-center"
        >
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">
            {section.toUpperCase()}
          </h1>
          <hr className="border-2 border-blue rounded-full md:w-full w-2/3" />
          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {items.map((item, index) => {
              const color = colors[index % colors.length];
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-${color} border border-${color}/50 hover:border-${color} bg-opacity-10`}
                >
                  <div
                    className={`bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] ${autoColor(
                      index,
                      [
                        "from-yellow/50 group-hover:from-yellow group-hover:via-yellow/50  to-yellow group-hover:to-yellow",
                        "from-blue/50 group-hover:from-blue group-hover:via-blue/50  to-blue group-hover:to-blue",
                        "from-green/50 group-hover:from-green group-hover:via-green/50  to-green group-hover:to-green",
                        "from-red/50 group-hover:from-red group-hover:via-red/50  to-red group-hover:to-red",
                      ]
                    )}  transition-colors duration-300 flex-1 rounded-3xl`}
                  >
                    PDF
                  </div>
                  <div className="p-1 flex flex-col gap-2">
                    <h3
                      className={`text-2xl leading-6 font-medium text-${color}`}
                    >
                      <span className="text-sm">SIBAQ 2024</span>
                      <br /> {item.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <div className={`bg-${color} h-2 w-2 rounded-full`}></div>
                      <p className="opacity-60 text-sm">{item.date}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
