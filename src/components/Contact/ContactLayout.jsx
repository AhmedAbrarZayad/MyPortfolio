import React from 'react';

const ContactLayout = () => {
    return (
        <section className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h3>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white mb-8">
                            Let's work together
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                            Have a project in mind or want to discuss the latest tech trends? I'm always open to new opportunities and collaborations. Feel free to reach out directly or use the form.
                        </p>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <i className="ph ph-envelope-simple text-2xl text-primary"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">
                                        Email
                                    </p>
                                    <a 
                                        className="text-xl md:text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors" 
                                        href="mailto:hello@johndoe.dev"
                                    >
                                        hello@johndoe.dev
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <i className="ph ph-phone text-2xl text-primary"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">
                                        Phone
                                    </p>
                                    <a 
                                        className="text-xl md:text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors" 
                                        href="tel:+1234567890"
                                    >
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="glass-panel p-8 rounded-2xl bg-white dark:bg-white/5 border-gray-200 dark:border-white/10">
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label 
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300" 
                                        id="name" 
                                        placeholder="John Doe" 
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label 
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300" 
                                        id="email" 
                                        placeholder="john@example.com" 
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label 
                                    className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea 
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300 resize-none" 
                                    id="message" 
                                    placeholder="Tell me about your project..." 
                                    rows="4"
                                ></textarea>
                            </div>
                            <button 
                                className="mt-2 w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group" 
                                type="button"
                            >
                                Send Message
                                <i className="ph ph-paper-plane-tilt text-lg group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactLayout;
