'use client'
import { useState, useContext } from 'react'
import TimeSlot from './TimeSlot'
import BookingModal from './BookingModal'
import BookingBlock from './BookingBlock'
import { BookingContext } from '../context/BookingContext'

export default function CalendarView() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const { bookings } = useContext(BookingContext) 

  const openModal = (slot) => {
    setSelectedSlot(slot)
    setModalOpen(true)
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // CREATE ARRAY OF TIME SLOTS FROM 6:00 TO 20:00 
  const times = Array.from({ length: 15 }, (_, i) => `${String(i + 6).padStart(2, '0')}:00`)

  return (
    <div className="mt-4 w-full">

      {/* CALENDER */}

      {/* 1ST ROW 8 COLUMNS FIRST EMPTY 7 SHOWS DAYS */}

      <div className="grid grid-cols-8 text-center">
        <div></div>
        {days.map(day => <div key={day} className="font-bold">{day}</div>)}
      </div>

       {/* REST OF THE CALENDER */}

      {times.map(time => (
        <div key={time} className="grid grid-cols-8 ">

          {/* SHOW TIME SLOT IE: 6:00 */}

          <div className="text-sm text-right pr-2">{time}</div>

          {/* SHOW DAYS WHICH ARE STORED IN CONTEXT VARIABLE */}

          {days.map(day => {

            // CHECK IF SLOT IS BOOK OR NOT

            const booking = bookings.find(
              b => b.date === day && b.time === time
            )

            return booking ? (
              <BookingBlock key={`${day}-${time}`} booking={booking} />
            ) : (
              <TimeSlot key={`${day}-${time}`} time={time} day={day} onClick={openModal} />
            )
          })}
        </div>
      ))}

      {modalOpen && (
        <BookingModal onClose={() => setModalOpen(false)} slot={selectedSlot} />
      )}
    </div>
  )
}
