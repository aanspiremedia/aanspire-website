"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CookiePolicyModal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-3xl max-h-[85vh] bg-[#0a0f12] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                        <h2 className="text-xl font-semibold text-white">Cookie Policy</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full text-gray-300 space-y-6">
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">1. What Are Cookies</h3>
                            <p className="leading-relaxed text-sm md:text-base">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">2. Why We Use Cookies</h3>
                            <p className="leading-relaxed text-sm md:text-base">We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">3. Types of Cookies We Use</h3>
                            <div className="space-y-4 text-sm md:text-base">
                                <div>
                                    <strong className="text-white">Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.
                                </div>
                                <div>
                                    <strong className="text-white">Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                                </div>
                                <div>
                                    <strong className="text-white">Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">4. How Can I Control Cookies?</h3>
                            <p className="leading-relaxed text-sm md:text-base">You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.</p>
                        </section>
                        <p className="text-sm text-gray-500 pt-4 border-t border-white/10 mt-6 pt-4">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
