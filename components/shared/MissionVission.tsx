'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Excellence',
    description: 'Delivering top-notch programs and services.',
    icon: '⭐',
    color: 'accent-cyan',
  },
  {
    title: 'Innovation',
    description: 'Catalyzing new approaches in Learning and Development.',
    icon: '💡',
    color: 'accent-orange',
  },
  {
    title: 'Collaboration',
    description: 'Partnering with stakeholders to drive impact.',
    icon: '🤝',
    color: 'accent-gold',
  },
  {
    title: 'Impact',
    description: 'Leading change for sustainable transformation.',
    icon: '🎯',
    color: 'accent-cyan',
  },
];

export function MissionVision() {
  return (
    <section className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-[10px] h-full">
              <div className="w-12 h-12 bg-accent-cyan/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-primary/80">
                Driving sustainable growth and development through tailored learning and capacity building solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-[10px] h-full">
              <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-primary/80">
                Shaping the transformation of individuals, teams, and businesses in a rapidly evolving global landscape.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/70 max-w-2xl mx-auto"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                  <p className="text-primary/70">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}