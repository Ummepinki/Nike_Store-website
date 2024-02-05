import React from "react";

const NikeCard = ({ popularSales: { title, items } }) => {
  return (
    <>
      <div className="mt-72 px-20">
        <p className="text-xl mb-10">{title}</p>
        <div className="grid grid-cols-3 gap-5  text-start">
          <div className="border w-[350px] h-[100px] px-5 bg-red-400 ">
            <p className="text-xl">{items.title}</p>
            <p>List</p>
            <p>price:$20</p>
          </div>
          <div className="border w-[350px] h-[100px] px-5 bg-amber-300 ">
            <p className="text-xl">{title}</p>
            <p>List</p>
            <p>price:$20</p>
          </div>
          <div className="border w-[350px]  h-[100px] px-5 bg-green-500  ">
            <p className="text-xl">{title}</p>
            <p>List</p>
            <p>price:$20</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NikeCard;
