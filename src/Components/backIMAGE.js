const image = {
  backgroundImage: "url('https://i.ibb.co/t4PB61F/backtambini.jpg')",
};

const BackIMAGE = ({ children }) => {
  return (
    <div
      className="bg-cover h-screen"
      style={image}
    >
      {children}
    </div>
  );
};

export default BackIMAGE;
