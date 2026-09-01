import React from 'react';
import { motion as Motion } from 'framer-motion';

const achievements = [
    {
        icon: 'ph-code',
        eyebrow: 'Competitive Programming',
        title: 'Codeforces Specialist',
        metric: '1410 max rating',
        description: 'Earned Specialist rank through sustained algorithmic practice and consistent contest participation.',
    },
    {
        icon: 'ph-trophy',
        eyebrow: 'CUET Programming Contest',
        title: 'Top 6 University-Wide',
        metric: '2nd in batch',
        description: 'Placed 6th across the university and secured 2nd place among competitors from my batch.',
    },
    {
        icon: 'ph-atom',
        eyebrow: 'Bangladesh Physics Olympiad',
        title: 'Regional Runner-Up',
        metric: '2nd place',
        description: 'Secured 2nd place in the Chittagong regional round of the Bangladesh Physics Olympiad.',
    },
    {
        icon: 'ph-users-three',
        eyebrow: 'AUST IUPC',
        title: 'National Contestant',
        description: 'Represented my university team among strong collegiate programmers from institutions across Bangladesh.',
    },
    {
        icon: 'ph-map-pin',
        eyebrow: 'IIUC IUPC',
        title: 'Regional Contestant',
        description: 'Competed against university teams from across the Chittagong region in an inter-university programming contest.',
    },
    {
        icon: 'ph-terminal-window',
        eyebrow: 'CUET × BongoDev',
        title: 'DevOps Offline Qualifier',
        metric: 'Offline round',
        description: 'Advanced past the initial screening and was selected for the competitive on-site stage.',
    },
    {
        icon: 'ph-cloud',
        eyebrow: 'CUET × Poridhi',
        title: 'Intra-University Hackathon',
        description: 'Built and presented a solution in a focused, team-based hackathon environment.',
    },
    {
        icon: 'ph-shield-check',
        eyebrow: 'UAP Cyber Siege',
        title: 'CTF Offline Qualifier',
        metric: '2 years competing',
        description: 'Maintained a two-year commitment to security problem-solving and qualified with my team for the final on-site round.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const AchievementCard = ({ achievement }) => (
    <Motion.article
        variants={cardVariants}
        whileHover={{ y: -5 }}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-500/40"
    >
        <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <i className={`ph ${achievement.icon} text-2xl`} aria-hidden="true" />
            </div>
            {achievement.metric && (
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-400">
                    {achievement.metric}
                </span>
            )}
        </div>

        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/80">
            {achievement.eyebrow}
        </p>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
            {achievement.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">
            {achievement.description}
        </p>
    </Motion.article>
);

const AchievementsLayout = () => {
    return (
        <section
            id="achievements"
            className="relative z-10 w-full overflow-hidden border-t border-white/5 bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
        >
            <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                <Motion.header
                    className="mb-12 max-w-2xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-2 text-sm font-bold uppercase tracking-widest text-emerald-500">
                        Milestones
                    </p>
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Achievements &amp; Contests
                    </h2>
                    <p className="leading-relaxed text-gray-400">
                        Selected milestones from competitive programming, physics, security, and hackathons.
                    </p>
                </Motion.header>

                <Motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {achievements.map((achievement) => (
                        <AchievementCard key={achievement.title} achievement={achievement} />
                    ))}
                </Motion.div>
            </div>
        </section>
    );
};

export default AchievementsLayout;
