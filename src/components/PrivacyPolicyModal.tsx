"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: ModalProps) {
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
                        <h2 className="text-xl font-semibold text-white">Privacy Policy</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 sm:p-8 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full text-gray-300 space-y-6">
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">1. Introduction</h3>
                            <p className="leading-relaxed text-sm md:text-base">Welcome to Aanspire. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">2. Data We Collect</h3>
                            <p className="leading-relaxed text-sm md:text-base">We may collect, use, store and transfer different kinds of personal data about you, including Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data. We do not collect any Special Categories of Personal Data about you.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">3. How We Use Your Data</h3>
                            <p className="leading-relaxed text-sm md:text-base">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: where we need to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests, and where we need to comply with a legal or regulatory obligation.</p>
                        </section>
                        <section>
                            <h3 className="text-lg font-medium text-white mb-2">4. Data Security</h3>
                            <p className="leading-relaxed text-sm md:text-base">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
                        </section>
                        <p className="text-sm text-gray-500 pt-4 border-t border-white/10 mt-6 pt-4">Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
