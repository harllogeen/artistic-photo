import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Users, ImageIcon, Building } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Portrait Photography",
      description: "Capture your personality and essence in stunning portrait sessions tailored to your style.",
      features: ["Individual Portraits", "Family Portraits", "Professional Headshots", "Environmental Portraits"],
      image:
        "/potrait.jpg",
      link: "/services/portrait",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Wedding Photography",
      description: "Document your special day with artistic flair and attention to every meaningful moment.",
      features: ["Engagement Sessions", "Full Day Coverage", "Album Design", "Second Photographer Option"],
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/services/wedding",
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Event Photography",
      description: "Professional coverage for all types of events, from corporate gatherings to special celebrations.",
      features: ["Corporate Events", "Birthday Parties", "Graduations", "Social Gatherings"],
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/services/event",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Commercial Photography",
      description:
        "Elevate your brand with high-quality commercial photography that showcases your products and services.",
      features: ["Product Photography", "Real Estate", "Food & Beverage", "Corporate Branding"],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "/services/commercial",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted">
        <div className="container py-12 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Photography Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our range of professional photography services designed to capture your most important moments with
            artistic excellence.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services List */}
      <section className="container py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="space-y-6">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full inline-flex">
                  <div className="text-purple-600">{service.icon}</div>
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-purple-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="mt-4">
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing options to fit your needs and budget. Custom packages are also available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$59",
                description: "Perfect for simple portrait sessions",
                features: ["1-hour session", "One location", "10 digital images", "Online gallery", "Basic retouching"],
              },
              {
                name: "Premium",
                price: "$100",
                description: "Ideal for events and extended sessions",
                features: [
                  "3-hour session",
                  "Multiple locations",
                  "30 digital images",
                  "Online gallery",
                  "Advanced retouching",
                  "Print release",
                ],
                featured: true,
              },
              {
                name: "Ultimate",
                price: "$250",
                description: "Comprehensive coverage for special occasions",
                features: [
                  "Full day coverage",
                  "Multiple locations",
                  "All digital images",
                  "Online gallery",
                  "Premium retouching",
                  "Print release",
                  "Photo album",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-background rounded-lg shadow-sm overflow-hidden ${
                  plan.featured ? "ring-2 ring-purple-600 transform md:-translate-y-4" : ""
                }`}
              >
                {plan.featured && (
                  <div className="bg-purple-600 text-white py-2 text-center text-sm font-medium">Most Popular</div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> / session</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-purple-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${plan.featured ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our photography services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "How far in advance should I book my session?",
              answer:
                "We recommend booking at least 4-6 weeks in advance for portrait sessions and 6-12 months for weddings to ensure availability. However, we sometimes have last-minute openings, so don't hesitate to inquire.",
            },
            {
              question: "What should I wear for my portrait session?",
              answer:
                "We recommend wearing solid colors and avoiding busy patterns. Coordinate colors with your group but don't match exactly. We'll provide a detailed style guide after booking to help you prepare.",
            },
            {
              question: "How long until I receive my photos?",
              answer:
                "Portrait sessions are typically delivered within 2 weeks. Weddings and larger events take 4-6 weeks. We'll provide a few sneak peeks within 48 hours after your session.",
            },
            {
              question: "Do you offer prints and albums?",
              answer:
                "Yes, we offer a variety of high-quality prints, canvases, and custom-designed albums. These can be ordered directly through your online gallery or as part of your package.",
            },
            {
              question: "What happens if it rains on the day of my outdoor session?",
              answer:
                "We monitor the weather closely and will be in touch if there's a concern. We can either move to an indoor location or reschedule for another day at no additional cost. We're flexible and want to ensure you get the best possible photos.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="bg-purple-600 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Session?</h2>
            <p className="text-purple-100 mb-8">
              Contact us today to discuss your photography needs and secure your date.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
