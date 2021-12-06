const Loading = () => {
  return (
    <div className="opacity-75 bg-gray-600 h-screen w-full flex justify-center items-center">
      <div>
        <p className="animate-bounce pb-8 text-black font-black text-2xl">
          Buscando consulta...
        </p>
        <div className="ml-12 animate-spin rounded-full h-32 w-32 border-b-8 border-black">
          <img src="https://i.ibb.co/vctr5CG/Logo.png" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
