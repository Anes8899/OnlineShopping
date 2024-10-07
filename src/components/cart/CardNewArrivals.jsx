import TextControl from "../TextControl";

function CardNewArrivals({ item }) {
  const { image, price, title } = item;
  return (
    <div className="mt-20">
      <div className="border">
        <img
          src={`${image}`}
          className="transition-transform duration-300 hover:scale-105 h-[380px] w-[370px] mt-10 p-3 items-center mx-auto  overflow-hidden rounded-lg"
        />
      </div>
      <div className="text-center">
        <TextControl
          className={"text-[25px] font-bold px-5"}
          text={title}
          maxLength={15}
        />
        <p className="text-red-600 text-[20px]">$ {price}</p>
      </div>
    </div>
  );
}

export default CardNewArrivals;
