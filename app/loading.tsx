export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0f0c29]">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-[#FF512F] border-r-[#DD2476] rounded-full animate-spin"></div>

        {/* Middle Ring */}
        <div className="absolute inset-2 border-4 border-transparent border-t-[#F09819] border-l-[#EDDE5D] rounded-full animate-spin-reverse"></div>

        {/* Inner Ring */}
        <div className="absolute inset-4 border-4 border-transparent border-t-[#5f27cd] border-b-[#341f97] rounded-full animate-spin-slow"></div>

        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1.5s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
