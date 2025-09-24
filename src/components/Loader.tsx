const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-900 to-slate-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500  via-blue-600 to-cyan-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-2 bg-linear-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-full animate-pulse"></div>
        </div>

        <div className="text-white/80 text-sm font-medium tracking-wide animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
