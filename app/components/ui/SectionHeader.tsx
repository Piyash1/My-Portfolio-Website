import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  quote: string;
}

export default function SectionHeader({ title, quote }: SectionHeaderProps) {
  return (
    <>
      <div className="title relative text-center font-bold mb-4 md:mb-6 flex flex-col items-center">
        <h2
          className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] uppercase title-glow"
          style={{
            backgroundImage: "var(--gradient2)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {title}
        </h2>
        <div className="title-underline"></div>
      </div>

      <div className="text text-center mb-8 md:mb-12 lg:mb-16 px-4">
        <motion.span
          className="quote-text cursor-default"
          whileHover={{ scale: 1.02, y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {quote}
        </motion.span>
      </div>
    </>
  );
}
