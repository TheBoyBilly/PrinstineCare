import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar } from 'lucide-react'

const StickyBooking = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide sticky button on mobile if user is scrolled near bottom
      if (window.innerWidth < 768) {
        const scrollPercentage =
          (window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight
        setIsVisible(scrollPercentage < 0.8)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-110"
          >
            <Calendar size={20} />
            <span>Book Now</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
        )}
      </AnimatePresence>

      {/* Quick booking modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Quick Booking</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Select your preferred service and date. We'll contact you
                shortly to confirm.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary-500">
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Carpet Cleaning</option>
                  <option>Window Cleaning</option>
                  <option>Move-In/Move-Out</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
                />
              </div>

              <button className="w-full btn-primary justify-center">
                Request Booking
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Or call us at{' '}
                <a
                  href="tel:5551234567"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  (555) 123-4567
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 right-4 md:hidden z-40 btn-primary justify-center gap-2 py-4"
      >
        <Calendar size={20} />
        Book a Cleaning
      </motion.button>
    </>
  )
}

export default StickyBooking
