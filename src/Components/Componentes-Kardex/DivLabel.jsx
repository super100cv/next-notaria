const DivLabel = (props) => {
  const { Titulo, children } = props;
  return (
    <div className="pl-7 flex flex-wrap ">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="text-left block uppercase tracking-wide text-black text-xs font-bold mb-2">
          {Titulo}
        </label>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DivLabel;
