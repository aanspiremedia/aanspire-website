"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-[#0a0f12] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Let's Build <br />
                            <span className="text-[#20B2AA]">Together.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                            Whether you are looking to partner on a massive project or inquire about our portfolio, we'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="group flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#20B2AA] group-hover:bg-[#20B2AA]/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">EMAIL US</p>
                                    <a href="mailto:contact@aanspire.com" className="text-xl text-white font-medium hover:text-[#20B2AA] transition-colors">
                                        contact@aanspire.com
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#20B2AA] group-hover:bg-[#20B2AA]/10 transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">HEADQUARTERS</p>
                                    <p className="text-xl text-white font-medium">
                                        Nashik, Maharashtra
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#20B2AA]/10 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
                        <form action="https://formsubmit.co/contact@aanspire.com" method="POST" className="p-8 md:p-10 rounded-[2rem] bg-[#05080a] border border-white/10 shadow-2xl relative overflow-hidden">
                            {/* Form glare effect */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#20B2AA]/50 focus:ring-1 focus:ring-[#20B2AA]/50 transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#20B2AA]/50 focus:ring-1 focus:ring-[#20B2AA]/50 transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your next big idea..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#20B2AA]/50 focus:ring-1 focus:ring-[#20B2AA]/50 transition-all resize-none font-medium"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#20B2AA] hover:bg-[#1a908a] text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_-5px_#20B2AA]"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
