import { SlCalender } from "react-icons/sl";
import { GrCatalogOption } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdMoveToInbox } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { FaCashRegister } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const workspace = [
  { icon: <SlCalender/>, title: "Calender" },
  { icon: <GrCatalogOption />, title: "Catalog" },
  { icon: <RiCustomerService2Fill /> , title: "Customer" },
  { icon: <MdMoveToInbox />, title: "Inbox" },
  { icon: <CiClock1 />, title: "Remainder" },
];

export const finance = [
  { icon: <FaCashRegister/>, title: "Cashbox" },
  { icon: <MdOutlinePayment />, title: "Payment" }
];

export const company = [
  { icon: <IoMdAnalytics/>, title: "Analytics" },
  { icon: <FaPeopleArrows />, title: "Staff" },
  { icon: <IoSettingsSharp /> , title: "Settings" }
];
