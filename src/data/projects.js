import padelCoreProfile from '../assets/images/projects/padel-core/padel-core-profile.webp'
import padelCoreContent from '../assets/images/projects/padel-core/padel-core-content.webp'
import padelCoreAnalytics from '../assets/images/projects/padel-core/padel-core-analytics.webp'
import esroAnalytics from "../assets/images/projects/esro-coffee/esro-coffee-analytics.webp";
import esroContent from "../assets/images/projects/esro-coffee/esro-coffee-content.webp";
import esroProfile from "../assets/images/projects/esro-coffee/esro-coffee-profile.webp";
import noorMahalImage from "../assets/images/projects/noor-mahal-banquet/noor-mahal-image.webp";
import noorMahalAssets from "../assets/images/projects/noor-mahal-banquet/noor-mahal-assets.webp";
import ironCoreDashboard from "../assets/images/projects/iron-core/iron-core-dashboard.webp";
import curioDashboard from "../assets/images/projects/curio/curio-dashboard.webp";
import desiDashboard from "../assets/images/projects/desi/dashboarddesi.webp";

const visual = (seed) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=432&q=80&fm=webp`

export const projects = [
  { id: 1, brand: 'Padel Core', category: 'Sports', featured: true, bio: 'Padel Core Sports is a premium indoor padel club, offering a world-class playing experience with professional courts, modern facilities, and a vibrant community for players of all skill levels.', images: [padelCoreProfile, padelCoreContent, padelCoreAnalytics], services: ['Social Media Marketing', 'Social Media Management', 'Content Creation', 'Lead Generation', 'Meta Ads Management', 'Performance Marketing', 'Community Management'] },
  { id: 2, brand: 'Esro Coffee', category: 'Café & Restaurant', featured: true, bio: 'Esro Coffee is a modern café and restaurant offering premium coffee, handcrafted beverages, and a variety of delicious food in a warm and welcoming atmosphere. The brand focuses on delivering a memorable dining experience while building a strong local community.', images: [
  esroAnalytics,
  esroContent,
  esroProfile
] , services: ['Social Media Marketing', 'Content Production', 'Social Media Management','Lead Generation'] },
  { id: 3, brand: 'Iron Core Fitness', category: 'GYM', featured: true, bio: 'Iron Core Fitness is a premium  gym brand focused on fitness, expert training, and community. We managed social media, created engaging content, and ran campaigns to increase visibility and generate leads.', images: [visual('photo-1517836357463-d25dfeac3438'),  ironCoreDashboard, visual('photo-1637430308606-86576d8fef3c')], services: ['Social Media Management', 'Creative Design', 'Lead Generation'] },
  { id: 4, brand: 'Noor Mahal Banquet', category: 'Premium Wedding Venue & Banquet Hall', featured: true, bio: 'Noor Mahal Banquet is a premium wedding venue. We managed social media, created engaging content, and ran targeted campaigns to boost visibility and generate quality leads.', images: [visual('photo-1519167758481-83f550bb49b3'),   noorMahalImage, noorMahalAssets], services: ['Social Media Marketing', 'Content Design', 'Influencer Marketing', 'Video Editing','meta ads','lead generation'] },
  { id: 5, brand: 'Curio Coffee', category: 'Specialty Coffee Café', featured: false, bio: 'Curio Coffee is a modern specialty café serving handcrafted coffee, signature drinks, and fresh food in a welcoming atmosphere.', images: [visual('photo-1495474472287-4d71bcdd2085'), curioDashboard, visual('photo-1509042239860-f550ce710b93')], services: ['Photography', 'Social media management', 'Campaigns' , 'Content Creation' , 'influencer marketing'] },
  { id: 6, brand: 'Desi Fast Food', category: 'Fast Food Restaurant', featured: false, bio: 'Desi Fast Food is a modern restaurant serving authentic desi flavors, burgers, wraps, BBQ, and fast food with a focus on quality, taste, and great customer experience.', images: [visual('photo-1599487488170-d11ec9c172f0'), desiDashboard, visual('photo-1723066217456-cf0b10ceda2b')], services: ['Content creation', 'Content Design', 'Lead Generation','performance marketing'] },
]

