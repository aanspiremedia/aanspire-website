"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: ModalProps) {
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
                        <h2 className="text-xl font-semibold text-white">Terms of Service</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full text-gray-300 space-y-6">
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">1. Agreement to Terms</h3>
                            <p className="leading-relaxed text-sm md:text-base">These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Aanspire ("Company," "we," "us," or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">2. Intellectual Property Rights</h3>
                            <p className="leading-relaxed text-sm md:text-base">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">3. User Representations</h3>
                            <p className="leading-relaxed text-sm md:text-base">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">4. Disclaimers and Limitations of Liability</h3>
                            <p className="leading-relaxed text-sm md:text-base">The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.</p>
                        </section>
                        <p className="text-sm text-gray-500 pt-4 border-t border-white/10 mt-6 pt-4">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
