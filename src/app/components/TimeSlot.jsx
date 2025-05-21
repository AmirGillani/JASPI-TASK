// components/TimeSlot.js
'use client'
export default function TimeSlot({ day, time, onClick }) {
  return (
    <div
      className="h-16 border-[1px] border-gray-400 hover:bg-gray-100 cursor-pointer"
      onClick={() => onClick({ day, time })}
    />
  )
}
