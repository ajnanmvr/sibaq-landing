
export default function notfound() {
  return (
    <div className="min-h-[50vh] md:h-[80vh] md:bg-red md:rounded-[100px] flex-col md:bg-opacity-10 md:m-20 flex items-center justify-center">
        <h1 className="text-[10rem] font-bold z-10">
            <span className="text-yellow">4</span>
            <span className="text-green rotate-90">0</span>
            <span className="text-blue">4</span>
        </h1>
        <p className="bg-red -mt-12 text-white px-2 rounded text-xl">The Requested Page not found</p>
    </div>
  )
}

