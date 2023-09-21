"use client";

import images from "@/public/images";
import History from "./History/History";
import React, { useTransition } from "react";

const ListHistory = () => {
  const listHs = [
    {
      id: "0",
      avatar_image: images.User_1,
      typeofTransaction: "Buy",
      useTransaction: "Tung",
      price: 100,
      timeTransaction: new Date(),
    },
    {
      id: "1",
      avatar_image: images.User_1,
      typeofTransaction: "Sell",
      useTransaction: "Son",
      price: 100,
      timeTransaction: new Date(),
    },
    {
      id: "2",
      avatar_image: images.User_1,
      typeofTransaction: "Buy",
      useTransaction: "Thanh",
      price: 100,
      timeTransaction: new Date(),
    },
    {
      id: "3",
      avatar_image: images.User_1,
      typeofTransaction: "Sell",
      useTransaction: "Tung",
      price: 100,
      timeTransaction: new Date(),
    },
  ];
  return (
    <div>
      {listHs.map((listH) => {
        return (
          <History
            key={listH.id}
            avatar_image={listH.avatar_image}
            typeofTransaction={listH.typeofTransaction}
            useTransaction={listH.useTransaction}
            price={listH.price}
            timeTransaction={listH.timeTransaction}
          />
        );
      })}
    </div>
  );
};
export default ListHistory;
