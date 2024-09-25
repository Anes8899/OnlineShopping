function CardNewArrivals({ item }) {
  const { image, price, title } = item;
  return (
    <div className="w-[390px] h-[616px] mb-10">
      <div className="w-[360px] h-[460px] rounded-lg  overflow-hidden border">
        <img
          src={`${image}`}
          className="transition-transform duration-300 hover:scale-105 h-full w-full p-3"
        />
      </div>
      <div className="text-center">
        <p className="text-[25px] font-bold">{title}</p>
        <p className="text-red-600 text-[20px]">$ {price}</p>
      </div>
    </div>
  );
}

export default CardNewArrivals;
