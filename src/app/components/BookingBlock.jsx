"use client";
export default function BookingBlock({ booking }) {
  const color1 =
    booking.status === "Confirmed"
      ? "bg-[#FFD6AE]"
      : booking.status === "In Progress"
      ? "bg-[#B2DDFF]"
      : "bg-[#DD6FE]";

  const color2 =
    booking.status === "Confirmed"
      ? "bg-[#FFE6D5]"
      : booking.status === "In Progress"
      ? "bg-[#D1E9FF]"
      : "bg-[#ECE9FE]";

  return (
    <div>
      <div className={`h-16 ${color1} p-2 font-semibold `}>{booking.customer}</div>
      <div className={`h-16 ${color2} p-2 `}>
        <div className="text-xs">{booking.service}</div>
        <div className="text-xs italic">{booking.status}</div>
      </div>
    </div>
  );
}
