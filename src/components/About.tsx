import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

const About = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    // Sample team members data with avatar images from Unsplash
    const team: TeamMember[] = [
      {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop',
        bio: 'With 15 years of experience in professional cleaning, Sarah founded PristineCare to deliver exceptional service.'
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop',
        bio: 'Michael ensures every job is completed to perfection with his attention to detail and management expertise.'
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Lead Cleaner',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80&auto=format&fit=crop',
        bio: 'Emily leads our cleaning team with her passionate approach to creating spotless, healthy environments.'
      }
    ]

    setTeamMembers(team)
  }, [])

  const sectionVariants = {
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
      transition: { duration: 0.6 }
    },
  }

  const stats = [
    { icon: Users, label: 'Team Members', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '100+' },
    { icon: Target, label: 'Happy Clients', value: '500+' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gray-900 dark:text-white">About PristineCare</h2>
          <p className="section-subtitle">
            We're committed to excellence in every cleaning service we provide.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Cleaning Excellence
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At PristineCare, we believe that a clean space is a happy space. Founded in 2015, we've grown from a single team member to a trusted cleaning service provider serving hundreds of homes and offices across the region.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Our commitment to quality, reliability, and customer satisfaction sets us apart. We use only eco-friendly cleaning products and the latest equipment to ensure safe, effective results every time.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Whether you need regular maintenance cleaning or a deep clean, our experienced team is ready to transform your space with care and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary justify-center">
                Get Your Free Quote
              </button>
              <button className="btn-secondary justify-center">
                View Our Process
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-8"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {stat.value}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Meet Our Team
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to providing the highest quality cleaning services.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="text-center"
            >
              <div className="mb-4 overflow-hidden rounded-lg h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
