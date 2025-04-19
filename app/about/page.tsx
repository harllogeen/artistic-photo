"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Heart, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold">About Artistic</h1>
              <p className="text-lg text-muted-foreground">
                We're a team of passionate photographers dedicated to capturing
                life's most precious moments with an artistic touch.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <Image
                src="/about.jpg"
                alt="Team of photographers at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-6 text-center"
          >
            Our Story
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="prose prose-purple dark:prose-invert max-w-none"
          >
            <p>
              Founded in 2010, Artistic Photography began with a simple mission:
              to capture moments that tell stories. Our founder, a lifelong
              photography enthusiast, assembled a team of like-minded
              professionals who shared the same passion for visual storytelling.
            </p>
            <p>
              What started as a small studio specializing in portrait
              photography has grown into a full-service photography company
              offering a wide range of services. Throughout our journey, we've
              remained committed to our core values of artistic excellence,
              attention to detail, and exceptional client service.
            </p>
            <p>
              Over the years, we've had the privilege of working with hundreds
              of clients, from couples celebrating their wedding day to
              businesses looking to elevate their brand. Each project has
              contributed to our growth and refined our artistic vision.
            </p>
            <p>
              Today, Artistic Photography is recognized as a leader in the
              industry, known for our distinctive style that blends technical
              precision with creative artistry. We continue to evolve and
              innovate, always seeking new ways to capture the beauty in every
              moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Values
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Camera className="h-6 w-6 text-purple-600" />,
                title: "Artistic Excellence",
                description:
                  "We approach every project with creativity and technical precision, striving to create images that are both beautiful and meaningful.",
              },
              {
                icon: <Heart className="h-6 w-6 text-purple-600" />,
                title: "Client Satisfaction",
                description:
                  "Your vision and satisfaction are our top priorities. We work closely with you to understand your needs and exceed your expectations.",
              },
              {
                icon: <Clock className="h-6 w-6 text-purple-600" />,
                title: "Timeless Quality",
                description:
                  "We create photographs that stand the test of time, capturing moments in a way that will feel as relevant and emotional years from now as they do today.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
              >
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-3xl font-bold mb-12 text-center"
        >
          Meet Our Team
        </motion.h2>
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
              bio: "With over 15 years of experience, Alex brings artistic vision and technical expertise to every shoot.",
              image: "/team7.jpg",
            },
            {
              name: "Oni Adetomiwa",
              role: "Senior Photographer",
              bio: "Specializing in portrait and wedding photography, Maya has an eye for capturing authentic emotions.",
              image: "/team6.jpg",
            },
            {
              name: "Oluwafunmilayo",
              role: "Commercial Photographer",
              bio: "Oluwafunmilayo's background in design gives him a unique perspective for commercial and product photography.",
              image: "/team10.jpg",
            },
            {
              name: "Jude Micheal",
              role: "Videographer",
              bio: "Jude excels at documenting events, ensuring no special moment goes uncaptured.",
              image: "team8.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full group">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-purple-600 mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="bg-muted py-16">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Achievements
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 text-purple-600 mr-2" />
                Awards & Recognition
              </h3>
              <ul className="space-y-3">
                {[
                  "Best Photography Studio - City Awards 2023",
                  "Top 10 Wedding Photographers - Wedding Magazine",
                  "Excellence in Commercial Photography - Business Association",
                  "Featured in National Geographic - Special Edition",
                  "Best Portrait Photography - Photography Awards 2022",
                ].map((award, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg
                      className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{award}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Camera className="h-5 w-5 text-purple-600 mr-2" />
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Weddings Captured" },
                  { number: "1,000+", label: "Portrait Sessions" },
                  { number: "50+", label: "Commercial Clients" },
                  { number: "15+", label: "Years in Business" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="text-center p-4 bg-muted rounded-lg"
                  >
                    <div className="text-3xl font-bold text-purple-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-purple-600 text-white rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-purple-100 mb-8">
              Ready to create something beautiful? We'd love to hear about your
              project and how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
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
                    Our Services
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
