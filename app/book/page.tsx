'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30'
]

export default function BookingPage() {
  const router = useRouter()
  const today = useMemo(() => new Date().toISOString().split('T')[0], [])
  const [date, setDate] = useState<string>(today)
  const [time, setTime] = useState<string>('')
  const [mode, setMode] = useState<'zoom' | 'in_person' | ''>('')

  const isValid = date && time && mode

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    alert(`Consultation booked on ${date} at ${time} (${mode === 'zoom' ? 'Zoom' : 'In person'})`)
    window.close()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Free Consultation</h1>
            <p className="text-gray-600">Choose a date, time, and meeting preference.</p>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`px-3 py-2 rounded-lg border text-sm transition ${
                        time === slot
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meeting type</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('zoom')}
                    className={`px-4 py-3 rounded-xl border text-left transition ${
                      mode === 'zoom'
                        ? 'bg-primary-50 border-primary-600'
                        : 'bg-white border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <div className="font-semibold">Zoom</div>
                    <div className="text-sm text-gray-600">We’ll send a Zoom link after confirmation.</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('in_person')}
                    className={`px-4 py-3 rounded-xl border text-left transition ${
                      mode === 'in_person'
                        ? 'bg-primary-50 border-primary-600'
                        : 'bg-white border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <div className="font-semibold">In person</div>
                    <div className="text-sm text-gray-600">Meet at our office or your preferred location.</div>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <Button type="submit" variant="primary" size="lg" className="min-w-40" disabled={!isValid}>
                  Confirm Booking
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


