import React from 'react'
import { motion } from 'framer-motion';
import HeadingSection from './HeadingSection';
import TestimonialCarousel from '../carousel/TestimonialCarousel';

//type Props = {}

const SectionTestimonial: React.FC = () => {
  return (
    <section className="ftco-section flex items-center justify-center relative mx-4">
        <div className="container">
          <HeadingSection
            title="Testimonials"
            subtitle="Our Patients Says About Us"
          />

          <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }} // Usa el delay pasado como prop
          viewport={{ once: true, amount: 0.2 }} 
          className="w-full">
            <TestimonialCarousel />
          </motion.div>
        </div>
      </section>
  )
}

export default SectionTestimonial;