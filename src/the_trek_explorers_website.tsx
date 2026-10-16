import React, { useState, useEffect } from "react";
import {
  Mountain,
  Compass,
  Users,
  Star,
  MapPin,
  Calendar,
  Bus,
  Utensils,
  Tent,
  ShieldCheck,
  LifeBuoy,
  HeartPulse,
  Award,
  Flame,
  Sparkles,
  Phone,
  Instagram,
  MessageCircle,
  ArrowRight,
  Play,
  Menu,
  X,
  CloudRain,
  Footprints,
  Waves,
  PawPrint,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  Music,
  Camera,
  Briefcase,
  GraduationCap,
  Droplets,
  Clock,
  ChevronRight,
  Volume2,
  VolumeX,
} from "lucide-react";

// --- Curated Data for "The Trek Explorers" ---

const STATS_DATA = [
  {
    id: 1,
    label: "4+ Years Experience",
    sub: "Since 2022 in Sahyadris",
    icon: Award,
  },
  {
    id: 2,
    label: "10K+ Satisfied Trekkers",
    sub: "Mumbai & Thane Trek Fam",
    icon: Users,
  },
  { id: 3, label: "1000+ Reviews", sub: "4.9★ Rated Community", icon: Star },
  {
    id: 4,
    label: "50+ Destinations",
    sub: "Forts, Peaks & Waterfalls",
    icon: MapPin,
  },
  {
    id: 5,
    label: "100+ Trips Executed",
    sub: "Zero-Incident Track Record",
    icon: Compass,
  },
];

const SERVICES_DATA = [
  {
    id: "weekend-treks",
    title: "Weekend Treks",
    tagline: "Every Fri & Sat Night Departures",
    description:
      "High-energy weekend escapes to Kalsubai, Ratangad, Harishchandragad, and Devkund with AC bus travel, DJ bus vibes, and summit banners.",
    spots: ["Kalsubai", "Ratangad", "Harishchandragad", "Devkund"],
    icon: Mountain,
    accent: "from-emerald-700 to-emerald-900",
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "corporate-outings",
    title: "Corporate Outings",
    tagline: "Elevate Your Corporate Outings",
    description:
      "Custom 1 to 4+ days team-building expeditions across India. Proven track record with large corporate batches like our blockbuster Kalu Waterfall trips.",
    spots: [
      "Kalu Waterfall Batches",
      "1 to 4+ Days Pan-India",
      "Team Bonding Games",
      "Luxury & Camp Stays",
    ],
    icon: Briefcase,
    accent: "from-amber-800 to-amber-950",
    badge: "1–4+ Days Across India",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "college-iv",
    title: "College IV & Tours",
    tagline: "Trusted by Sophia College",
    description:
      "End-to-end management for large student batches including private AC luxury buses, interactive ice-breaker games, DJ nights, and strict safety protocols.",
    spots: [
      "Trusted by Sophia College",
      "Full Bus & Stay Mgmt",
      "Group Ice-Breakers",
      "Student-Friendly Pricing",
    ],
    icon: GraduationCap,
    accent: "from-sky-600 to-sky-900",
    badge: "Campus Partner",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "monsoon-specials",
    title: "Monsoon Specials",
    tagline: "Secret Plunge Pools & Coasts",
    description:
      "Dive into Maharashtra’s surreal monsoon wonders with life jackets provided—from natural Jacuzzi waterfalls to secret blue lagoons and coastal trails.",
    spots: [
      "Jacuzzi Waterfall",
      "Blue Lagoon",
      "Hidden Beaches",
      "Life Jackets Included",
    ],
    icon: Droplets,
    accent: "from-teal-700 to-emerald-950",
    badge: "Monsoon Hit",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=8",
  },
];

