import ChefPic1 from '../assets/ChefProject/1.png';
import ChefPic2 from '../assets/ChefProject/2.png';
import ChefPic3 from '../assets/ChefProject/3.png';
import ChefPic4 from '../assets/ChefProject/4.png';
import ChefPic5 from '../assets/ChefProject/5.png';
import DeliveryPic1 from '../assets/DeliveryProject/1 (1).png';
import DeliveryPic2 from '../assets/DeliveryProject/1 (2).png';
import DeliveryPic3 from '../assets/DeliveryProject/1 (3).png';
import DeliveryPic4 from '../assets/DeliveryProject/1 (4).png';
import DeliveryPic5 from '../assets/DeliveryProject/1 (5).png';
import DeliveryPic6 from '../assets/DeliveryProject/1 (6).png';
import RealEstate1 from '../assets/RealEstateProject/1 (1).png';
import RealEstate2 from '../assets/RealEstateProject/1 (2).png';
import RealEstate3 from '../assets/RealEstateProject/1 (3).png';
import RealEstate4 from '../assets/RealEstateProject/1 (4).png';
import RealEstate5 from '../assets/RealEstateProject/1 (5).png';
import RealEstate6 from '../assets/RealEstateProject/1 (6).png';
import InfraAI from '../assets/AI Infra Monitor/AI.png';
import InfraAnalytics from '../assets/AI Infra Monitor/Analytics.png';
import InfraIncidents from '../assets/AI Infra Monitor/Incidents.png';
import InfraServers from '../assets/AI Infra Monitor/Servers.png';

