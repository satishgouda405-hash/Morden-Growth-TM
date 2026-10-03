/* ============================================================
   MODERN GROWTH — SITE CONTENT
   Edit everything on the site from this one file:
   services, pricing, FAQ, contact details, navigation, SEO.
   ============================================================ */

export const business = {
  name: "Modern Growth",
  tagline: "Digital growth solutions for modern businesses.",
  description:
    "Modern Growth helps local and growing businesses improve their online presence, customer communication, lead capture and repetitive business workflows using websites, AI and practical digital solutions.",
  whatsapp: "+91 8762421846",
  whatsappLink: "https://wa.me/918762421846",
  phone: "+91 8088193482",
  phoneLink: "tel:+918088193482",
  email: "mordengrowthbusiness@gmail.com",
  emailLink: "mailto:mordengrowthbusiness@gmail.com",
  location: "Karnataka, India",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM",
  seo: {
    title: "Modern Growth | Websites, AI & Digital Growth Solutions",
    description:
      "Modern Growth helps businesses improve their websites, customer experience, lead capture and digital workflows with practical web, AI and automation solutions.",
  },
};

/** Pre-filled WhatsApp message used by every CTA on the site. */
export function whatsappUrl(message?: string) {
  const msg =
    message ||
    `Hello ${business.name}, I'd like to discuss a digital growth solution for my business.`;
  return `${business.whatsappLink}?text=${encodeURIComponent(msg)}`;
}

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Our Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

/* ------------------------------------------------------------
   SERVICES
   ------------------------------------------------------------ */
export const services = [
  {
    id: "websites",
    num: "01",
    title: "AI-Powered Business Websites",
    short:
      "Modern responsive websites that combine professional design, clear information, enquiry-focused layouts and optional AI functionality.",
    points: [
      "Responsive design",
      "Mobile-first experience",
      "WhatsApp integration",
      "Contact forms",
      "Google Maps",
      "Service & product sections",
      "Gallery",
      "FAQ sections",
      "Booking / enquiry sections",
      "Basic SEO structure",
      "AI assistant where appropriate",
    ],
    cta: "Build My Website",
    wa: "Hello Modern Growth, I'd like to discuss building a new business website.",
  },
  {
    id: "ai-assistant",
    num: "02",
    title: "AI Customer Assistant",
    short:
      "An AI assistant that can answer frequently asked questions, explain services, guide visitors and direct them toward an enquiry.",
    points: [
      "Opening hours",
      "Services information",
      "Pricing information",
      "Location & directions",
      "Booking questions",
      "Frequently asked questions",
      "Travel, hotel & resort information",
    ],
    note:
      "AI responses are configured with your accurate business information. The assistant is built not to invent business policies or prices.",
    cta: "Discuss an AI Assistant",
    wa: "Hello Modern Growth, I'm interested in an AI customer assistant for my business.",
  },
  {
    id: "whatsapp-system",
    num: "03",
    title: "WhatsApp Enquiry System",
    short:
      "Make it easier for customers to start conversations and send enquiries directly from your website.",
    points: [
      "WhatsApp CTA buttons",
      "Pre-filled enquiry messages",
      "Service-specific enquiry buttons",
      "Mobile-friendly contact experience",
    ],
    cta: "Discuss WhatsApp Setup",
    wa: "Hello Modern Growth, I'd like to set up a WhatsApp enquiry system.",
  },
  {
    id: "lead-capture",
    num: "04",
    title: "Lead Capture System",
    short:
      "Capture potential customers through forms, enquiry buttons and structured customer information.",
    points: [
      "Enquiry forms",
      "Service selection",
      "Customer details",
      "WhatsApp handoff",
      "Lead organization",
      "Follow-up workflow possibilities",
    ],
    cta: "Discuss Lead Capture",
    wa: "Hello Modern Growth, I want a better lead capture system for my business.",
  },
  {
    id: "google-business",
    num: "05",
    title: "Google Business Profile Support",
    short:
      "Improve the quality and usability of your Google Business Profile presence.",
    points: [
      "Profile information review",
      "Business description improvements",
      "Photo & content organization",
      "Review-response assistance",
      "Website ↔ profile consistency",
      "Customer journey improvements",
    ],
    note:
      "We focus on profile quality and consistency. We do not promise Google ranking improvements.",
    cta: "Discuss Google Business",
    wa: "Hello Modern Growth, I need help with my Google Business Profile.",
  },
  {
    id: "automation",
    num: "06",
    title: "Business Automation",
    short:
      "Identify repetitive tasks that can potentially be automated using available tools.",
    points: [
      "Enquiry collection",
      "Notifications",
      "Customer follow-up",
      "FAQ handling",
      "Lead organization",
      "Internal workflows",
    ],
    note:
      "Automation possibilities depend on your business's tools and workflow — we identify what makes sense for you.",
    cta: "Discuss Automation",
    wa: "Hello Modern Growth, I'd like to automate repetitive tasks in my business.",
  },
];

