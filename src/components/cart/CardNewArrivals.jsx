function CardNewArrivals() {
  return (
    <div className="w-[390px] h-[616px]">
      <div className="w-[360px] h-[498px] rounded-lg  overflow-hidden ">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp"
          className="transition-transform duration-300 hover:scale-105 h-full w-full "
        />
      </div>
      <div className="text-center">
        <p className="text-[25px] font-bold">Thermo Ball Etip Gloves</p>
        <p className="text-red-600 text-[20px]">$ 45,743</p>
      </div>
    </div>
  );
}

export default CardNewArrivals;