const DESTINATIONS_DATA = [
  {
    id: "amk-trek",
    name: "AMK Trek (Alang-Madan-Kulang)",
    category: "Adventure",
    featured: true,
    price: "₹1,999/-",
    specialBadge: "Only ₹1999/- with Rappelling & Climbing",
    altitude: "4,852 ft",
    difficulty: "Thrilling / Endurance",
    location: "Kalsubai Range, Igatpuri",
    nextBatch: "Fri & Sat Night Batch",
    span: "lg:col-span-2 lg:row-span-2",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "120 ft Flying Fox & Technical Rock Climbing included",
      "Certified Mountaineering Instructors & UIAA Ropes",
      "Cave Stay Experience & Hot Local Meals included",
    ],
  },
  {
    id: "kalsubai-peak",
    name: "Kalsubai Peak",
    category: "Peaks",
    featured: false,
    price: "₹1,199/-",
    specialBadge: "Highest Peak of Maharashtra",
    altitude: "5,400 ft",
    difficulty: "Moderate",
    location: "Bari Village, Bhandardara",
    nextBatch: "Every Fri & Sat Night",
    span: "lg:col-span-1 lg:row-span-1",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "60-Person Iconic Summit Banner Photo",
      "Cloud Carpet Sunrise & Iron Ladder Trail",
      "AC Bus from Borivali, Dadar, Thane & Kalyan",
    ],
  },
  {
    id: "ratangad",
    name: "Ratangad Fort",
    category: "Forts",
    featured: false,
    price: "₹1,299/-",
    specialBadge: "Yellow Sonki Flower Special",
    altitude: "4,255 ft",
    difficulty: "Easy - Moderate",
    location: "Ratanwadi, Bhandardara",
    nextBatch: "Every Saturday Night",
    span: "lg:col-span-1 lg:row-span-1",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Natural Eye of the Needle (Nedhe) Summit Point",
      "Ancient Amruteshwar Temple & Cave Exploration",
      "Golden Yellow Wildflower Meadows in Post-Monsoon",
    ],
  },
  {
    id: "harishchandragad",
    name: "Harishchandragad",
    category: "Forts",
    featured: false,
    price: "₹1,399/-",
    specialBadge: "Konkan Kada Cloud Cliff",
    altitude: "4,670 ft",
    difficulty: "Moderate",
    location: "Pachnai / Khireshwar",
    nextBatch: "Fri & Sat Departures",
    span: "lg:col-span-1 lg:row-span-1",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Breathtaking Overhanging Konkan Kada Viewpoint",
      "Kedareshwar Cave with Giant monolithic Shivling",
      "Bonfire & Stargazing at Summit Plateau",
    ],
  },
  {
    id: "devkund-waterfall",
    name: "Devkund Waterfall",
    category: "Waterfalls",
    featured: false,
    price: "₹1,199/-",
    specialBadge: "Blue Plunge Pool + Life Jackets",
    altitude: "2,700 ft",
    difficulty: "Easy",
    location: "Bhira Dam, Tamhini",
    nextBatch: "Sat & Sun Batches",
    span: "lg:col-span-1 lg:row-span-1",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "High-Buoyancy Life Jackets Provided for All",
      "Dense Jungle Trail & Bhira Backwater Crossings",
      "Safe Plunge Pool Dip with Certified Lifeguards",
    ],
  },
  {
    id: "sondai-fort",
    name: "Sondai Fort",
    category: "Forts",
    featured: false,
    price: "₹899/-",
    specialBadge: "One-Day Quick Escape",
    altitude: "1,200 ft",
    difficulty: "Easy / Beginner",
    location: "Karjat - Morbe Backwaters",
    nextBatch: "Sunday Morning Batch",
    span: "lg:col-span-1 lg:row-span-1",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "360° Emerald View of Morbe Dam Backwaters",
      "Perfect First Trek for Beginners & Solo Travelers",
      "Famous Karjat Vada Pav & Garma-Garam Chai Stop",
    ],
  },
];

