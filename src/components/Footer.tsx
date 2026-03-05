"use client";

import { useState } from "react";
import Link from "next/link";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import CookiePolicyModal from "./CookiePolicyModal";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isCookieOpen, setIsCookieOpen] = useState(false);

    return (
        <footer className="bg-[#05080a] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#20B2AA]/5 blur-[150px] pointer-events-none rounded-t-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block text-3xl font-bold tracking-tighter text-white mb-6">
                            Aanspire<span className="text-[#20B2AA]">.</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Building the next generation of digital infrastructure and immersive applications.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/aanspire-media/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#20B2AA] hover:text-white text-gray-400 flex items-center justify-center transition-all border border-white/10 hover:border-[#20B2AA]">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://github.com/aanspiremedia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#20B2AA] hover:text-white text-gray-400 flex items-center justify-center transition-all border border-white/10 hover:border-[#20B2AA]">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/aanspiremedia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#20B2AA] hover:text-white text-gray-400 flex items-center justify-center transition-all border border-white/10 hover:border-[#20B2AA]">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61575684997401" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#20B2AA] hover:text-white text-gray-400 flex items-center justify-center transition-all border border-white/10 hover:border-[#20B2AA]">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Products</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#20B2AA] transition-colors">Aanspire Media</a></li>
                            <li><a href="#" className="hover:text-[#20B2AA] transition-colors">GetGround.in</a></li>
                            <li><a href="#" className="hover:text-[#20B2AA] transition-colors">Auction Engine</a></li>
                            <li><span className="opacity-50 line-through">More soon</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#about" className="hover:text-[#20B2AA] transition-colors">About Us</a></li>
                            <li><a href="#vision" className="hover:text-[#20B2AA] transition-colors">Vision 2030</a></li>
                            <li><a href="#" className="hover:text-[#20B2AA] transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-[#20B2AA] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><button onClick={() => setIsPrivacyOpen(true)} className="hover:text-[#20B2AA] transition-colors">Privacy Policy</button></li>
                            <li><button onClick={() => setIsTermsOpen(true)} className="hover:text-[#20B2AA] transition-colors">Terms of Service</button></li>
                            <li><button onClick={() => setIsCookieOpen(true)} className="hover:text-[#20B2AA] transition-colors">Cookie Policy</button></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Aanspire. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        Designed with <span className="text-red-500">♥</span> for the future.
                    </div>
                </div>
            </div>

            {/* Modals */}
            <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
            <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
        </footer>
    );
}
