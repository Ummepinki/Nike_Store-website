import React from "react";
import Title from "../Title/Title";
import Item from "../Item/Item";

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <div>
      <Title title={title} />
      <div>
        {items?.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
