'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Executive Education',
    description: 'Tailored programs for leaders and executives to enhance strategic skills, drive innovation, and lead transformation in their organizations.',
    icon: '👔',
    color: 'bg-accent-cyan',
  },
  {
    title: 'Graduate Development Programs',
    description: 'Championing initiatives to equip recent graduates with industry-relevant skills, boosting employability and career readiness.',
    icon: '🎓',
    color: 'bg-accent-orange',
  },
  {
    title: 'Corporate Training',
    description: "Boosting team's performance with customized learning solutions; focusing on specific skills, addressing performance gaps, and driving business results.",
    icon: '🏢',
    color: 'bg-accent-gold',
  },
  {
    title: 'Innovation Labs',
    description: 'Co-creating solutions to navigate complex business landscapes, proffering expert advisory to stay ahead in a rapidly changing world.',
    icon: '🚀',
    color: 'bg-accent-cyan',
  },
];

export function Services() {
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
            Our Value Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/70 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed to drive growth, enhance performance, and foster lasting transformation across Africa's dynamic business landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full border-l-4 border-l-transparent hover:border-l-accent-cyan transition-all">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color}/10 rounded-[10px] flex items-center justify-center mb-4`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary/70 mb-6">{service.description}</p>
                  <Button variant="ghost" className="text-accent-cyan hover:bg-accent-cyan/10">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg">
            Explore All Programs
          </Button>
        </motion.div>
      </div>
    </section>
  );
}