/* ------------------------------------------------------------
   SOLUTION CARDS (home)
   ------------------------------------------------------------ */
export const solutions = [
  {
    title: "Better Websites",
    text: "High-quality responsive websites designed around the customer's journey.",
  },
  {
    title: "AI Customer Assistance",
    text: "AI-powered assistants that can answer common questions and guide visitors.",
  },
  {
    title: "Lead Capture",
    text: "Make it easier for visitors to enquire through forms, WhatsApp and other channels.",
  },
  {
    title: "Business Automation",
    text: "Reduce repetitive tasks and improve how enquiries and customer information are handled.",
  },
  {
    title: "Google Business Support",
    text: "Help businesses improve and manage their online business presence.",
  },
  {
    title: "Digital Improvements",
    text: "Continuous improvements to websites, customer experience and online systems.",
  },
];

/* ------------------------------------------------------------
   PROBLEMS (home)
   ------------------------------------------------------------ */
export const problems = [
  "Customers cannot quickly understand what the business offers.",
  "Websites look outdated or are difficult to use.",
  "Important information is difficult to find.",
  "Customers repeatedly ask the same questions.",
  "Enquiries are lost or answered too late.",
  "Businesses depend too heavily on manual communication.",
  "Google Business Profiles may not be fully utilized.",
  "There is no simple system for collecting enquiries.",
  "Customers visit online but do not take action.",
];

/* ------------------------------------------------------------
   INDUSTRIES
   ------------------------------------------------------------ */
export const industries = [
  {
    title: "Resorts & Homestays",
    text: "Website + enquiry system + WhatsApp + AI guest assistant + location/maps + gallery + booking information.",
  },
  {
    title: "Hotels & Lodges",
    text: "Room information + enquiries + amenities + location + FAQ + customer communication.",
  },
  {
    title: "Restaurants & Cafes",
    text: "Menu presentation + location + opening hours + WhatsApp/contact + offers and events where appropriate.",
  },
  {
    title: "Travel & Tourism",
    text: "Tour packages + destinations + enquiry forms + WhatsApp + AI FAQ + itinerary information.",
  },
  {
    title: "Local Businesses",
    text: "Services + location + contact + enquiry forms + customer FAQs.",
  },
  {
    title: "Professional Services",
    text: "Clear service information + enquiry capture + appointment/contact flow + FAQ.",
  },
];

/* ------------------------------------------------------------
   PROCESS
   ------------------------------------------------------------ */
export const processSteps = [
  {
    num: "01",
    title: "Discover",
    text: "We understand the business, customers and current problems.",
  },
  {
    num: "02",
    title: "Plan",
    text: "We identify the digital improvements that make sense for the business.",
  },
  {
    num: "03",
    title: "Build",
    text: "We create the website, AI features or digital system.",
  },
  {
    num: "04",
    title: "Improve",
    text: "We review the experience and make practical improvements over time.",
  },
];

/* ------------------------------------------------------------
   PRINCIPLES — Why Modern Growth
   ------------------------------------------------------------ */
export const principles = [
  {
    title: "Business First",
    text: "Technology should solve a real business problem.",
  },
  {
    title: "Simple",
    text: "Customers should not have to figure out how to use the website.",
  },
  {
    title: "Practical AI",
    text: "AI should be useful, accurate and connected to real business information.",
  },
  {
    title: "Mobile First",
    text: "Many customers discover local businesses from phones.",
  },
  {
    title: "Conversion Focused",
    text: "The website should guide visitors toward useful actions.",
  },
  {
    title: "Built To Improve",
    text: "A website should be treated as a business asset that can evolve.",
  },
];

