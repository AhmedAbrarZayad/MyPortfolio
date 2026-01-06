import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactLayout = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Web3Forms API - Get your free access key from https://web3forms.com/
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'd3a4ad28-718b-49a6-8ec2-e7638e48cd29',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Contact from ${formData.name}`
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try emailing directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5 overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h3 
                            className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Get in Touch
                        </motion.h3>
                        <motion.h2 
                            className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Let's work together
                        </motion.h2>
                        <motion.p 
                            className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Have a project in mind or want to discuss the latest tech trends? I'm always open to new opportunities and collaborations. Feel free to reach out directly or use the form.
                        </motion.p>
                        <div className="flex flex-col gap-8">
                            <motion.div 
                                className="flex items-start gap-4 group cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <i className="ph ph-envelope-simple text-2xl text-primary"></i>
                                </motion.div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">
                                        Email
                                    </p>
                                    <a 
                                        className="text-xl md:text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors" 
                                        href="mailto:ahmedabrarzayad@gmail.com"
                                    >
                                        ahmedabrarzayad@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-start gap-4 group cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <i className="ph ph-phone text-2xl text-primary"></i>
                                </motion.div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">
                                        Phone
                                    </p>
                                    <a 
                                        className="text-xl md:text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors" 
                                        href="tel:+8801768531042"
                                    >
                                        +880 1768 531042
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-start gap-4 group cursor-pointer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ x: 5 }}
                            >
                                <motion.div 
                                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <i className="ph ph-whatsapp-logo text-2xl text-primary"></i>
                                </motion.div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">
                                        WhatsApp
                                    </p>
                                    <a 
                                        className="text-xl md:text-2xl font-medium text-black dark:text-white hover:text-primary transition-colors" 
                                        href="https://wa.me/8801768531042"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +880 1768 531042
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div 
                        className="glass-panel p-8 rounded-2xl bg-white dark:bg-white/5 border-gray-200 dark:border-white/10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div 
                                    className="flex flex-col gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label 
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <motion.input 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300" 
                                        id="name"
                                        name="name"
                                        placeholder="John Doe" 
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div 
                                    className="flex flex-col gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label 
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <motion.input 
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300" 
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com" 
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                            </div>
                            <motion.div 
                                className="flex flex-col gap-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <label 
                                    className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide" 
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <motion.textarea 
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-black dark:text-white placeholder-gray-400 transition-all duration-300 resize-none" 
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..." 
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg ${
                                        status.type === 'success'
                                            ? 'bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400'
                                            : 'bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400'
                                    }`}
                                >
                                    <p className="text-sm font-medium">{status.message}</p>
                                </motion.div>
                            )}

                            <motion.button 
                                className="mt-2 w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed" 
                                type="submit"
                                disabled={isLoading}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <motion.i 
                                            className="ph ph-paper-plane-tilt text-lg"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5, rotate: -15 }}
                                        />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactLayout;
