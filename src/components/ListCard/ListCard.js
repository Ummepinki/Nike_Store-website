import React from "react";

const ListCard = () => {
  return (
    <>
      <div className="mt-20 px-20">
        <div className="grid grid-cols-3 ">
          <div className="border w-[350px] h-[200px] rounded">list item 1</div>
          <div className="border w-[350px] h-[200px] rounded">list item 2 </div>
          <div className="border w-[350px] h-[200px] rounded">list item 3</div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
