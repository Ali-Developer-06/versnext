"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Users,
  Headphones,
  Sparkles,
  ArrowRight,
  Calendar,
  FileText,
  Globe,
  Shield,
  Zap,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";

// ========== FAQ ITEM COMPONENT ==========
const FAQItem = ({ faq, index, isOpen, toggleFAQ }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#3B82F6] transition-colors"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0F172A]/5">
            <span className="text-[#0F172A] font-bold">{index + 1}</span>
          </div>
          <h3 className="text-lg font-semibold text-[#0F172A]">{faq.question}</h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="text-[#3B82F6]" size={20} />
          ) : (
            <ChevronDown className="text-[#64748B]" size={20} />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-2 border-t border-gray-100">
          <div className="pl-14">
            <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ========== CONTACT PAGE ==========
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Brand Strategy",
    "E-commerce Solutions",
    "Other"
  ];

  const budgets = [
    "Less than $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["Karachi, Pakistan", "Dubai, UAE", "London, UK"],
      color: "#3B82F6",
      description: "Visit us at our headquarters"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@versenext.com", "support@versenext.com", "careers@versenext.com"],
      color: "#F59E0B",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300 1234567", "+971 50 1234567", "+44 20 12345678"],
      color: "#0F172A",
      description: "24/7 customer support"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Sat: 10AM - 4PM", "Sunday: Closed"],
      color: "#3B82F6",
      description: "Based on PKT timezone"
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients worldwide. Our team operates across multiple time zones to ensure seamless communication and timely delivery."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models: fixed-price for well-defined projects, time & materials for ongoing work, and retainer-based for long-term partnerships. All pricing is transparent with no hidden fees."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across multiple industries including FinTech, E-commerce, Healthcare, Education, SaaS, and Enterprise solutions."
    },
    {
      question: "What is your process for starting a new project?",
      answer: "Our process begins with a discovery call, followed by a detailed proposal, planning phase, development, testing, and launch. We maintain regular communication throughout."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages including maintenance, updates, hosting, and technical support to ensure your solution continues to perform optimally."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        budget: ""
      });
    }, 3000);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HERO SECTION (SAME AS BEFORE) ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#3B82F6] rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border-2 border-[#F59E0B] rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-[#0F172A] rotate-45" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 text-[#0F172A] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-6">
              Let's <span className="text-[#3B82F6]">Connect</span>
            </h1>
            
            <p className="text-xl text-[#64748B] mb-10 max-w-3xl mx-auto">
              Ready to transform your digital presence? Share your project details 
              and our team will get back to you within 24 hours.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
              {[
                { value: "24h", label: "Response Time", icon: Zap, color: "#3B82F6" },
                { value: "100%", label: "Confidential", icon: Shield, color: "#F59E0B" },
                { value: "Free", label: "Consultation", icon: Lightbulb, color: "#0F172A" },
                { value: "50+", label: "Experts Ready", icon: Users, color: "#3B82F6" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${stat.color}10` }}>
                      <Icon size={24} style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl font-bold text-[#0F172A]">{stat.value}</div>
                    <div className="text-sm text-[#64748B]">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT FORM & INFO (COMPLETELY NEW DESIGN) ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                {/* Contact Information Cards */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#3B82F6] transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${info.color}10` }}>
                            <Icon size={28} style={{ color: info.color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-3">{info.title}</h3>
                            <div className="space-y-2">
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-[#64748B]">{detail}</p>
                              ))}
                            </div>
                            <p className="text-sm text-[#64748B] mt-3">{info.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                      <Headphones className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300">Always here to help you</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:support@versenext.com"
                      className="block w-full px-6 py-3 bg-white text-[#0F172A] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
                    >
                      Email Support
                    </a>
                    <a
                      href="tel:+923001234567"
                      className="block w-full px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
                    >
                      Emergency Call
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Send us a message</h2>
                    <p className="text-[#64748B]">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-600" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Message Sent Successfully!</h3>
                      <p className="text-[#64748B] mb-8 max-w-md mx-auto">
                        Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-8 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors inline-flex items-center gap-2"
                      >
                        <MessageSquare size={20} />
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#0F172A] mb-6 pb-3 border-b border-gray-200">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                              placeholder="john@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                              placeholder="+92 300 1234567"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                              placeholder="Your Company Inc."
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div>
                        <h3 className="text-xl font-semibold text-[#0F172A] mb-6 pb-3 border-b border-gray-200">Project Information</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Service Needed *
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, idx) => (
                                <option key={idx} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                              Project Budget
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map((budget, idx) => (
                                <option key={idx} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#0F172A] mb-2">
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white resize-none"
                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          />
                        </div>
                      </div>

                      {/* Submit Section */}
                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                          <div className="text-sm text-[#64748B]">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield size={16} />
                              <span>Your information is secure and confidential</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle size={16} />
                              <span>No spam. We respect your privacy</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-xl hover:bg-[#334155] transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px]"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <Send className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                            </button>
                            
                            <button
                              type="button"
                              className="px-6 py-4 bg-white text-[#0F172A] font-semibold rounded-xl border-2 border-gray-300 hover:border-[#0F172A] transition-colors flex items-center justify-center"
                            >
                              <Calendar className="mr-3" size={20} />
                              Schedule Call
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION (100% WIDTH) ========== */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 text-[#0F172A] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                Frequently Asked <span className="text-[#3B82F6]">Questions</span>
              </h2>
              <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
                Find answers to common questions about our services, process, and partnerships
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openFAQ === index}
                  toggleFAQ={toggleFAQ}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-white text-[#0F172A] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#0F172A] transition-colors inline-flex items-center gap-2">
                <FileText size={20} />
                View All FAQs
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SOCIAL & NEWSLETTER SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-[#0F172A] to-[#334155] rounded-2xl p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Connect With Our Community</h3>
                      <p className="text-gray-300">Follow us for updates and insights</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Linkedin, label: "LinkedIn", color: "#0077B5", followers: "5K+" },
                      { icon: Twitter, label: "Twitter", color: "#1DA1F2", followers: "8K+" },
                      { icon: Instagram, label: "Instagram", color: "#E4405F", followers: "12K+" },
                      { icon: Facebook, label: "Facebook", color: "#1877F2", followers: "15K+" },
                    ].map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href="#"
                          className="bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: social.color }}>
                              <Icon className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-semibold">{social.label}</div>
                              <div className="text-gray-400 text-sm">{social.followers} followers</div>
                            </div>
                            <ArrowRight className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={16} />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-[#3B82F6] flex items-center justify-center">
                      <Mail className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F172A]">Stay Updated</h3>
                      <p className="text-[#64748B]">Get the latest insights in your inbox</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 outline-none transition-all bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">Interests (Optional)</label>
                      <div className="flex flex-wrap gap-2">
                        {["Web Development", "Marketing", "Design", "Business"].map((interest, idx) => (
                          <label key={idx} className="inline-flex items-center">
                            <input type="checkbox" className="hidden peer" />
                            <span className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-[#64748B] peer-checked:bg-[#3B82F6] peer-checked:text-white cursor-pointer transition-colors">
                              {interest}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-xl hover:bg-[#334155] transition-colors flex items-center justify-center group">
                      Subscribe to Newsletter
                      <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-sm text-[#64748B] text-center">
                      We send 1-2 emails per month with valuable insights. No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#334155]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="text-white" size={32} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start Your <span className="text-[#F59E0B]">Project</span> Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact us now for a free consultation and let's create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0F172A] font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center group">
                <MessageSquare className="mr-3" size={20} />
                Start Free Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center">
                <Calendar className="mr-3" size={20} />
                Book a Meeting
              </button>
            </div>

            {/* Guarantee Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              {[
                { text: "24h Response", icon: Zap },
                { text: "Free Consultation", icon: Lightbulb },
                { text: "No Hidden Fees", icon: Shield },
                { text: "Satisfaction Guaranteed", icon: CheckCircle },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-white">
                    <Icon size={20} />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}