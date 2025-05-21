// components/BookingModal.js
'use client'
import { useState, useContext } from 'react'
import { BookingContext } from '../context/BookingContext'
import { motion } from 'framer-motion'

export default function BookingModal({ onClose, slot }) {
  const { addBooking } = useContext(BookingContext)
  const [customer, setCustomer] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState('Need Approval')
  const [deposit, setDeposit] = useState('')

  const handleSave = () => {
    addBooking({
      id: Date.now().toString(),
      customer,
      service,
      date: slot.day,
      time: slot.time,
      status,
      deposit
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-30 flex items-center justify-center">
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add Booking</h2>
        <div className="space-y-3">
          <input type="text" className="w-full border-[1px] border-gray-300 focus:outline-0 rounded-xl p-2" placeholder="Customer name" onChange={e => setCustomer(e.target.value)} />
          <input type="text" className="w-full border-[1px] border-gray-300 focus:outline-0 rounded-xl p-2" placeholder="Service" onChange={e => setService(e.target.value)} />
          <select className="w-full border-[1px] border-gray-300 rounded-xl focus:outline-0 p-2" onChange={e => setStatus(e.target.value)}>
            <option>Need Approval</option>
            <option>Confirmed</option>
            <option>In Progress</option>
          </select>
          <input type="number" className="w-full border-[1px] border-gray-300 focus:outline-0 rounded-xl p-2" placeholder="Deposit (optional)" onChange={e => setDeposit(e.target.value)} />
        </div>
        <div className="mt-4 flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-[50%] hover:bg-blue-400 hover:text-gray-50" onClick={handleSave}>Save</button>
          <button className="text-gray-600 w-[50%]" onClick={onClose}>Cancel</button>
        </div>
      </motion.div>
    </div>
  )
}