const INCLUSIONS_DATA = [
  {
    title: "AC Bus from Mumbai",
    sub: "Borivali, Dadar, Thane, Vashi & Kalyan Pickups",
    icon: Bus,
    color: "bg-emerald-800/40 text-emerald-300 border-emerald-600/30",
  },
  {
    title: "Meals Included",
    sub: "Hot Morning Breakfast, Tea & Authentic Unlimited Village Lunch",
    icon: Utensils,
    color: "bg-amber-800/40 text-amber-300 border-amber-600/30",
  },
  {
    title: "Trek Leaders",
    sub: "Experienced, Energetic & Certified Sahyadri Crew",
    icon: UserCheck,
    color: "bg-sky-800/40 text-sky-300 border-sky-600/30",
  },
  {
    title: "Camping",
    sub: "Waterproof Alpine Tents, Foam Mats & Acoustic Bonfire Nights",
    icon: Tent,
    color: "bg-emerald-800/40 text-emerald-300 border-emerald-600/30",
  },
  {
    title: "Safety Instruments",
    sub: "UIAA Certified Dynamic Ropes, Harnesses, Helmets & Carabiners",
    icon: ShieldCheck,
    color: "bg-amber-800/40 text-amber-300 border-amber-600/30",
  },
  {
    title: "Life Jackets",
    sub: "High-Buoyancy Jackets for Non-Swimmers at Every Waterfall",
    icon: LifeBuoy,
    color: "bg-sky-800/40 text-sky-300 border-sky-600/30",
  },
  {
    title: "First Aid",
    sub: "Medical Kits, Oximeters, crepe bandages & WFA-Trained Leads",
    icon: HeartPulse,
    color: "bg-rose-900/40 text-rose-300 border-rose-600/30",
  },
  {
    title: "Rappelling Instructors",
    sub: "NIM & ABVIMAS Mountaineering Certified Technical Experts",
    icon: Mountain,
    color: "bg-emerald-800/40 text-emerald-300 border-emerald-600/30",
  },
];

const VIBE_MEDIA = [
  {
    id: 1,
    tag: "USP #1 • DJ BUS POV",
    title: "Full Power Zingaat & Bollywood Dance in AC Bus",
    views: "142K Views on Reels",
    duration: "0:42",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
    icon: Music,
  },
  {
    id: 2,
    tag: "USP #2 • MONSOON PLUNGE",
    title: "Jacuzzi Waterfall Jumps with Life Jackets",
    views: "98K Views on Reels",
    duration: "0:35",
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
    icon: Waves,
  },
  {
    id: 3,
    tag: "USP #3 • 60-PACK TREK FAM",
    title: "Kalsubai & Ratangad Mega Summit Group Banner",
    views: "215K Views on Reels",
    duration: "0:50",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80",
    icon: Camera,
  },
];

