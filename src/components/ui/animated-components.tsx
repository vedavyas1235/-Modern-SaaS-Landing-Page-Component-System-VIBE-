import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Animated Container with scroll-triggered animations
export const AnimatedContainer = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Card with hover effects
export const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Text with typewriter effect
export const AnimatedText = ({ text, className = "", delay = 0 }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.1, 
            delay: delay + index * 0.02 
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  )
}

// Animated Button with ripple effect
export const AnimatedButton = ({ children, className = "", onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Parallax Section
export const ParallaxSection = ({ children, className = "", speed = 0.5 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Counter
export const AnimatedCounter = ({ value, duration = 2, className = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <motion.span
        initial={{ number: 0 }}
        whileInView={{ number: value }}
        transition={{ duration, ease: "easeOut" }}
      >
        {({ number }) => Math.round(number)}
      </motion.span>
    </motion.span>
  )
}

// Floating Animation
export const FloatingElement = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered List Animation
export const StaggeredList = ({ children, className = "", staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered Item
export const StaggeredItem = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Background Gradient
export const AnimatedBackground = ({ className = "" }) => {
  return (
    <motion.div
      animate={{
        background: [
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
        ]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
      className={className}
    />
  )
}

// Animated Progress Bar
export const AnimatedProgressBar = ({ progress, className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-primary h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  )
}

// Animated Icon
export const AnimatedIcon = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Divider
export const AnimatedDivider = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`h-px bg-gradient-to-r from-transparent via-primary to-transparent ${className}`}
    />
  )
}

// Animated Badge
export const AnimatedBadge = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay,
        type: "spring",
        stiffness: 300
      }}
      whileHover={{ scale: 1.1 }}
      className={className}
    >
      {children}
    </motion.span>
  )
} 