const DarkMode = ({ children, dark }) => {
  const modeClasses = dark ? "bg-black text-white" : "bg-light";

  return (
    <div className={modeClasses}>
      {children}
    </div>

  )
}

export default DarkMode