const SAFETY_MEASURES = [
  {
    id: 1,
    title: "Check Weather",
    description:
      "We monitor IMD red/orange alerts and rainfall radars in real time before every Friday & Saturday night departure.",
    icon: CloudRain,
  },
  {
    id: 2,
    title: "Wear Proper Trekking Shoes",
    description:
      "Good ankle support and deep-lugged rubber grip shoes are mandatory on mossy Sahyadri basalt rock steps.",
    icon: Footprints,
  },
  {
    id: 3,
    title: "Be Cautious Near Waterfalls",
    description:
      "Always wear our provided life jackets in plunge pools and avoid stepping on slippery submerged rocks.",
    icon: Waves,
  },
  {
    id: 4,
    title: "Respect Wildlife",
    description:
      "Do not litter plastic, avoid loud speakers inside silent forest zones, and never disturb native flora & fauna.",
    icon: PawPrint,
  },
  {
    id: 5,
    title: "Stay Away From Cliff Edges",
    description:
      "Maintain a strict 10-foot buffer from windy bastion edges during foggy monsoon blasts for safe photography.",
    icon: AlertTriangle,
  },
  {
    id: 6,
    title: "Follow Trek Leaders",
    description:
      "Stay between our Opening Lead and Sweeper Lead at all times—our crew’s decision on trail safety is final.",
    icon: UserCheck,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeReel, setActiveReel] = useState(VIBE_MEDIA[0]);
  const [isMuted, setIsMuted] = useState(true);
  const [checkedSafety, setCheckedSafety] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const categories = ["All", "Adventure", "Peaks", "Forts", "Waterfalls"];

  const filteredDestinations =
    selectedCategory === "All"
      ? DESTINATIONS_DATA
      : DESTINATIONS_DATA.filter((item) => item.category === selectedCategory);

  const toggleSafetyCheck = (id) => {
    setCheckedSafety((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const getWhatsAppUrl = (message) => {
    return `https://wa.me/919322296419?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="min-h-screen bg-stone-950 text-stone-100 selection:bg-emerald-500 selection:text-stone-950 scroll-smooth overflow-x-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {}
      {/* 1. TOP BAR & FIXED NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-2xl">
        {/* Compact Urgent Monsoon Batch Ticker Banner */}
        <div className="bg-gradient-to-r from-amber-900 via-emerald-800 to-amber-900 text-white border-b border-emerald-500/30 px-2 py-1 text-center text-xs font-semibold tracking-wide">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 sm:gap-3">
            <span className="inline-flex items-center gap-1 bg-amber-950/90 border border-amber-400/40 text-amber-200 px-1.5 py-0.5 rounded-full text-[10px] uppercase font-bold shrink-0">
              <Flame className="w-3 h-3 text-amber-400" /> Live Batches
            </span>
            <span className="leading-tight truncate max-w-[210px] xs:max-w-none sm:max-w-none">
              🚨 Fri &amp; Sat Departures - Book Now!
            </span>
            <a
              href={getWhatsAppUrl(
                "Hi The Trek Explorers! I want to check available seats for this weekend’s Friday/Saturday batch.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-sky-400 text-sky-300 hover:text-white font-bold inline-flex items-center gap-0.5 shrink-0"
            >
              Reserve <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Streamlined Main Navigation Bar */}
        <nav className="bg-stone-950/95 backdrop-blur-xl border-b border-emerald-900/60">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-16 flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-amber-900 flex items-center justify-center shadow-lg shadow-emerald-900/50 border border-emerald-400/30 group-hover:scale-105 transition-transform shrink-0">
                <Mountain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="truncate">
                <span
                  className="block text-sm sm:text-lg font-black tracking-tight text-white uppercase leading-none truncate"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  The Trek <span className="text-emerald-400">Explorers</span>
                </span>
                <span className="block text-[9px] sm:text-[10px] text-sky-400 font-semibold tracking-widest uppercase mt-0.5">
                  Mumbai • Sahyadri Crew
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
              <a
                href="#home"
                className="hover:text-emerald-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-emerald-400 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-emerald-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#destinations"
                className="hover:text-emerald-400 transition-colors"
              >
                Destinations
              </a>
              <a
                href="#vibe"
                className="hover:text-emerald-400 transition-colors"
              >
                The Vibe
              </a>
              <a
                href="#safety"
                className="hover:text-emerald-400 transition-colors"
              >
                Safety
              </a>
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl(
                  "Hey Trek Explorers! Please share this weekend’s trek brochure and pickup schedule from Mumbai.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-emerald-400/30 shadow-lg shadow-emerald-950/60 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-sky-300" />
                <span>9322296419</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:text-emerald-400 shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-stone-950/98 border-b border-emerald-900/60 px-4 pt-2 pb-4 space-y-1.5 max-h-[75vh] overflow-y-auto">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Destinations", href: "#destinations" },
                { label: "The Vibe", href: "#vibe" },
                { label: "Safety", href: "#safety" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg text-sm font-semibold text-stone-200 hover:bg-emerald-950/60 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl(
                  "Hi The Trek Explorers! I want to book a weekend trek from Mumbai.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4" /> WhatsApp 9322296419
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
      >
        {/* Background Image representing 60-person Summit Group / Ratangad Yellow Flowers */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        {/* Layered Monsoon Adventure Overlays (Sahyadri Green + Mud Brown + Dark Vignette) */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-emerald-950/75 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(120,53,15,0.35),transparent_55%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-emerald-900/70 border border-emerald-400/40 text-emerald-200 text-[11px] sm:text-sm font-semibold mb-5 sm:mb-6 shadow-lg max-w-full">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
            <span className="leading-snug">
              60+ Trek Fam Group Batches • Kalsubai &amp; Ratangad Trails
            </span>
          </div>

          {/* Sub-Headline */}
          <p
            className="text-sky-400 font-extrabold tracking-[0.2em] sm:tracking-[0.28em] text-xs sm:text-base uppercase mb-3 sm:mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            EXPLORE • TREK • BELONG
          </p>

          {/* Main Bold Uppercase Headline */}
          <h1
            className="text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.1] sm:leading-[1.06] drop-shadow-2xl max-w-4xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Mumbai&apos;s Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300">
              Trekking Crew
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-xl text-stone-200 max-w-2xl mx-auto font-normal leading-relaxed px-1">
            Every Weekend Curated Trips &amp; Treks from Mumbai.{" "}
            <span className="text-amber-300 font-semibold">
              Strangers Turn Into Trek Fam.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-950/80 border border-emerald-400/40 transition-all hover:-translate-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Book Your Weekend Trek</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://wa.me/919322296419?text=Hi%20The%20Trek%20Explorers!%20I%20want%20to%20join%20an%20upcoming%20weekend%20trek%20from%20Mumbai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm sm:text-base border-2 border-white/70 hover:border-sky-400 transition-all hover:-translate-y-1"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              <span>WhatsApp 9322296419</span>
            </a>
          </div>

          {/* Quick Pickup Tags */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-stone-300">
            <span className="w-full sm:w-auto text-stone-400 font-semibold uppercase tracking-wider mb-1 sm:mb-0 sm:mr-1">
              AC Bus Pickups:
            </span>
            {[
              "Borivali",
              "Andheri",
              "Dadar",
              "Sion",
              "Thane",
              "Kalyan",
              "Vashi",
            ].map((stop) => (
              <span
                key={stop}
                className="px-2.5 py-1 rounded-full bg-stone-900/80 border border-stone-700/80 text-stone-200"
              >
                📍 {stop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT / STATS BANNER */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-900 via-stone-900 to-amber-950 border border-emerald-500/30 shadow-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {STATS_DATA.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-xl bg-stone-950/35 lg:bg-transparent border border-emerald-800/30 lg:border-0 ${
                    idx === 4 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-emerald-800/60 border border-sky-400/30 flex items-center justify-center mb-2 text-sky-400 shadow-inner shrink-0">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3
                    className="text-xs sm:text-base lg:text-lg font-black text-white tracking-tight leading-snug"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stat.label}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-emerald-200/80 mt-0.5 leading-tight">
                    {stat.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ABOUT US */}
      <section
        id="about"
        className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/50 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4 text-sky-400" /> Our Community Story
            </div>

            <h2
              className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              More Than{" "}
              <span className="text-emerald-400 underline decoration-amber-700 decoration-4 underline-offset-8">
                Just A Trek
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-stone-300 leading-relaxed">
              We are <strong className="text-white">The Trek Explorers</strong>,
              Mumbai&apos;s most loved trekking community. For 4 years,
              we&apos;ve been exploring Sahyadri&apos;s jungles, forts,
              waterfalls, and hidden beaches. Our vibe isn&apos;t just
              trekking—it&apos;s bus dance parties, waterfall jumps, and crazy
              summit poses.
            </p>

            {/* Vibe Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800/60">
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 mb-2" />
                <h4 className="font-bold text-white text-sm">DJ Bus Parties</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Non-stop ice-breakers, antakshari &amp; dance right from
                  Mumbai pickup.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mb-2" />
                <h4 className="font-bold text-white text-sm">
                  Waterfall Jumps
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Secret blue lagoons &amp; plunge pools with full life-jacket
                  safety.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-800/60">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-white text-sm">
                  Solo-Traveler Safe
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  70% of our batch comes solo and leaves with a lifelong Mumbai
                  trek gang.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Collage Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-700/40 shadow-xl h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"
                  alt="Sahyadri Summit Pose"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-stone-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-emerald-300">
                    Crazy Summit Poses
                  </p>
                  <p className="text-[11px] text-stone-400">
                    Kalsubai 5,400 ft Peak
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-800 to-amber-950 border border-amber-600/40 text-white shadow-xl">
                <p
                  className="text-xl sm:text-2xl font-black uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  60+ Trekkers
                </p>
                <p className="text-xs text-amber-200 mt-1">
                  High-energy mega batches departing every Friday &amp; Saturday
                  night from Mumbai.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:pt-6">
              <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-950 border border-emerald-500/40 text-white shadow-xl">
                <p
                  className="text-xl sm:text-2xl font-black uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  4.9★ Rated
                </p>
                <p className="text-xs text-emerald-200 mt-1">
                  Loved by 10,000+ Mumbai trekkers, corporate teams &amp; Sophia
                  College batches.
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-emerald-700/40 shadow-xl h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
                  alt="Monsoon Waterfall Plunge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-stone-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-sky-300">
                    Monsoon Plunge Pools
                  </p>
                  <p className="text-[11px] text-stone-400">
                    Life Jackets Included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DO (4 SERVICE CARDS GRID) */}
      <section
        id="services"
        className="py-16 sm:py-20 bg-gradient-to-b from-stone-950 via-emerald-950/30 to-stone-950 border-y border-emerald-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">
              What We Do
            </span>
            <h2
              className="mt-2 text-2xl sm:text-5xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Curated{" "}
              <span className="text-emerald-400">Sahyadri &amp; Pan-India</span>{" "}
              Experiences
            </h2>
            <p className="mt-3 text-stone-400 text-xs sm:text-base">
              From high-energy weekend fort treks to full-scale college IVs and
              corporate offsites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl bg-stone-900/90 border border-emerald-800/50 hover:border-sky-400/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl"
                >
                  <div>
                    {/* Card Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-950/85 text-sky-300 border border-sky-400/30">
                        {service.badge}
                      </span>
                      <div
                        className={`absolute bottom-3 right-3 w-11 h-11 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center text-white shadow-lg border border-white/20`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        {service.tagline}
                      </p>
                      <h3
                        className="mt-1 text-lg sm:text-xl font-black text-white uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Spot Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {service.spots.map((spot) => (
                          <span
                            key={spot}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-stone-950 text-emerald-300 border border-emerald-800/60"
                          >
                            ✓ {spot}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <a
                      href={getWhatsAppUrl(
                        `Hi The Trek Explorers! I would like to enquire about ${service.title} (${service.tagline}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800/50 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider border border-emerald-500/30 transition-colors"
                    >
                      <span>Enquire on WhatsApp</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. POPULAR DESTINATIONS (MASONRY / BENTO GRID) */}
      <section
        id="destinations"
        className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div>
            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">
              Weekend Departures from Mumbai
            </span>
            <h2
              className="mt-2 text-2xl sm:text-5xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Popular <span className="text-emerald-400">Destinations</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-700 text-white shadow-lg shadow-emerald-900/50 border border-emerald-400/50"
                    : "bg-stone-900 text-stone-400 hover:text-white border border-stone-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {}
        {/* Masonry / Bento Grid - Vertical Poster Cards on Mobile with Zero Overlap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className={`group relative rounded-3xl overflow-hidden border ${
                dest.featured
                  ? "border-amber-400/70 shadow-2xl shadow-amber-950/50"
                  : "border-emerald-800/50"
              } bg-stone-950 min-h-[75vh] sm:min-h-[500px] flex flex-col justify-end p-6 ${dest.span}`}
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Strong Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />

              {/* Bottom-Aligned Card Content Stack */}
              <div className="relative z-10 w-full">
                {/* All Badges & Tags Grouped Naturally Above Title */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-md ${
                      dest.featured
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950"
                        : "bg-emerald-900/95 text-emerald-200 border border-emerald-500/40"
                    }`}
                  >
                    {dest.specialBadge}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/80 text-sky-300 border border-sky-500/40">
                    ⛰️ {dest.altitude}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/80 text-amber-300 border border-amber-500/30">
                    <MapPin className="w-3.5 h-3.5 shrink-0" /> {dest.location}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/80 text-emerald-300 border border-emerald-500/30">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />{" "}
                    {dest.nextBatch}
                  </span>
                </div>

                {/* Destination Title */}
                <h3
                  className={`${
                    dest.featured
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : "text-2xl sm:text-2xl"
                  } font-black uppercase text-white tracking-tight leading-tight drop-shadow-md mt-1`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {dest.name}
                </h3>

                {/* Highlights list */}
                <ul className="mt-3 space-y-1.5">
                  {dest.highlights.slice(0, dest.featured ? 3 : 2).map((h) => (
                    <li
                      key={h}
                      className="text-xs sm:text-sm text-stone-100 flex items-start gap-2 leading-snug drop-shadow"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Price & Action Footer */}
                <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-300 block">
                      All-Inclusive Package
                    </span>
                    <span
                      className="text-2xl font-black text-emerald-400"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {dest.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => setSelectedDestination(dest)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white text-xs font-bold transition-colors text-center"
                    >
                      Details
                    </button>
                    <a
                      href={getWhatsAppUrl(
                        `Hi The Trek Explorers! I want to book the ${dest.name} (${dest.price}) batch from Mumbai.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg transition-colors"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* 7. TREK INCLUSIONS (ICON LIST) */}
      <section className="py-20 bg-gradient-to-r from-emerald-950/60 via-stone-900 to-amber-950/50 border-y border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">
              Everything Taken Care Of
            </span>
            <h2
              className="mt-2 text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Trek <span className="text-emerald-400">Inclusions</span>
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base">
              Zero hidden costs. Just pack your rucksack and board our AC bus
              from Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INCLUSIONS_DATA.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-3xl bg-stone-950/80 border border-stone-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div
                    className={`w-13 h-13 w-12 h-12 rounded-2xl border flex items-center justify-center mb-4 ${item.color}`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-lg font-extrabold text-white uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      {/* 8. THE VIBE / WHY US (MEDIA SECTION) */}
      <section
        id="vibe"
        className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Music className="w-4 h-4" /> Unmatched Mumbai Trek Energy
          </div>
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            &ldquo;Trip ho aur bus me dance na ho...{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              Impossible!&rdquo;
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            From high-decibel DJ bus dance POVs on the Mumbai-Nashik highway to
            synchronized waterfall jumps and 60-person summit banners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Stylized Featured Video / Reel Player */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border-2 border-emerald-600/50 bg-stone-900 min-h-[420px] flex flex-col justify-between shadow-2xl">
            <img
              src={activeReel.image}
              alt={activeReel.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/60" />

            {/* Top Bar inside Video Player */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {activeReel.tag}
                </span>
              </div>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-full bg-stone-950/80 text-white hover:text-sky-400 border border-white/15"
                aria-label="Toggle Audio"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Center Play Visualizer */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 text-center">
              <a
                href="https://instagram.com/the.trekexplorers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-950 border-4 border-white/30 transition-transform hover:scale-110"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </a>
              <span className="mt-3 text-xs font-bold uppercase tracking-widest text-sky-300 bg-stone-950/80 px-3 py-1 rounded-full">
                Watch POV on @the.trekexplorers ({activeReel.duration})
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 p-6 bg-gradient-to-t from-stone-950 to-transparent">
              <p className="text-xs text-amber-300 font-bold uppercase">
                {activeReel.views}
              </p>
              <h3
                className="text-xl sm:text-2xl font-black text-white uppercase mt-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {activeReel.title}
              </h3>
            </div>
          </div>

          {/* Dynamic Vibe Switcher Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {VIBE_MEDIA.map((reel) => {
              const IconComp = reel.icon;
              const isSelected = activeReel.id === reel.id;
              return (
                <button
                  key={reel.id}
                  onClick={() => setActiveReel(reel)}
                  className={`w-full text-left p-4 rounded-3xl border transition-all flex items-center gap-4 ${
                    isSelected
                      ? "bg-emerald-950/80 border-emerald-400 shadow-xl"
                      : "bg-stone-900/70 border-stone-800 hover:border-emerald-700"
                  }`}
                >
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-24 h-24 rounded-2xl object-cover shrink-0 border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-sky-400">
                      <IconComp className="w-3.5 h-3.5" /> {reel.tag}
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-1 line-clamp-2">
                      {reel.title}
                    </h4>
                    <p className="text-xs text-stone-400 mt-1">{reel.views}</p>
                  </div>
                </button>
              );
            })}

            {/* Instagram CTA Banner */}
            <a
              href="https://instagram.com/the.trekexplorers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-amber-900/70 via-emerald-900/70 to-sky-900/70 border border-sky-400/30 flex items-center justify-between text-white hover:opacity-95 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-sky-300" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Follow the Craze
                  </p>
                  <p className="text-sm font-extrabold">@the.trekexplorers</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {}
      {/* 9. SAFETY MEASURES */}
      <section
        id="safety"
        className="py-20 bg-stone-900/70 border-t border-emerald-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
                Zero-Incident Sahyadri Protocol
              </span>
              <h2
                className="mt-2 text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Trek Safe,{" "}
                <span className="text-emerald-400">Follow Safety Measures</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              Click any rule to toggle your pre-trek readiness checklist before
              boarding our weekend bus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY_MEASURES.map((rule) => {
              const IconComp = rule.icon;
              const isChecked = checkedSafety.includes(rule.id);
              return (
                <div
                  key={rule.id}
                  onClick={() => toggleSafetyCheck(rule.id)}
                  className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                    isChecked
                      ? "bg-emerald-950/40 border-emerald-600/50"
                      : "bg-stone-950 border-stone-800 opacity-75"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-900/40 border border-amber-500/40 flex items-center justify-center text-amber-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                        isChecked
                          ? "bg-emerald-800/60 text-emerald-200"
                          : "bg-stone-800 text-stone-400"
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Rule #{rule.id}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-extrabold text-white uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      {/* 10. FOOTER */}
      <footer className="bg-stone-950 border-t border-emerald-900/60 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Inspirational Quote Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-amber-900 to-emerald-950 p-8 sm:p-12 text-center border border-emerald-500/30 shadow-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300 mb-3">
              The Sahyadri Pledge
            </p>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              &ldquo;Leave Only Footprints, Take Only Memories.&rdquo;
            </h2>
            <p className="mt-4 text-sm sm:text-base text-emerald-100 font-semibold">
              Curated Trips &amp; Treks Every Weekend 📩
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white">
                  <Mountain className="w-5 h-5" />
                </div>
                <span
                  className="text-xl font-black uppercase text-white"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  The Trek <span className="text-emerald-400">Explorers</span>
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed">
                Mumbai&apos;s most loved weekend trekking &amp; adventure
                community. Exploring Sahyadri forts, secret waterfalls, and
                peaks since 2022.
              </p>
            </div>

            {/* Contact Info Column */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Contact &amp; Bookings
              </h4>
              <ul className="space-y-3 text-sm text-stone-300">
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <a
                    href="https://wa.me/919322296419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-semibold"
                  >
                    Phone / WhatsApp: 9322296419
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Location: Mumbai, Maharashtra</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Departures: Every Friday &amp; Saturday Night</span>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
                Join The Trek Fam
              </h4>
              <a
                href="https://instagram.com/the.trekexplorers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-emerald-950 border border-emerald-700/50 text-white font-bold text-sm transition-colors"
              >
                <Instagram className="w-5 h-5 text-sky-400" />
                <span>@the.trekexplorers</span>
              </a>
              <p className="mt-3 text-xs text-stone-400">
                Curated Trips &amp; Treks Every Weekend 📩
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>
              © {new Date().getFullYear()} The Trek Explorers Mumbai. All rights
              reserved.
            </p>
            <p>EXPLORE • TREK • BELONG</p>
          </div>
        </div>
      </footer>

      {/* Destination Quick-View Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-emerald-600/50 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/80 text-white hover:text-emerald-400"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-amber-500 text-stone-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                {selectedDestination.specialBadge}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3
                  className="text-2xl font-black text-white uppercase"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedDestination.name}
                </h3>
                <span className="text-xl font-black text-emerald-400">
                  {selectedDestination.price}
                </span>
              </div>
              <p className="text-xs text-stone-300">
                📍 {selectedDestination.location} • ⛰️{" "}
                {selectedDestination.altitude} • ⚡{" "}
                {selectedDestination.difficulty}
              </p>
              <div className="space-y-2 pt-2">
                {selectedDestination.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs sm:text-sm text-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex gap-3">
                <a
                  href={getWhatsAppUrl(
                    `Hi The Trek Explorers! Please send the full itinerary & QR code to book ${selectedDestination.name} (${selectedDestination.price}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-center text-sm"
                >
                  Book via WhatsApp (9322296419)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
