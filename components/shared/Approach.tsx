'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand Your Objectives',
    description: 'We dig deep to grasp your business context, goals, and challenges, ensuring our solutions align with your priorities.',
    icon: '🎯',
  },
  {
    number: '02',
    title: 'Co-create Solutions',
    description: 'We bring together diverse perspectives to co-design programs that fit your unique needs, leveraging our expertise and your insights.',
    icon: '🤝',
  },
  {
    number: '03',
    title: 'Deliver with Expertise',
    description: 'Our seasoned facilitators lead interactive sessions, workshops, and coaching, applying industry best practices and tailored approaches to drive results.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Focus on Impact',
    description: 'We track progress, measure outcomes, and iterate to ensure our solutions drive tangible growth, improved performance, and lasting transformation.',
    icon: '📊',
  },
];

export function Approach() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Our Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/70 max-w-3xl mx-auto"
          >
            We blend learning, innovation, and collaboration to deliver impactful solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent-cyan/10 flex items-center justify-center text-3xl group-hover:bg-accent-cyan group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="text-accent-cyan/30 font-heading font-bold text-5xl mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}