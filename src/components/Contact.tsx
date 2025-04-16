import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-xl text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className={styles['contact-grid']}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles['contact-info']}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className={styles['info-item']}>
              <div className={styles['icon-container']}>
                <Mail className="text-white" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white">muppanakiran4@gmail.com</p>
              </div>
            </div>
            <div className={styles['info-item']}>
              <div className={styles['icon-container']}>
                <Phone className="text-white" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-white">+1 512 710 7894</p>
              </div>
            </div>
            <div className={styles['info-item']}>
              <div className={styles['icon-container']}>
                <MapPin className="text-white" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">Tallahassee, FL</p>
              </div>
            </div>
          </motion.div>

          {/* <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles['contact-form']}
          >
            <input
              type="text"
              placeholder="Your Name"
              className={styles['form-input']}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles['form-input']}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className={styles['form-input']}
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles['submit-button']}
            >
              Send Message
            </motion.button>
          </motion.form> */}
        </div>
      </div>
    </section>
  );
}