export const projectsData = [
    {
        id: 'infra-monitor',
        title: 'AI Infra Monitor',
        image: InfraIncidents,
        images: [InfraIncidents, InfraServers, InfraAI, InfraAnalytics],
        featured: true,
        description: 'A secure command center that watches servers, spots unusual behavior, and helps teams investigate incidents faster.',
        fullDescription: 'Infra Monitor gives operations teams one place to understand the health of their servers and services. It securely connects Linux machines, turns live activity into clear alerts, routes incidents to the right people, and provides an AI assistant grounded in real system evidence—not guesswork.',
        technologies: ['Flutter', 'Django REST', 'FastAPI', 'PostgreSQL', 'Redis & Celery', 'VictoriaMetrics', 'Grafana Alloy', 'Isolation Forest', 'Gemini', 'Docker'],
        githubLink: 'https://github.com/AhmedAbrarZayad/Infra-Monitor',
        duration: 'Jul 2026 - Sep 2026',
        category: 'Infrastructure & AI Platform',
        role: 'Full-Stack & ML Engineer',
        keyFeatures: [
            {
                icon: 'ph-pulse',
                title: 'Everything in one view',
                description: 'Brings server health, containers, services, alerts, and incidents into a single cross-platform dashboard.'
            },
            {
                icon: 'ph-warning-octagon',
                title: 'Problems found early',
                description: 'Recognizes unusual behavior and service crashes, creates incidents, and notifies the people responsible.'
            },
            {
                icon: 'ph-sparkle',
                title: 'Evidence-led AI help',
                description: 'Lets engineers discuss an anomaly with an assistant that answers from recorded system evidence.'
            },
            {
                icon: 'ph-users-three',
                title: 'Built for real teams',
                description: 'Keeps each organization separate and gives Owners, Admins, and Engineers only the access they need.'
            }
        ],
        capabilityGroups: [
            {
                icon: 'ph-hard-drives',
                title: 'From server to signal',
                description: 'A one-command setup securely enrolls Linux servers and begins collecting health data from hosts, containers, and labeled services.'
            },
            {
                icon: 'ph-shield-check',
                title: 'Security at every boundary',
                description: 'Single-use enrollment links, one-time credentials, safe rotation, strict validation, and server-enforced permissions protect every organization.'
            },
            {
                icon: 'ph-brain',
                title: 'Useful intelligence, safely applied',
                description: 'Machine learning identifies unusual patterns while deterministic rules remain in control. AI suggestions support people rather than taking action for them.'
            },
            {
                icon: 'ph-siren',
                title: 'A complete response workflow',
                description: 'Teams can acknowledge, assign, investigate, document, and resolve incidents with notifications and an audit-friendly history.'
            },
            {
                icon: 'ph-detective',
                title: 'Request Shield',
                description: 'Analyzes web traffic for threat patterns, explains the evidence, and sends uncertain cases for a second opinion without automatically blocking users.'
            },
            {
                icon: 'ph-devices',
                title: 'Operations from anywhere',
                description: 'The Flutter application delivers role-aware monitoring and incident tools across mobile, web, and desktop platforms.'
            }
        ],
        architecture: [
            { label: 'Experience', value: 'Flutter app for Android, iOS, web, Windows, Linux & macOS' },
            { label: 'Product API', value: 'Domain-driven Django REST API with PostgreSQL and JWT authentication' },
            { label: 'Async work', value: 'Redis, Celery workers, scheduled jobs & Firebase notifications' },
            { label: 'Telemetry', value: 'Grafana Alloy → Prometheus Remote Write → multi-tenant VictoriaMetrics' },
            { label: 'Machine learning', value: 'FastAPI, versioned Isolation Forest models & MLflow evaluation' },
            { label: 'AI investigation', value: 'Gemini over authenticated WebSockets with permission-scoped evidence' },
            { label: 'Security analytics', value: '26-feature request analysis with Random Forest classification' },
            { label: 'Deployment', value: 'Docker Compose with health checks and dependency-aware startup' }
        ],
        challenges: [
            'Designing a secure enrollment flow that reveals credentials once, resists replay, and supports safe, idempotent rotation',
            'Keeping organization data isolated across the application, telemetry store, ML service, and live AI conversations',
            'Building reliable feature windows from noisy system metrics while preserving identical feature ordering for training and inference',
            'Separating probabilistic recommendations from authoritative health rules so AI can assist without controlling operational state'
        ],
        engineeringHighlights: [
            'Implemented Snappy-compressed Protobuf ingestion and trusted identity injection before routing metrics to isolated VictoriaMetrics tenants',
            'Built versioned Isolation Forest inference in FastAPI, persisted anomaly evidence in Django, and evaluated models with MLflow and confusion matrices',
            'Secured enrollment with expiring single-use tokens, SHA-256 credential hashes, constant-time comparison, atomic state transitions, and replay protection',
            'Streamed permission-scoped Gemini investigations through single-use WebSocket tickets while keeping deterministic health rules authoritative',
            'Created an asynchronous Request Shield pipeline using a consistent 26-feature vector, Random Forest threat zones, and human-reviewed suggestions',
            'Covered authorization, telemetry, lifecycle, ML integration, and UI behavior with approximately 248 test definitions'
        ]
    },
    {
        id: 'chefmarket',
        title: 'ChefMarket',
        image: ChefPic2,
        images: [ChefPic1, ChefPic2, ChefPic3, ChefPic4, ChefPic5],
        description: 'A modern restaurant management platform with role-based access control, real-time order tracking, and integrated payment processing.',
        fullDescription: 'A comprehensive restaurant management platform built with the MERN stack, featuring role-based access control for users, chefs, and admins. Includes real-time order tracking, secure payment processing with Stripe, and advanced meal management capabilities.',
        technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Stripe', 'TailwindCSS', 'TanStack Query', 'Framer Motion'],
        liveLink: 'https://restaurant-c51e9.web.app',
        githubLink: 'https://github.com/AhmedAbrarZayad/Chef-frontend',
        duration: 'Nov 2024 - Dec 2024',
        category: 'Full Stack Web App',
        challenges: [
            'Implementing secure role-based access control with Firebase Authentication and JWT tokens',
            'Handling real-time order status updates across different user roles',
            'Integrating Stripe payment processing with proper error handling and webhook events',
            'Optimizing database queries for meal filtering and search functionality',
            'Managing state synchronization between frontend and backend using TanStack Query'
        ],
        futureImprovements: [
            'Add real-time notifications using Socket.io for order status updates',
            'Implement advanced analytics dashboard for business insights',
            'Add multi-language support for international expansion',
            'Integrate table reservation system with QR code scanning',
            'Implement AI-powered meal recommendations based on user preferences',
            'Add inventory management system for ingredients tracking'
        ]
    },
    {
        id: 'delivery',
        title: 'Delivery Management System',
        image: DeliveryPic1,
        images: [DeliveryPic1, DeliveryPic2, DeliveryPic3, DeliveryPic4, DeliveryPic5, DeliveryPic6],
        description: 'Full-stack courier delivery platform with real-time tracking, role-based access, and integrated payment processing.',
        fullDescription: 'A comprehensive courier service web application that streamlines parcel delivery management. Features secure authentication, role-based access control for users, riders, and admins, real-time tracking with interactive maps, and integrated Stripe payment processing.',
        technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'React Leaflet', 'Material-UI', 'TailwindCSS v4', 'Framer Motion'],
        liveLink: 'https://delivery-app-e0827.web.app',
        githubLink: 'https://github.com/AhmedAbrarZayad/DeliveryApp',
        duration: 'Nov 2025 - Dec 2025',
        category: 'Full Stack Web App',
        challenges: [
            'Integrating React Leaflet for interactive map-based location selection',
            'Implementing rider approval workflow with admin panel controls',
            'Managing parcel assignment logic between available riders',
            'Handling real-time delivery status updates across multiple user roles',
            'Ensuring secure payment processing with Stripe and proper transaction tracking',
            'Optimizing performance with large datasets of parcels and users'
        ],
        futureImprovements: [
            'Add live GPS tracking for riders during delivery',
            'Implement push notifications for delivery status updates',
            'Add automated rider assignment based on proximity and availability',
            'Integrate SMS notifications for delivery confirmations',
            'Add rating and review system for riders and services',
            'Implement route optimization for multiple deliveries',
            'Add multi-currency support for international operations'
        ]
    },
    {
        id: 'realestate',
        title: 'Real Estate Management Platform',
        image: RealEstate2,
        images: [RealEstate1, RealEstate2, RealEstate3, RealEstate4, RealEstate5, RealEstate6],
        description: 'Modern real estate platform with property listings, analytics dashboard, and comprehensive admin controls.',
        fullDescription: 'A full-stack real estate management system that connects property buyers, sellers, and administrators. Features advanced search and filtering, user dashboards with analytics, review systems, and a powerful admin panel for platform management.',
        technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'TailwindCSS', 'Recharts', 'Framer Motion', 'Headless UI'],
        liveLink: 'https://neon-cendol-9e4ab4.netlify.app',
        githubLink: 'https://github.com/AhmedAbrarZayad/RealEstate-Frontend',
        duration: 'Oct 2024 - Nov 2024',
        category: 'Full Stack Web App',
        challenges: [
            'Implementing complex property search with multiple filters (location, price, type)',
            'Building responsive analytics dashboard with interactive charts using Recharts',
            'Managing user-generated content with proper moderation controls',
            'Implementing star-based rating system with review management',
            'Handling image uploads and optimization for property galleries',
            'Creating role-based admin panel with comprehensive oversight features'
        ],
        futureImprovements: [
            'Add virtual tour support with 360° images',
            'Implement mortgage calculator with real-time rates',
            'Add property comparison feature for multiple listings',
            'Integrate map view for property locations',
            'Add scheduling system for property viewings',
            'Implement saved searches with email alerts',
            'Add chatbot for instant customer support',
            'Integrate CRM system for lead management'
        ]
    }
];
