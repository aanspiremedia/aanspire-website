"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy, Code2, Gavel, Sparkles } from "lucide-react";

const products = [
    {
        title: "Aanspire Media",
        description: "Premium sports event management and digital media broadcasting. Bridging the gap between local talent and global audiences.",
        icon: <Trophy className="w-8 h-8 text-[#20B2AA]" />,
        color: "from-[#20B2AA]/20 to-transparent",
        border: "group-hover:border-[#20B2AA]/50",
        href : "http://aanspiremedia.com "
    },
    {
        title: "GetGround.in",
        description: "The ultimate cricket ground booking web application. Seamless scheduling, real-time availability, and secure payments.",
        icon: <Code2 className="w-8 h-8 text-emerald-400" />,
        color: "from-emerald-400/20 to-transparent",
        border: "group-hover:border-emerald-400/50",
        href: "http://getground.in"
    },
    {
        title: "Aanspire Auction Engine",
        description: "Enterprise-grade player auction software for sports leagues. Real-time bidding, wallet management, and auto-sync.",
        icon: <Gavel className="w-8 h-8 text-blue-400" />,
        color: "from-blue-400/20 to-transparent",
        border: "group-hover:border-blue-400/50",
        comingSoon: true
    },
    {
        title: "More Coming Soon",
        description: "We are constantly incubating new ideas. Stay tuned for our upcoming scalable infrastructure and automation products.",
        icon: <Sparkles className="w-8 h-8 text-purple-400" />,
        color: "from-purple-400/20 to-transparent",
        border: "group-hover:border-purple-400/50",
        comingSoon: true
    }
];

export default function Products() {
    return (
        <section id="products" className="py-32 bg-[#0a0f12] relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-[#20B2AA] font-medium mb-4 tracking-wide text-sm"
                    >
                        OUR PORTFOLIO
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Products We've Built
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Explore our ecosystem of digital products designed to solve complex industry challenges with elegant, scalable technology.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2 ${product.border}`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none rounded-full transform translate-x-1/2 -translate-y-1/2`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="p-4 rounded-2xl bg-white/5 inline-flex w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {product.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                                    {product.title}
                                    {!product.comingSoon && (
                                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300" />
                                    )}
                                    {product.comingSoon && (
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-gray-300">
                                            ETA 2026
                                        </span>
                                    )}
                                </h3>

                                <p className="text-gray-400 leading-relaxed max-w-sm mb-8 flex-grow">
                                    {product.description}
                                </p>

                                
                                {!product.comingSoon && product.href && (
                                     <div className="mt-auto">
                                     <a href={product.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors flex items-center gap-2 after:absolute after:inset-0">
                                     <span className="relative">
                                             View Product
                                     <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                     </span>
                                     </a>
                                   </div>
                                  )}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
