"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Check if we're in development/preview mode
const isDevelopment =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview" ||
  !process.env.EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (isDevelopment) {
        // In development/preview mode, simulate success without sending actual emails
        console.log(
          "Development mode: Email would be sent with the following data:",
          formData
        );

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success message
        setIsSuccess(true);
        toast({
          title: "Demo Mode: Message received!",
          description:
            "This is a simulated success response. In production, actual emails would be sent.",
        });
      } else {
        // In production mode, actually send emails

        // Initialize EmailJS with your public key from environment variable
        emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "");

        // Prepare template parameters
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          newsletter: formData.newsletter ? "Yes" : "No",
          to_name: "Artistic Photography",
          reply_to: formData.email,
        };

        // Send email using EmailJS
        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID || "",
          process.env.EMAILJS_TEMPLATE_ID || "",
          templateParams
        );

        // Send confirmation email to user
        const confirmationParams = {
          to_name: `${formData.firstName} ${formData.lastName}`,
          to_email: formData.email,
          service: formData.service || "photography services",
          from_name: "Artistic Photography",
        };

        await emailjs.send(
          process.env.EMAILJS_SERVICE_ID || "",
          process.env.EMAILJS_CONFIRMATION_TEMPLATE_ID || "",
          confirmationParams
        );

        setIsSuccess(true);
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      }

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        newsletter: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Set a user-friendly error message
      setErrorMessage(
        "We couldn't send your message at this time. Please try again later or contact us directly via email or phone."
      );

      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-colorful relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Photography equipment background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container py-12 md:py-24 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have a question or ready to book a session? We'd love to hear from
            you. Fill out the form below or contact us directly.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out to us through any of these channels.
                We're here to answer your questions and help you book your
                perfect photography session.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-light p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@artistic.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-coral-light p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+234 (907) 807-3945</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-light p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h3 className="font-medium">Studio Address</h3>
                  <p className="text-muted-foreground">
                    123 Photography Lane
                    <br />
                    Abuja
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Business Hours</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <div className="bg-card p-8 rounded-xl shadow-sm border border-l-4 border-l-gold">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* {isDevelopment && (
                <div className="mb-6 p-4 bg-blue-light rounded-lg flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Demo Mode Active</p>
                    <p className="text-xs text-muted-foreground">
                      This form is running in demo mode. Emails won't actually
                      be sent, but you'll see a success message.
                    </p>
                  </div>
                </div>
              )} */}

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us.{" "}
                    {isDevelopment
                      ? "In production mode, a confirmation email would be sent to you."
                      : "We've sent you a confirmation email"}{" "}
                    and will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-teal hover:bg-opacity-90 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-start">
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter FirstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter LastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <input
                      type="hidden"
                      name="service"
                      value={formData.service}
                    />
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.service}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portrait">
                          Portrait Photography
                        </SelectItem>
                        <SelectItem value="wedding">
                          Wedding Photography
                        </SelectItem>
                        <SelectItem value="event">Event Photography</SelectItem>
                        <SelectItem value="commercial">
                          Commercial Photography
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <input
                      type="hidden"
                      name="newsletter_value"
                      value={formData.newsletter ? "yes" : "no"}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to our newsletter
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Get updates on our latest work and special offers.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="bg-coral hover:bg-opacity-90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container pb-16">
        <h2 className="text-2xl font-bold mb-6">Find Our Studio</h2>
        <div className="aspect-[16/9] w-full bg-secondary rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4034940.068370041!2d6.036170923120529!3d9.029865847390298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1745043604366!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-warm py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer:
                  "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our studio directly.",
                color: "teal",
              },
              {
                question: "Do you offer consultations before booking?",
                answer:
                  "Yes, we offer complimentary 30-minute consultations either in person at our studio or via video call to discuss your vision and answer any questions.",
                color: "coral",
              },
              {
                question: "What is your booking process?",
                answer:
                  "After your initial inquiry, we'll schedule a consultation if needed. To secure your date, we require a signed contract and a 25% non-refundable retainer. The remaining balance is due two weeks before your session.",
                color: "blue",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-lg shadow-sm border-l-4 border-${faq.color}`}
              >
                <h3 className={`text-lg font-semibold mb-2 text-${faq.color}`}>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
