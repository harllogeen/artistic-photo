"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Refs for animation triggers
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Fullscreen */}
      <section className="relative h-screen flex items-center bg-gradient-colorful">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-shadow-sm">
                A Click Of <span className="text-gradient">Artistic Joy</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Because every picture tells a story, let us help you tell yours.
                We capture moments that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-coral text-white hover:bg-opacity-90 border-0"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-teal text-teal hover:bg-teal-light"
                >
                  <Link href="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md aspect-[4/5] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src="/hero.jpg"
                alt="Portrait photograph of a person in dramatic lighting"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-0"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-warm" ref={featuresRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Artistic</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring your vision to life through our lens, creating timeless
              memories with artistic precision.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Camera className="h-6 w-6 text-teal" />,
                title: "Professional Quality",
                description:
                  "High-end equipment and expert techniques to ensure stunning results every time.",
                color: "teal",
              },
              {
                icon: <Award className="h-6 w-6 text-coral" />,
                title: "Award Winning",
                description:
                  "Recognized for excellence in photography with multiple industry awards.",
                color: "coral",
              },
              {
                icon: <Users className="h-6 w-6 text-blue" />,
                title: "Personalized Service",
                description:
                  "Tailored approach to meet your specific needs and vision for every shoot.",
                color: "blue",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div
                  className={`bg-${feature.color}-light p-3 rounded-full mb-4`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 text-${feature.color}`}
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16" ref={teamRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented photographers bring years of experience and passion to
            every project.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              name: "Salam Abidemi",
              role: "Lead Photographer & Founder",
              image: "/team7.jpg",
              color: "teal",
            },
            {
              name: "Oni Adetomiwa",
              role: "Senior Photographer",
              image: "/team6.jpg",
              color: "coral",
            },
            {
              name: "Oluwafunmilayo",
              role: "Commercial Photographer",
              image: "/team10.jpg",
              color: "blue",
            },
            {
              name: "Jude Micheal",
              role: "Videographer",
              image: "team8.jpg",
              color: "gold",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-card rounded-xl overflow-hidden shadow-sm group border-t-4 border-${member.color}`}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className={`text-${member.color}`}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-gold text-gold hover:bg-gold-light"
          >
            <Link href="/about">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container py-16" ref={galleryRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through some of our favorite shots that showcase our artistic
            style and versatility.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {[
            {
              src: "/event.avif",
              alt: "Portrait photography of a woman in natural light",
              color: "teal",
            },
            {
              src: "/event2.jpg",
              alt: "Wedding photography of a couple",
              color: "coral",
            },
            {
              src: "/event3.avif",
              alt: "Event photography of a concert",
              color: "gold",
            },
            {
              src: "/event6.jpg",
              alt: "Commercial product photography",
              color: "blue",
            },
            {
              src: "/event4.jpg",
              alt: "Landscape photography of mountains",
              color: "teal",
            },
            {
              src: "/event5.jpg",
              alt: "Fashion photography of a model",
              color: "coral",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative aspect-square overflow-hidden rounded-lg group shadow-md border-2 border-transparent hover:border-${item.color}`}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-${item.color}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
              >
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 hover:text-white"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue text-blue hover:bg-blue-light"
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-colorful py-16" ref={testimonialsRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about their experience with us.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Wedding Client",
                quote:
                  "Artistic captured our wedding day perfectly. Every emotion, every detail - they didn't miss a thing. The photos are beyond what we could have imagined.",
                color: "teal",
              },
              {
                name: "Michael Chen",
                role: "Corporate Client",
                quote:
                  "Professional, punctual, and produced exceptional photos for our company event. The team was a pleasure to work with from start to finish.",
                color: "coral",
              },
              {
                name: "Emily Rodriguez",
                role: "Portrait Session",
                quote:
                  "I've never felt so comfortable in front of a camera. The photographer made the experience enjoyable, and the results speak for themselves. Absolutely stunning!",
                color: "gold",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`bg-card p-6 rounded-lg shadow-sm border-l-4 border-${testimonial.color}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className={`h-5 w-5 text-${testimonial.color}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground flex-grow mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-sm text-${testimonial.color}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16" ref={ctaRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-teal-500 via-blue-500 to-pink-400 text-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Tell Your Story?
            </h2>
            <p className="text-white/90 mb-8">
              Let's create something beautiful together. Contact us today to
              discuss your photography needs and book your session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue hover:bg-white/90"
                >
                  <Link href="/contact">Book a Session</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/20 hover:text-white"
                >
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
