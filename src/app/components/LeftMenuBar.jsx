import React from "react";
import { SlCalender } from "react-icons/sl";
import { workspace, company, finance } from "../data/sideBarData";

export default function LeftMenuBar() {
  return (
    <div className="border-[1px] border-gray-300 hidden md:block">
      <div className="py-7">
        <span className="text-theme-1 font-bold text-2xl px-7 cursor-pointer">Bookt</span>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="flex flex-col gap-2 justify-center items-start px-7">
          <li>
            <span className="text-sm font-bold text-gray-500">WORKSPACE</span>
          </li>

          {workspace.map((item, index) => (
            <li key={index}>
              <span className="flex gap-1 justify-center items-center text-gray-400 hover:text-theme-1 hover:cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 justify-center items-start px-7">
          <li>
            <span className="text-sm font-bold text-gray-500">COMPANY</span>
          </li>
          {company.map((item, index) => (
            <li key={index}>
              <span className="flex gap-1 justify-center items-center text-gray-400 hover:text-theme-1 hover:cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 justify-center items-start px-7">
          <li>
            <span className="text-sm font-bold text-gray-500">FINANCE</span>
          </li>
          {finance.map((item, index) => (
            <li key={index}>
              <span className="flex gap-1 justify-center items-center text-gray-400 hover:text-theme-1 hover:cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
