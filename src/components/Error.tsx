export default function Error() {
  return (
    <div className="min-h-[50vh] mt-10 md:h-[80vh] md:bg-red md:rounded-[100px] flex-col md:bg-opacity-10 flex items-center justify-center">
      <h1 className="text-[10rem] tracking-[-1rem] animate-bounce font-bold z-10">
        <span className="text-yellow">O</span>
        <span className="text-green">o</span>
        <span className="text-blue animate-spin">p</span>
        <span className="text-red">s</span>
      </h1>
      <p className="bg-red -mt-12 text-white px-2 rounded text-xl animat">
        Something Went Wrong
      </p>
    </div>
  );
}
