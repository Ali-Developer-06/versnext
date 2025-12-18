"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code,
  Search,
  TrendingUp,
  Video,
  Users,
  Globe,
  Zap,
  Shield,
  BarChart,
  Cloud,
  GitBranch,
  Layers,
  Target,
  Rocket,
  Cpu,
  Sparkles,
  CheckCircle,
  Globe as GlobeIcon,
  Smartphone,
  Award,
  Clock,
  DollarSign,
  Headphones,
  Briefcase,
  TrendingUp as TrendingUpIcon,
  UserCheck,
  BarChart3
} from "lucide-react";

// ========== Custom Cursor ==========
const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorType("hover");
    const handleMouseLeave = () => setCursorType("default");

    window.addEventListener("mousemove", updateCursor);
    
    const interactiveElements = document.querySelectorAll("button, a");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#3B82F6] pointer-events-none z-50"
        animate={{
          x: cursorPos.x - 6,
          y: cursorPos.y - 6,
          scale: cursorType === "hover" ? 1.8 : 1,
          backgroundColor: cursorType === "hover" ? "#F59E0B" : "#3B82F6"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#3B82F6] pointer-events-none z-50"
        animate={{
          x: cursorPos.x - 16,
          y: cursorPos.y - 16,
          scale: cursorType === "hover" ? 0.8 : 1,
          borderColor: cursorType === "hover" ? "#F59E0B" : "#3B82F6"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
      />
    </>
  );
};

// ========== Professional Hero ==========
const ProfessionalHero = () => {
  const texts = ["Digital Solutions", "Web Experiences", "Marketing Strategies", "Brand Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState("text-4xl md:text-5xl lg:text-6xl");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  // Font size adjust based on text length
  useEffect(() => {
    const currentText = texts[currentIndex];
    if (currentText.length > 18) {
      setFontSize("text-3xl md:text-4xl lg:text-5xl");
    } else if (currentText.length > 15) {
      setFontSize("text-3xl md:text-4xl lg:text-5xl");
    } else {
      setFontSize("text-4xl md:text-5xl lg:text-6xl");
    }
  }, [currentIndex, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#334155] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-[#3B82F6] rounded-full" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 text-[#0F172A] text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Award-Winning Digital Agency</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              Transform Your Business With
              <br />
              <div className="h-[100px] flex items-center">
                <div className="relative w-full" ref={textRef}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ 
                        opacity: 0,
                        y: 20,
                        rotateX: -20
                      }}
                      animate={{ 
                        opacity: 1,
                        y: 0,
                        rotateX: 0
                      }}
                      exit={{ 
                        opacity: 0,
                        y: -20,
                        rotateX: 20
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                      className={`absolute left-0 ${fontSize} font-bold bg-gradient-to-r from-[#0F172A] via-[#3B82F6] to-[#0F172A] bg-clip-text text-transparent whitespace-nowrap`}
                    >
                      {texts[currentIndex]}
                      
                      {/* Gradient underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute bottom-[-8px] left-0 h-[3px] bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] rounded-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#64748B] mb-12 leading-relaxed"
            >
              We deliver enterprise-grade digital solutions that drive measurable 
              results, combining technical excellence with strategic insight to 
              propel your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors flex items-center justify-center group shadow-lg">
                Start Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white text-[#0F172A] font-semibold rounded-lg border-2 border-gray-200 hover:border-[#0F172A] transition-colors shadow-sm">
                View Case Studies
              </button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: GlobeIcon, value: "98%", label: "Client Retention", color: "#3B82F6" },
              { icon: Rocket, value: "2.5x", label: "Average Growth", color: "#F59E0B" },
              { icon: Clock, value: "30 Days", label: "Avg. Delivery", color: "#0F172A" },
              { icon: DollarSign, value: "15x", label: "Average ROI", color: "#3B82F6" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}10` }}>
                    <stat.icon size={24} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                </div>
                <div className="text-sm text-[#64748B]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-[#0F172A] to-transparent" />
      </motion.div>
    </section>
  );
};

// ========== Professional Services ==========
const ProfessionalServices = () => {
  const services = [
    {
      icon: Cpu,
      title: "Enterprise Web Development",
      description: "Scalable web applications built with modern architectures for high-performance business needs.",
      features: ["Microservices", "Cloud-Native", "Security-First", "DevOps"],
      color: "#3B82F6"
    },
    {
      icon: Target,
      title: "Strategic Digital Marketing",
      description: "Data-driven marketing campaigns focused on measurable ROI and sustainable growth.",
      features: ["Performance Marketing", "CRO", "Analytics", "Automation"],
      color: "#F59E0B"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets and customer data.",
      features: ["Penetration Testing", "Compliance", "Monitoring", "Incident Response"],
      color: "#0F172A"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transform data into actionable insights with advanced analytics and reporting.",
      features: ["Data Warehousing", "Predictive Analytics", "Dashboards", "AI/ML"],
      color: "#3B82F6"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Modern cloud solutions for scalability, reliability, and cost optimization.",
      features: ["AWS/Azure/GCP", "Kubernetes", "Serverless", "Migration"],
      color: "#F59E0B"
    },
    {
      icon: GitBranch,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies for legacy system modernization.",
      features: ["Strategy", "Implementation", "Training", "Support"],
      color: "#0F172A"
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[#64748B] text-sm font-medium mb-4">
            <div className="w-12 h-px bg-[#334155]" />
            OUR SERVICES
            <div className="w-12 h-px bg-[#334155]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Enterprise-Grade Digital Solutions
          </h2>
          <p className="text-lg text-[#64748B]">
            Specialized services designed for businesses that demand excellence, 
            reliability, and measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white border border-gray-200 rounded-xl p-8 hover:border-[#3B82F6] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" 
                    style={{ backgroundColor: `${service.color}10` }}
                  >
                    <Icon size={28} style={{ color: service.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="mr-3 flex-shrink-0" size={16} style={{ color: service.color }} />
                        <span className="text-[#64748B]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ========== Featured Projects ==========
const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Enterprise SaaS Platform",
      category: "Web Application",
      description: "A scalable SaaS solution with real-time analytics, user management, and advanced reporting features built for enterprise clients.",
      tech: ["Next.js 14", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      stats: ["+300% Growth", "99.9% Uptime", "5s Load Time"],
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "E-commerce Ecosystem",
      category: "E-commerce",
      description: "Complete e-commerce solution with inventory management, AI recommendations, and seamless payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      stats: ["$2M+ Revenue", "50K+ Users", "4.8 Rating"],
      color: "#F59E0B"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      category: "Data Platform",
      description: "Advanced analytics platform with machine learning capabilities for predictive analysis and business intelligence.",
      tech: ["Python", "FastAPI", "React", "TensorFlow", "D3.js"],
      stats: ["90% Accuracy", "10M+ Records", "Real-time"],
      color: "#0F172A"
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Navigation */}
          <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[#64748B] text-sm font-medium mb-2">
                <div className="w-8 h-px bg-[#334155]" />
                CASE STUDIES
                <div className="w-8 h-px bg-[#334155]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0F172A]">Featured Projects</h3>
              <p className="text-[#64748B] mt-2">Real-world solutions delivering measurable impact</p>
            </div>
          <div className="flex justify-between items-center mb-12">
            <div></div>
            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0F172A] hover:bg-white transition-colors"
              >
                <ChevronLeft className="text-[#334155]" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#0F172A] hover:bg-white transition-colors"
              >
                <ChevronRight className="text-[#334155]" />
              </motion.button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-xl"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-8">
                      <span 
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                        style={{ 
                          backgroundColor: `${projects[activeIndex].color}15`,
                          color: projects[activeIndex].color
                        }}
                      >
                        {projects[activeIndex].category}
                      </span>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-6">
                        {projects[activeIndex].title}
                      </h3>
                      
                      <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                        {projects[activeIndex].description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-10">
                      <h4 className="text-sm font-semibold text-[#0F172A] mb-4 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[activeIndex].tech.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-[#334155] text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                      {projects[activeIndex].stats.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="text-2xl font-bold text-[#0F172A] mb-1">{stat}</div>
                          <div className="text-xs text-[#64748B] uppercase tracking-wider">Performance</div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#334155] transition-colors group"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Right Visual */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-white">
                    <div className="relative h-full p-8 lg:p-12 flex items-center justify-center">
                      <div className="relative w-full max-w-md">
                        {/* Main Screen */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="relative bg-white rounded-xl border border-gray-200 shadow-2xl p-6"
                        >
                          <div className="flex items-center gap-2 mb-6">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-3 h-3 rounded-full" style={{
                                backgroundColor: i === 1 ? '#F59E0B' : i === 2 ? '#3B82F6' : '#0F172A'
                              }} />
                            ))}
                          </div>
                          
                          {/* Graph */}
                          <div className="space-y-3">
                            {[60, 80, 40, 90, 70].map((height, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ width: 0 }}
                                animate={{ width: `${height}%` }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="h-2 rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${projects[activeIndex].color}, ${projects[activeIndex].color}80)`
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? "w-8 bg-[#0F172A]" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========== Animated Stats ==========
const AnimatedStats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { value: 250, label: "Projects Completed", suffix: "+", icon: Briefcase, color: "#3B82F6" },
    { value: 85, label: "Happy Clients", suffix: "+", icon: UserCheck, color: "#F59E0B" },
    { value: 98, label: "Client Satisfaction", suffix: "%", icon: TrendingUpIcon, color: "#0F172A" },
    { value: 300, label: "Revenue Growth", suffix: "%", icon: BarChart3, color: "#3B82F6" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 60;
            const interval = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(interval);
              }
              
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-32 px-6 mb-2 bg-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[#64748B] text-sm font-medium mb-4">
            <div className="w-12 h-px bg-[#334155]" />
            BY THE NUMBERS
            <div className="w-12 h-px bg-[#334155]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional results through expertise and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: `${stat.color}15` }}>
                  <Icon size={32} style={{ color: stat.color }} />
                </div>
                
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {counts[index]}
                  <span style={{ color: stat.color }}>{stat.suffix}</span>
                </div>
                
                <div className="text-gray-300">{stat.label}</div>
                
                {/* Animated progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="h-1 bg-gradient-to-r from-[#3B82F6] to-[#F59E0B] mt-6 rounded-full mx-auto max-w-[100px]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// ========== MAIN PAGE ==========
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ProfessionalHero />
      <ProfessionalServices />
      <FeaturedProjects />
      <AnimatedStats />
    </div>
  );
}