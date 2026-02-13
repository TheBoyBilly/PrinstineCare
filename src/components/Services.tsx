import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  image: string
  features: string[]
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    // Service data with Unsplash image queries
    const servicesData: Service[] = [
      {
        id: 1,
        title: 'Home Cleaning',
        description: 'Comprehensive cleaning for every room in your home, from bedrooms to bathrooms.',
        icon: '🏠',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&q=80&auto=format&fit=crop',
        features: ['Dust removal', 'Vacuuming', 'Mopping', 'Window cleaning']
      },
      {
        id: 2,
        title: 'Office Cleaning',
        description: 'Professional office cleaning to maintain a clean, productive workspace.',
        icon: '🏢',
        image: 'https://images.unsplash.com/photo-1553531088-df340cf313d2?w=600&q=80&auto=format&fit=crop',
        features: ['Desk sanitization', 'Floor cleaning', 'Trash removal', 'Kitchen areas']
      },
      {
        id: 3,
        title: 'Deep Cleaning',
        description: 'Thorough deep cleaning service that tackles dirt in hard-to-reach places.',
        icon: '✨',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
        features: ['Baseboards', 'Ceiling fans', 'Carpets', 'Appliances']
      },
      {
        id: 4,
        title: 'Carpet Cleaning',
        description: 'Expert carpet cleaning using state-of-the-art equipment and eco-friendly products.',
        icon: '🧹',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop',
        features: ['Stain removal', 'Odor elimination', 'Deep extraction', 'Fast drying']
      },
      {
        id: 5,
        title: 'Window Cleaning',
        description: 'Crystal-clear windows inside and out, including frames and sills.',
        icon: '🪟',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
        features: ['Interior cleaning', 'Exterior cleaning', 'Frame cleaning', 'Streak-free']
      },
      {
        id: 6,
        title: 'Move-In/Move-Out',
        description: 'Complete cleaning service to prepare your space for new tenants or ownership.',
        icon: '📦',
        image: 'https://images.unsplash.com/photo-1552886657-c869b3d912e1?w=600&q=80&auto=format&fit=crop',
        features: ['Full property clean', 'Appliance cleaning', 'Carpet shampooing', 'Final inspection']
      }
    ]

    setServices(servicesData)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 dark:text-white">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive cleaning solutions tailored to your specific needs. Choose from our range of professional services.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Image container */}
              <div className="relative h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                {!imagesLoaded[service.id] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
                )}
                <img
                  src={service.image}
                  alt={service.title}
                  onLoad={() => setImagesLoaded(prev => ({ ...prev, [service.id]: true }))}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 text-5xl">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary text-sm justify-center">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
