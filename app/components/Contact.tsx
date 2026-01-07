"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            setIsSent(true);
            setIsSending(false);
            if (form.current) form.current.reset();
            toast.success("Uplink Established! ✅", {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
            });
          },
          (error) => {
            console.error("Uplink Failed:", error);
            setIsSending(false);
            toast.error("Signal Lost. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              theme: "dark",
            });
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[5vw] md:px-[7vw] lg:px-[15vw] bg-transparent relative overflow-hidden"
    >
      <motion.div
        className="w-full max-w-4xl flex flex-col items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ToastContainer />

        <SectionHeader
          title="Contact"
          quote="Initiate secure communication protocol to establish a new collaboration uplink."
        />

        <div className="mt-12 w-full flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Terminal Sidebar */}
          <motion.div
            className="hidden lg:flex flex-col gap-4 w-64 p-6 rounded-2xl bg-[#0a0a1e]/80 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-(--gradient1) opacity-30" />
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-(--primary) animate-pulse shadow-[0_0_10px_var(--primary)]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                System Online
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="block text-[9px] font-mono uppercase text-(--primary) mb-1">
                  Frequency
                </span>
                <span className="block text-xs font-mono text-white/80">
                  2.4 GHz Secure
                </span>
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase text-(--primary) mb-1">
                  Location
                </span>
                <span className="block text-xs font-mono text-white/80">
                  Dhaka, Bangladesh
                </span>
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase text-(--primary) mb-1">
                  Status
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/80">
                    Available
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-3 bg-(--primary)/40 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <span className="block text-[9px] font-mono opacity-30">
                P_LOG_v2.0.4
              </span>
            </div>
          </motion.div>

          {/* Main Terminal Form */}
          <motion.div
            className="flex-1 bg-[#0d081f]/90 p-1 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden group/form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 italic">
                uplink_terminal.exe
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      type: "text",
                      name: "user_name",
                      placeholder: "IDENTIFY_NAME",
                      label: "User",
                      icon: "👤",
                    },
                    {
                      type: "email",
                      name: "user_email",
                      placeholder: "IDENTIFY_PROTOCOL",
                      label: "Protocol",
                      icon: "📧",
                    },
                  ].map((field, index) => (
                    <div key={field.name} className="relative group">
                      <label className="text-[9px] font-mono uppercase tracking-widest text-(--primary) mb-2 block opacity-70">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full p-4 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-(--primary) focus:ring-1 focus:ring-(--primary)/50 transition-all font-mono text-sm placeholder:opacity-20"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative group">
                  <label className="text-[9px] font-mono uppercase tracking-widest text-(--primary) mb-2 block opacity-70">
                    Transmission_Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="DEFINE_SCOPE"
                    required
                    className="w-full p-4 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-(--primary) transition-all font-mono text-sm placeholder:opacity-20"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[9px] font-mono uppercase tracking-widest text-(--primary) mb-2 block opacity-70">
                    Data_Payload
                  </label>
                  <textarea
                    name="message"
                    placeholder="ENTER_MESSAGE_BODY"
                    rows={4}
                    required
                    className="w-full p-4 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-(--primary) transition-all font-mono text-sm resize-none placeholder:opacity-20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`btn-uplink w-full py-5 rounded-2xl font-mono font-black text-xs uppercase tracking-[0.3em] overflow-hidden relative flex items-center justify-center gap-3 transition-all z-10 cursor-pointer ${
                    isSending
                      ? "opacity-70 pointer-events-none"
                      : "hover:-translate-y-1 hover:scale-[1.05]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                        Syncing Uplink...
                      </span>
                    ) : (
                      <>
                        Broadcast Message
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Scanline Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />
          </motion.div>
        </div>

        <style jsx>{`
          .btn-uplink {
            background: rgba(var(--primary-rgb), 0.1);
            box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(var(--primary-rgb), 0.3);
            color: white;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);
            position: relative;
            z-index: 10;
          }

          .btn-uplink::before {
            content: "";
            position: absolute;
            inset: 0;
            transform: scale(0);
            transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);
            z-index: -1;
            border-radius: inherit;
            background: var(--gradient2);
          }

          .btn-uplink:hover::before {
            transform: scale(1);
          }

          .btn-uplink::after {
            content: "";
            position: absolute;
            top: -100%;
            left: -100%;
            width: 50%;
            height: 300%;
            background: linear-gradient(
              to right,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            transform: rotate(45deg);
            transition: all 0s;
            pointer-events: none;
            z-index: 1;
          }

          .btn-uplink:hover::after {
            left: 150%;
            transition: all 1s ease;
          }

          .btn-uplink:hover {
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.5);
          }

          .btn-uplink:active {
            transform: scale(0.95);
          }

          input:focus,
          textarea:focus {
            box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.15);
            border-color: var(--primary);
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default Contact;
