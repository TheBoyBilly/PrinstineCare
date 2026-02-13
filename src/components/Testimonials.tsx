import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  text: string
  rating: number
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    const reviews: Testimonial[] = [
      {
        id: 1,
        name: 'Jennifer Smith',
        role: 'Homeowner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop',
        text: 'PristineCare transformed my home! The team was professional, efficient, and left everything spotless. I\'ve been using their services for over a year now and couldn\'t be happier.',
        rating: 5
      },
      {
        id: 2,
        name: 'David Martinez',
        role: 'Office Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop',
        text: 'Our office has never looked better! The PristineCare team works around our schedule and maintains our space perfectly. Highly recommended for any business.',
        rating: 5
      },
      {
        id: 3,
        name: 'Michelle Johnson',
        role: 'Apartment Resident',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80&auto=format&fit=crop',
        text: 'I booked them for a deep cleaning and was blown away by the results. They got to places I didn\'t even know needed attention. Fantastic service!',
        rating: 5
      },
      {
        id: 4,
        name: 'Robert Thompson',
        role: 'Business Owner',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80&auto=format&fit=crop',
        text: 'Reliable, professional, and affordable. PristineCare has been cleaning my retail store for 2 years. They\'re punctual and do excellent work every time.',
        rating: 5
      },
      {
        id: 5,
        name: 'Lisa Wong',
        role: 'Homeowner',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop',
        text: 'Best cleaning service I\'ve used. The eco-friendly products are great for my family, and my home is always immaculate. Can\'t recommend them enough!',
        rating: 5
      }
    ]

    setTestimonials(reviews)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoplay(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  if (testimonials.length === 0) return null

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-primary-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="section-subtitle">
            Read testimonials from satisfied customers who trust PristineCare.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center italic mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-center">
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-900 dark:text-white" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Autoplay toggle */}
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {autoplay ? '⏸ Pause' : '▶ Play'} autoplay
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
