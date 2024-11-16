import Link from "next/link";

export default function Downloads() {
  const data = {
    "general": [
      {
        "title": "Concept Note",
        "date": "",
        "path": "/downloads/general-concept-note.pdf",
      },
      {
        "title": "By Law",
        "date": "",
        "path": "/downloads/general-bylaw.pdf"
      },
      {
        "title": "Program List",
        "date": "",
        "path": "/downloads/general-program-list.pdf"
      },
    ],
    "niics": [
      {
        "title": "Concept Note",
        "date": "",
        "path": "/downloads/niics-concept-note.pdf",
      },
      {
        "title": "By Law",
        "date": "",
        "path": "/downloads/niics-bylaw.pdf"
      },
      {
        "title": "Program List",
        "date": "",
        "path": "/downloads/niics-program-list.pdf"
      },
    ],
    "zahrawiyya": [
      {
        "title": "Concept Note",
        "date": "",
        "path": "/downloads/zahrawiyya-concept-note.pdf",
      },
      {
        "title": "By Law",
        "date": "",
        "path": "/downloads/zahrawiyya-bylaw.pdf"
      },
      {
        "title": "Program List",
        "date": "",
        "path": "/downloads/zahrawiyya-program-list.pdf"
      },
    ],
  }

  return (
    <>
      <div className="md:px-52 flex flex-col justify-center items-center pt-20">
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">
            GENERAL
          </h1>
          <hr className="border-2 border-blue rounded-full md:w-full w-2/3" />

          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {data?.general?.map((item: any, index: number) => {
              const color = index % 4 === 0 ? "yellow" : index % 4 === 1 ? "blue" : index % 4 === 2 ? "green" : "red";
              return (
                <Link href={item?.path} className={`group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-${color} border border-${color}/50 hover:border-${color} bg-opacity-10`}>
                  <div className={`bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-${color}/50 group-hover:from-${color} group-hover:via-${color}/50  to-${color} group-hover:to-${color}  transition-colors duration-300 flex-1 rounded-3xl`}>
                    PDF
                  </div>
                  <div className="p-1 flex flex-col gap-2">
                    <h3 className={`text-2xl leading-6 font-medium text-${color}`}>
                      <span className="text-sm">SIBAQ 2024</span>
                      <br /> {item?.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <div className={`bg-${color} h-2 w-2 rounded-full`}></div>
                      <p className="opacity-60 text-sm">{item?.date}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">
            NIICS
          </h1>
          <hr className="border-2 border-blue rounded-full md:w-full w-2/3" />

          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {data?.niics?.map((item: any, index: number) => {
              const color = index % 4 === 0 ? "yellow" : index % 4 === 1 ? "blue" : index % 4 === 2 ? "green" : "red";
              return (
                <Link href={item?.path} className={`group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-${color} border border-${color}/50 hover:border-${color} bg-opacity-10`}>
                  <div className={`bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-${color}/50 group-hover:from-${color} group-hover:via-${color}/50  to-${color} group-hover:to-${color}  transition-colors duration-300 flex-1 rounded-3xl`}>
                    PDF
                  </div>
                  <div className="p-1 flex flex-col gap-2">
                    <h3 className={`text-2xl leading-6 font-medium text-${color}`}>
                      <span className="text-sm">SIBAQ 2024</span>
                      <br /> {item?.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <div className={`bg-${color} h-2 w-2 rounded-full`}></div>
                      <p className="opacity-60 text-sm">{item?.date}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold text-center md:text-left text-3xl mb-2">
            ZAHRAWIYYA
          </h1>
          <hr className="border-2 border-blue rounded-full md:w-full w-2/3" />

          <div className="w-full px-5 lg:px-0 py-12 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {data?.zahrawiyya?.map((item: any, index: number) => {
              const color = index % 4 === 0 ? "yellow" : index % 4 === 1 ? "blue" : index % 4 === 2 ? "green" : "red";
              return (
                <Link href={item?.path} className={`group h-64 w-full lg:w-60 p-6 flex flex-col gap-3 relative rounded-3xl bg-${color} border border-${color}/50 hover:border-${color} bg-opacity-10`}>
                  <div className={`bg-gradient-to-r text-white font-bold items-center justify-center flex text-[2.5rem] from-${color}/50 group-hover:from-${color} group-hover:via-${color}/50  to-${color} group-hover:to-${color}  transition-colors duration-300 flex-1 rounded-3xl`}>
                    PDF
                  </div>
                  <div className="p-1 flex flex-col gap-2">
                    <h3 className={`text-2xl leading-6 font-medium text-${color}`}>
                      <span className="text-sm">SIBAQ 2024</span>
                      <br /> {item?.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <div className={`bg-${color} h-2 w-2 rounded-full`}></div>
                      <p className="opacity-60 text-sm">{item?.date}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
