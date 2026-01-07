import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0c29] overflow-hidden relative px-5">
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center">
        <h1
          className="text-[120px] md:text-[200px] font-black leading-none select-none relative"
          style={{
            background: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(221, 36, 118, 0.5))",
          }}
        >
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Lost in Space?
        </h2>

        <p className="text-white/70 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for seems to have drifted into a black hole
          or doesn&apos;t exist in this galaxy.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Return to Earth
        </Link>
      </div>

      {/* Decorative Astronaut/Planet elements could go here if assets existed */}
    </div>
  );
}
