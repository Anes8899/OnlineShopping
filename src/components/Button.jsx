function Button({
  children,
  size = "w-[400px] h-[100px]",
  className = "",

  bg = "bg-slate-600",
  effic = "bg-red-500",
}) {
  return (
    <>
      {/* <button className={`${size} ${className}`}>{children}</button> */}
      <div className="group relative">
        <div className={`relative ${size}`}>
          <button
            className={`relative ${bg} text-white text-center transition-transform duration-200 ease-in-out overflow-hidden w-full ${className}`}
          >
            <span className={`relative z-10 ${className}`}>{children}</span>
            <div
              className={`absolute top-0 left-0 w-full h-full ${effic} transform transition-transform duration-200 ease-in-out group-hover:translate-x-[100%]`}
            ></div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
