export default function Botonestilo(props) {
  const { estilo, ...other } = props;
  const className = (estilo) => {
    switch (estilo) {
      case "fourblack":
        return "fourblack h-10 flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md focus:bg-black focus:outline-none";
      case "fourorange":
        return "fourorange h-10 flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md focus:bg-black focus:outline-none";
      case "fourgreen":
        return "fourgreen h-10 flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md focus:bg-black focus:outline-none";
    }
  };
  return (
    <div className="centrar px-12">
      <button type="button" className={className(estilo)} {...other}></button>
    </div>
  );
}