/* ------------------------------------------------------------
   PACKAGES — prices intentionally not displayed publicly.
   Edit features freely; pricing is shared after a conversation.
   ------------------------------------------------------------ */
export const packages = [
  {
    name: "Starter",
    tagline: "For businesses that need a professional online presence.",
    features: [
      "Responsive website",
      "Core business information",
      "Services section",
      "Contact section",
      "WhatsApp integration",
      "Google Maps",
      "Basic enquiry flow",
    ],
    cta: "Discuss Starter",
    wa: "Hello Modern Growth, I'd like to discuss the Starter package.",
  },
  {
    name: "Growth",
    tagline: "For businesses that want a stronger digital presence.",
    features: [
      "Everything in Starter",
      "More advanced sections",
      "Lead capture",
      "FAQ system",
      "Improved conversion structure",
      "More integrations",
      "AI/customer assistance where suitable",
    ],
    cta: "Discuss Growth",
    wa: "Hello Modern Growth, I'd like to discuss the Growth package.",
    featured: true,
  },
  {
    name: "Advanced",
    tagline: "For businesses that need a more complete digital system.",
    features: [
      "Advanced website",
      "AI functionality",
      "Lead workflows",
      "Automation possibilities",
      "Advanced integrations",
      "Ongoing improvement options",
    ],
    cta: "Discuss Advanced",
    wa: "Hello Modern Growth, I'd like to discuss the Advanced package.",
  },
];

/* ------------------------------------------------------------
   FAQ
   ------------------------------------------------------------ */
export const faqs = [
  {
    q: "What does Modern Growth do?",
    a: "Modern Growth helps local and growing businesses improve their online presence, customer communication, lead capture and repetitive workflows using websites, AI and practical digital solutions.",
  },
  {
    q: "Who do you work with?",
    a: "Primarily small and medium-sized local businesses — resorts, homestays, hotels, lodges, restaurants, travel businesses, tour operators, local shops and professional service businesses — especially businesses that already have customers but a weak, outdated or missing online presence.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are one part. We also build AI assistants, WhatsApp enquiry systems, lead capture setups, Google Business Profile improvements and practical business automation.",
  },
  {
    q: "Do you build websites for existing businesses?",
    a: "Yes. Many of the businesses we work with already have customers — they simply need a better digital presence.",
  },
  {
    q: "Can you add AI to an existing website?",
    a: "Yes, where the existing website and required technology support it. We'll review your current setup and tell you honestly what's possible.",
  },
  {
    q: "Can AI answer customer questions?",
    a: "Yes — an AI assistant can answer frequently asked questions, explain services and guide visitors toward an enquiry. We configure it with your accurate business information so it doesn't invent policies or prices.",
  },
  {
    q: "Can you connect WhatsApp?",
    a: "Yes. We can add WhatsApp enquiry buttons, pre-filled messages and service-specific enquiry flows to your website.",
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. We can improve structure, design, mobile experience, enquiry flow and content clarity on existing websites.",
  },
  {
    q: "Can you help with Google Business Profile?",
    a: "Yes — we can review your profile information, improve descriptions, organize photos and content, and help keep your website and profile consistent. We don't promise ranking improvements.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the scope. A focused business website is typically quicker than a full digital system with AI and automation. We'll give you a realistic timeframe after understanding your requirements.",
  },
  {
    q: "How much does a website cost?",
    a: "Pricing varies with your requirements, and projects start from an affordable entry point. Tell us what you need and we'll give you a clear quote — no hidden costs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, ongoing support and improvement options are available. We'll agree on the level of support that suits your business before starting.",
  },
  {
    q: "Can you work with an existing domain?",
    a: "Yes. We can build your new website on your existing domain.",
  },
  {
    q: "Can you work with an existing website?",
    a: "Yes. We can improve your current website or rebuild parts of it, depending on what makes sense.",
  },
  {
    q: "What information do you need from a business?",
    a: "The basics: your services, location, contact details, photos or content you already have, and what you want to improve. We guide you through the rest.",
  },
];

/* ------------------------------------------------------------
   CONTACT FORM
   ------------------------------------------------------------ */
export const contactHelpOptions = [
  "New Website",
  "Existing Website Improvement",
  "AI Assistant",
  "WhatsApp System",
  "Lead Capture",
  "Automation",
  "Google Business Profile",
  "Not Sure Yet",
];

export const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];
