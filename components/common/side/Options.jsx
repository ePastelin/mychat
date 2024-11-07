"use client";

import { LuUsers } from "react-icons/lu";
import { TbMessage2Minus } from "react-icons/tb";
import { CgTemplate } from "react-icons/cg";
import Option from "../footer/Option";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Options({ setScreen, screen, unreadMessages }) {
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);
  const role = Cookies.get("role");

  const handleOptionClick = (option) => {
    if (option.number) {
      setScreen(option.number);
    } else if (option.id === "phone-selector") {
      setShowPhoneSelector(!showPhoneSelector);
    }
  };

  const options = [
    {
      id: "home",
      text: "Mensajes",
      number: 1,
      icon: (
        <div className="z-10">
          { unreadMessages ? (<div className="rounded-full bg-notification w-6 h-6 mt-1 text-center text-white text-sm flex items-center justify-center absolute translate-x-8 -translate-y-4 animate-scaleIn">
            {unreadMessages < 99 ? unreadMessages : "+99"}
          </div>): null}
          <TbMessage2Minus className="text-3xl text-text-50 z-10" />
        </div>
      ),
      },
    {
      id: "template",
      text: "Plantillas",
      number: 2,
      icon: <CgTemplate className="text-3xl text-text-50 z-10" />,
    },
    {
      id: "users",
      text: "Usuarios",
      number: 3,
      icon: <LuUsers className="text-3xl text-text-50 z-10" />,
    },
  ];

  return (
    <footer className="flex flex-col items-center">
      <div className="h-auto flex flex-col gap-8">
        {options.map((option) =>
          option.id === "users" && role !== 1 ? null : (
            <Option
              key={option.id}
              text={option.text}
              selected={screen === option.number}
              onClick={() => handleOptionClick(option)}
              unreadMessages={unreadMessages}
            >
              {option.icon}
            </Option>
          )
        )}
      </div>
    </footer>
  );
}
