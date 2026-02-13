import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface PricingPlan {
  id: number
  name: string
  description: string
  price: number
  frequency: string
  features: { name: string; included: boolean }[]
  highlighted?: boolean
}

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Basic',
      description: 'Perfect for small spaces and quick cleanups',
      price: 99,
      frequency: 'per cleaning',
      features: [
        { name: 'Living areas', included: true },
        { name: 'Kitchen', included: true },
        { name: 'One bathroom', included: true },
        { name: 'Vacuuming & mopping', included: true },
        { name: 'Deep cleaning', included: false },
        { name: 'Carpet shampooing', included: false },
      ],
    },
    {
      id: 2,
      name: 'Standard',
      description: 'Most popular for families and small offices',
      price: 199,
      frequency: 'per cleaning',
      highlighted: true,
      features: [
        { name: 'All Basic features', included: true },
        { name: 'Two bathrooms', included: true },
        { name: 'Bedrooms', included: true },
        { name: 'Baseboard cleaning', included: true },
        { name: 'Window cleaning', included: true },
        { name: 'Carpet shampooing', included: false },
      ],
    },
    {
      id: 3,
      name: 'Premium',
      description: 'Complete cleaning for larger homes and offices',
      price: 349,
      frequency: 'per cleaning',
      features: [
        { name: 'All Standard features', included: true },
        { name: 'Unlimited bathrooms', included: true },
        { name: 'Deep cleaning', included: true },
        { name: 'Carpet shampooing', included: true },
        { name: 'Appliance cleaning', included: true },
        { name: 'Post-cleaning inspection', included: true },
      ],
    },
  ]

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
    <section id="pricing" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 dark:text-white">Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that best fits your cleaning needs. All packages include our satisfaction guarantee.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover="hover"
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-primary-500 lg:scale-105 shadow-2xl'
                  : 'shadow-lg'
              } ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-gray-800'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.frequency}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Book Now
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={20} className="text-gray-300 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? 'text-gray-700 dark:text-gray-300'
                            : 'text-gray-400 dark:text-gray-500'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need something custom? We also offer:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">
              Quarterly cleaning plans
            </span>
            <span className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">
              Monthly subscriptions (20% off)
            </span>
            <span className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full">
              Corporate contracts
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
