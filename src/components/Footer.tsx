import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      column: 'Services',
      links: [
        { label: 'Home Cleaning', href: '#' },
        { label: 'Office Cleaning', href: '#' },
        { label: 'Deep Cleaning', href: '#' },
        { label: 'Carpet Cleaning', href: '#' },
      ],
    },
    {
      column: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      column: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Logo and description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  PristineCare
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional cleaning services dedicated to maintaining pristine
                spaces for homes and offices across the region.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-primary-400" />
                  <a
                    href="tel:5551234567"
                    className="hover:text-primary-400 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-primary-400" />
                  <a
                    href="mailto:info@pristinecare.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    info@pristinecare.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin
                    size={16}
                    className="text-primary-400 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-400">
                    123 Clean Street,
                    <br />
                    San Francisco, CA 94102
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            {footerLinks.map((column) => (
              <motion.div key={column.column} variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4">
                  {column.column}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-8" />

          {/* Footer bottom */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} PristineCare. All rights reserved. | Built
              with ❤️ for a cleaner world.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Newsletter signup (Optional feature) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-3">
              Subscribe to our newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get cleaning tips and special offers delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="btn-primary text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="fixed bottom-6 right-6 z-40 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        title="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  )
}

export default Footer
