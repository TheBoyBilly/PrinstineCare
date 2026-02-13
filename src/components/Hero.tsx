import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [heroImage, setHeroImage] = useState('')
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    // Fetch a high-quality hero image from Unsplash API
    // Using a cleaning-related search term
    const unsplashUrl = `https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=1920&q=80&auto=format&fit=crop`
    setHeroImage(unsplashUrl)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
        )}
        {heroImage && (
          <img
            src={heroImage}
            alt="Professional cleaning service"
            onLoad={() => setImageLoading(false)}
            className="w-full h-full object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Your Space,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
            Pristinely Clean
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Professional cleaning services for homes and offices. Trusted by hundreds of satisfied customers.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary text-lg px-8 py-4 hover:shadow-lg hover:shadow-primary-500/50">
            Book a Cleaning
          </button>
          <button className="btn-outline text-lg px-8 py-4 hover:shadow-lg text-white border-white hover:bg-white/10">
            Learn More
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white"
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-sm md:text-base">500+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-sm md:text-base">5-Star Rated Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <span className="text-sm md:text-base">Eco-Friendly Products</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#services" className="flex flex-col items-center text-white hover:text-gray-200 transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
