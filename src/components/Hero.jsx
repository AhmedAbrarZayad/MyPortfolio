import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import ProfilePic from '../assets/ProfilePic/PIC.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

// Lightweight text decode effect
const DecodeText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    
    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

// Sleek Metric Card Component with Hover Effects
const MetricItem = ({ label, value, suffix }) => {
    return (
        <motion.div 
            className="relative p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] hover:border-emerald-500/40 transition-all duration-500 group overflow-hidden"
            variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            whileHover={{ y: -5 }}
        >
            {/* Subtle glowing corner accent on hover */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl" />
            
            <p className="font-mono text-[10px] md:text-xs text-gray-500 tracking-[0.2em] uppercase mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {label}
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-mono tracking-tight flex items-baseline gap-1">
                {value}
                {suffix && <span className="text-emerald-500/60 text-lg md:text-xl font-medium">{suffix}</span>}
            </h3>
        </motion.div>
    );
};

// Cinematic 3D Background - Agency Level
const Cinematic3DBackground = () => {
    const mountRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 30);

        const renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        mountRef.current.appendChild(renderer.domElement);

        // Particle network
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 4000;
        const posArray = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            posArray[i3] = (Math.random() - 0.5) * 100;
            posArray[i3 + 1] = (Math.random() - 0.5) * 100;
            posArray[i3 + 2] = (Math.random() - 0.5) * 100;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: 0x10b981,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Floating geometric shapes
        const geometries = [];
        const geometryCount = 15;
        
        for (let i = 0; i < geometryCount; i++) {
            const geometry = new THREE.IcosahedronGeometry(Math.random() * 2 + 0.5, 0);
            const material = new THREE.MeshBasicMaterial({
                color: i % 2 === 0 ? 0x10b981 : 0x3b82f6,
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 40 - 10
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            
            mesh.userData = {
                rotationSpeed: { x: (Math.random() - 0.5) * 0.005, y: (Math.random() - 0.5) * 0.005 },
                floatSpeed: Math.random() * 0.5 + 0.5,
                floatOffset: Math.random() * Math.PI * 2
            };

            scene.add(mesh);
            geometries.push(mesh);
        }

        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            camera.position.x += (mouseRef.current.x * 3 - camera.position.x) * 0.02;
            camera.position.y += (mouseRef.current.y * 3 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);

            const positions = particlesMesh.geometry.attributes.position.array;
            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                positions[i3 + 1] += Math.sin(elapsedTime * 2 + positions[i3] * 0.1) * 0.05;
                positions[i3] += Math.cos(elapsedTime * 1.5 + positions[i3 + 2] * 0.1) * 0.05;
                
                const angle = 0.001;
                const x = positions[i3];
                const z = positions[i3 + 2];
                positions[i3] = x * Math.cos(angle) - z * Math.sin(angle);
                positions[i3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
            }
            particlesMesh.geometry.attributes.position.needsUpdate = true;
            particlesMesh.rotation.y = elapsedTime * 0.05;

            geometries.forEach((mesh) => {
                mesh.rotation.x += mesh.userData.rotationSpeed.x;
                mesh.rotation.y += mesh.userData.rotationSpeed.y;
                mesh.position.y += Math.sin(elapsedTime * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.02;
            });

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            geometries.forEach(mesh => {
                mesh.geometry.dispose();
                mesh.material.dispose();
            });
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

const Hero = () => {
    const { scrollY } = useScroll();
    
    // FIXED: Changed from [0, 150] to [40, 0]. 
    // Now it gently slides UP into place and stays perfectly still, instead of running away down the screen.
    const y1 = useTransform(scrollY, [0, 300], [40, 0]); 
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div id="hero" className='min-h-screen relative flex flex-col justify-between px-6 md:px-12 lg:px-24 py-20 overflow-hidden bg-[#050505] text-white mt-3'>
            
            {/* Cinematic 3D Background */}
            <Cinematic3DBackground />

            {/* Gradient overlays for depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />
            </div>

            {/* Status Bar */}
            <motion.div 
                className="relative z-10 flex items-center gap-3 font-mono text-xs md:text-sm text-emerald-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="tracking-[0.3em] uppercase">System Online</span>
            </motion.div>

            {/* Main Content */}
            <motion.div 
                className="relative z-10 flex-1 flex flex-col justify-center items-center gap-8 mt-8"
                style={{ y: y2, opacity, scale }}
            >
                {/* Pre-title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center"
                >
                    <p className="font-mono text-emerald-500/80 text-xs md:text-sm tracking-[0.5em] uppercase mb-4">
                        Full-Stack AI Engineer
                    </p>
                </motion.div>

                {/* Main Name - Large Scale */}
                <motion.h1 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="font-black text-[20vw] md:text-[150px] lg:text-[200px] leading-[0.85] tracking-tighter text-white uppercase block">
                        <DecodeText text="ZAYAD" className="inline-block" />
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p 
                    className="text-center max-w-2xl mx-auto px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <span className="font-mono text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase">
                        Building Scalable Systems & AI Solutions
                    </span>
                </motion.p>

                {/* Profile Picture & Metrics Dashboard - Bigger & Cooler */}
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Profile Picture - Significantly Larger */}
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-emerald-400/10 to-transparent rounded-full blur-2xl opacity-60 animate-pulse" />
                        <motion.div 
                            className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img 
                                src={ProfilePic} 
                                alt="Ahmed Abrar Zayad"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </motion.div>
                    </div>

                    {/* Core Metrics Dashboard */}
                    <motion.div 
                        className="grid grid-cols-3 gap-3 md:gap-4 w-full md:w-auto"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { 
                                opacity: 1, 
                                transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        <MetricItem label="Experience" value="1+" suffix=" Yrs" />
                        <MetricItem label="CF Rating" value="1410" suffix="" />
                        <MetricItem label="Problems Solved" value="1000" suffix="+" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Info - Core Competencies (Fixed Scroll Behavior) */}
            <motion.div 
                className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pb-8"
                style={{ y: y1 }} // Now smoothly slides UP into place and stays perfectly readable
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {[
                    {
                        label: "Architecture",
                        value: "Scalable",
                        desc: "Clean systems & databases"
                    },
                    {
                        label: "AI Integration",
                        value: "Production",
                        desc: "RAG pipelines & optimization"
                    },
                    {
                        label: "Delivery",
                        value: "11k+ Users",
                        desc: "Cross-platform apps"
                    }
                ].map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="text-center group"
                    >
                        <p className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase mb-2">
                            {item.label}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                            {item.value}
                        </h3>
                        <p className="text-xs text-gray-400 tracking-wide">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Hero;
