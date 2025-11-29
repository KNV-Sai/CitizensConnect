// Comprehensive Updates Data for CitizensConnect
// Contains latest information for different update categories

export const updatesCategories = {
  government_initiatives: {
    title: "Government Initiatives",
    icon: "🏛️",
    color: "#6a47f2",
    description: "Track progress on government projects and civic initiatives in your area",
    updates: [
      {
        id: "smart_city_vijayawada",
        title: "Smart City Vijayawada - Phase 2 Launch",
        date: "2024-11-28",
        priority: "high",
        location: "Vijayawada, Andhra Pradesh",
        summary: "The Andhra Pradesh government has launched Phase 2 of the Smart City Vijayawada project, focusing on digital infrastructure and citizen services.",
        details: "Phase 2 includes implementation of smart traffic management systems, IoT-enabled waste management, digital payment gateways for municipal services, and AI-powered citizen service centers. The project aims to improve quality of life for 1.2 million residents with an investment of ₹1,200 crores.",
        status: "In Progress",
        timeline: "Expected completion: March 2025",
        contact: "Smart City Vijayawada Office: +91-866-1234567",
        source: "Andhra Pradesh Government",
        url: "https://ap.gov.in/smart-city-vijayawada"
      },
      {
        id: "digital_literacy_program",
        title: "National Digital Literacy Mission",
        date: "2024-11-25",
        priority: "medium",
        location: "All India",
        summary: "Ministry of Education launches nationwide digital literacy program targeting 10 million rural citizens.",
        details: "The program aims to provide free digital skills training to citizens above 50 years and rural youth. Training modules include smartphone usage, online banking, government service portals, and cyber safety. The initiative is part of the broader Digital India mission.",
        status: "Active",
        timeline: "Phase 1: December 2024 - June 2025",
        contact: "Digital Literacy Helpline: 1800-XXX-XXXX",
        source: "Ministry of Education",
        url: "https://digitalindia.gov.in/literacy-mission"
      },
      {
        id: "rural_electricity",
        title: "24/7 Power Supply to Rural Areas",
        date: "2024-11-20",
        priority: "high",
        location: "Rural Andhra Pradesh",
        summary: "Government achieves 100% electrification in remaining rural pockets of Andhra Pradesh.",
        details: "The last-mile connectivity project has brought reliable power supply to 5,000 previously unelectrified villages. The initiative includes solar-powered mini-grids for remote areas and smart metering for efficient power distribution.",
        status: "Completed",
        timeline: "Completed: November 2024",
        contact: "APEPDCL Rural Division: +91-866-XXXXXXX",
        source: "Andhra Pradesh Energy Department",
        url: "https://apedpcl.gov.in/rural-electricity"
      },
      {
        id: "swachh_bharat_2",
        title: "Swachh Bharat Mission 2.0",
        date: "2024-11-15",
        priority: "medium",
        location: "All India",
        summary: "Union Government extends Swachh Bharat Mission with focus on sustainability and waste management.",
        details: "Phase 2 emphasizes solid waste management, plastic waste reduction, and sustainable sanitation practices. The mission includes construction of 10 lakh household toilets, 5 lakh community toilets, and establishment of 1,500 waste processing facilities across India.",
        status: "Active",
        timeline: "2024-2029",
        contact: "Swachh Bharat Mission: +91-11-XXXXXXXX",
        source: "Ministry of Jal Shakti",
        url: "https://swachhbharatmission.gov.in"
      }
    ]
  },
  issue_resolutions: {
    title: "Issue Resolutions",
    icon: "✅",
    color: "#10b981",
    description: "Get notified when your reported issues are resolved by authorities",
    updates: [
      {
        id: "pothole_mg_road_resolved",
        title: "MG Road Potholes Repaired",
        date: "2024-11-29",
        priority: "high",
        location: "MG Road, Vijayawada",
        summary: "Potholes reported by citizens on MG Road have been completely repaired.",
        details: "Following multiple citizen reports through CitizensConnect, the Vijayawada Municipal Corporation deployed repair crews within 48 hours. The work involved resurfacing 2.5 km of road stretch and implementing permanent asphalt solutions. Traffic flow has improved by 40% in the area.",
        status: "Resolved",
        timeline: "Reported: Nov 20 → Resolved: Nov 29",
        contact: "VMC Engineering Division: +91-866-XXXXXXX",
        source: "Vijayawada Municipal Corporation",
        resolution: "Complete repair and resurfacing",
        citizen_impact: "Improved road safety and reduced vehicle damage"
      },
      {
        id: "street_light_park_street_fixed",
        title: "Park Street Lighting Restored",
        date: "2024-11-28",
        priority: "medium",
        location: "Park Street, Vijayawada",
        summary: "Non-functional street lights replaced and electrical system upgraded.",
        details: "The street lighting issue reported through CitizensConnect has been resolved. Faulty LED lights were replaced with energy-efficient solar-powered alternatives. The entire electrical network was upgraded to prevent future failures. Safety has improved significantly in the residential area.",
        status: "Resolved",
        timeline: "Reported: Nov 15 → Resolved: Nov 28",
        contact: "APEPDCL Street Lighting: +91-866-XXXXXXX",
        source: "Andhra Pradesh State Electricity Board",
        resolution: "Complete replacement with solar LED lights",
        citizen_impact: "Enhanced night-time safety and reduced energy costs"
      },
      {
        id: "garbage_sector7_resolved",
        title: "Sector 7 Waste Collection Regularized",
        date: "2024-11-26",
        priority: "high",
        location: "Sector 7, Vijayawada",
        summary: "Municipal corporation has regularized waste collection services in Sector 7.",
        details: "Following citizen complaints about irregular waste collection, the municipal corporation has deployed additional collection vehicles and increased frequency to daily pickups. Smart bins with fill-level sensors have been installed to optimize collection routes and reduce overflow incidents.",
        status: "Resolved",
        timeline: "Reported: Nov 10 → Resolved: Nov 26",
        contact: "VMC Sanitation Department: +91-866-XXXXXXX",
        source: "Vijayawada Municipal Corporation",
        resolution: "Daily collection schedule implemented with smart monitoring",
        citizen_impact: "Cleaner environment and improved public health"
      },
      {
        id: "water_supply_benz_circle",
        title: "Water Supply Issue at Benz Circle",
        date: "2024-11-25",
        priority: "urgent",
        location: "Benz Circle, Vijayawada",
        summary: "Low pressure water supply issue has been addressed with pipeline repairs.",
        details: "The water supply problem reported by multiple citizens has been resolved through emergency pipeline repairs. The issue was caused by a damaged main pipeline that was replaced during overnight maintenance. Water pressure has been restored to normal levels across the affected area.",
        status: "Resolved",
        timeline: "Reported: Nov 22 → Resolved: Nov 25",
        contact: "VWWS Water Supply: +91-866-XXXXXXX",
        source: "Vijayawada Water Works & Sewerage",
        resolution: "Pipeline repair and pressure restoration",
        citizen_impact: "Normal water supply restored to 500+ households"
      }
    ]
  },
  community_events: {
    title: "Community Events",
    icon: "🎉",
    color: "#f59e0b",
    description: "Stay updated on local events, meetings, and community gatherings",
    updates: [
      {
        id: "citizen_awareness_workshop",
        title: "Digital Literacy Workshop for Seniors",
        date: "2024-12-01",
        priority: "medium",
        location: "Community Hall, Vijayawada",
        summary: "Free digital literacy workshop for senior citizens aged 60+.",
        details: "The Vijayawada Municipal Corporation is organizing a comprehensive digital literacy program for senior citizens. The workshop will cover smartphone usage, online banking, government app navigation, and cyber safety awareness. Refreshments and study materials will be provided free of cost.",
        status: "Upcoming",
        timeline: "Date: December 1, 2024 | Time: 10:00 AM - 4:00 PM",
        contact: "VMC Community Services: +91-866-XXXXXXX",
        source: "Vijayawada Municipal Corporation",
        registration: "Walk-in registration available",
        capacity: "100 participants",
        highlights: ["Free training", "Certified completion", "Follow-up support"]
      },
      {
        id: "environmental_awareness",
        title: "World Environment Day Celebration",
        date: "2024-11-30",
        priority: "medium",
        location: "Indira Gandhi Municipal Stadium, Vijayawada",
        summary: "Massive tree plantation drive and environmental awareness program.",
        details: "Celebrate World Environment Day with a community tree plantation drive. The event includes environmental awareness sessions, eco-friendly competitions, and distribution of 1,000 saplings to participating families. Local environmentalists and government officials will participate.",
        status: "Upcoming",
        timeline: "Date: November 30, 2024 | Time: 8:00 AM - 12:00 PM",
        contact: "Environment Department: +91-866-XXXXXXX",
        source: "Andhra Pradesh Environment Department",
        activities: ["Tree plantation", "Awareness sessions", "Eco-competitions"],
        expected_participants: "2,000+ citizens"
      },
      {
        id: "health_camp_rural",
        title: "Free Health Camp in Rural Areas",
        date: "2024-12-02",
        priority: "high",
        location: "Primary Health Center, Ibrahimpatnam",
        summary: "Comprehensive health checkup camp for rural communities.",
        details: "The Andhra Pradesh Health Department is organizing a mega health camp in rural areas. Services include general health checkups, blood pressure monitoring, diabetes screening, dental care, and eye testing. Specialist doctors from various fields will be available. Free medicines will be distributed.",
        status: "Upcoming",
        timeline: "Date: December 2, 2024 | Time: 9:00 AM - 5:00 PM",
        contact: "Health Department: +91-866-XXXXXXX",
        source: "Andhra Pradesh Health Department",
        services: ["General checkup", "Blood tests", "Dental care", "Eye testing", "Free medicines"],
        target_audience: "Rural communities within 50km radius"
      },
      {
        id: "citizen_police_meet",
        title: "Citizens-Police Interface Meeting",
        date: "2024-12-05",
        priority: "medium",
        location: "Police Headquarters, Vijayawada",
        summary: "Monthly citizens-police interaction to discuss community safety and concerns.",
        details: "The Vijayawada Police Department organizes monthly interface meetings with citizens to discuss safety concerns, crime prevention, and community policing initiatives. Local residents can voice their concerns directly to police officials and get updates on ongoing safety measures.",
        status: "Upcoming",
        timeline: "Date: December 5, 2024 | Time: 6:00 PM - 8:00 PM",
        contact: "Police Control Room: 100",
        source: "Vijayawada Police Department",
        agenda: ["Crime statistics review", "Safety measures update", "Citizen concerns discussion"],
        registration_required: true
      }
    ]
  },
  website_updates: {
    title: "Website Updates",
    icon: "🚀",
    color: "#dc2626",
    description: "Stay informed about new features, improvements, and platform enhancements",
    updates: [
      {
        id: "online_issues_feature",
        title: "Online Issues Collection System",
        date: "2024-11-29",
        priority: "high",
        location: "CitizensConnect Platform",
        summary: "New feature added to collect and display issues from online news sources and government updates.",
        details: "CitizensConnect now automatically collects civic issues from news APIs, government RSS feeds, and social media reports. The system categorizes issues by priority and location, providing citizens with comprehensive information about ongoing civic matters. Issues are updated daily and include resolution tracking.",
        status: "Live",
        timeline: "Launched: November 29, 2024",
        contact: "Support Team: support@citizensconnect.in",
        source: "CitizensConnect Development Team",
        features: ["Daily updates", "Priority categorization", "Source attribution", "Resolution tracking"],
        impact: "Enhanced transparency and citizen awareness"
      },
      {
        id: "indian_political_info",
        title: "Comprehensive Indian Political Information",
        date: "2024-11-29",
        priority: "high",
        location: "CitizensConnect Platform",
        summary: "Complete political representatives database for all Indian states and union territories.",
        details: "The Representatives section now includes comprehensive information about all Indian political leaders, from national figures to state governments. Features include searchable state information, ruling and opposition parties, political alliances, and direct links to official profiles.",
        status: "Live",
        timeline: "Launched: November 29, 2024",
        contact: "Support Team: support@citizensconnect.in",
        source: "CitizensConnect Development Team",
        coverage: ["28 States", "8 Union Territories", "6 Major Parties", "National Leaders"],
        features: ["Advanced search", "Alliance filtering", "Real-time updates"]
      },
      {
        id: "mobile_optimization",
        title: "Mobile App Optimization",
        date: "2024-11-25",
        priority: "medium",
        location: "CitizensConnect Platform",
        summary: "Enhanced mobile experience with improved responsiveness and touch controls.",
        details: "The CitizensConnect platform has been fully optimized for mobile devices. Improvements include faster loading times, improved touch interactions, offline capability for issue reporting, and enhanced accessibility features for users with disabilities.",
        status: "Live",
        timeline: "Released: November 25, 2024",
        contact: "Mobile Support: mobile@citizensconnect.in",
        source: "CitizensConnect Development Team",
        improvements: ["50% faster loading", "Offline reporting", "Voice-to-text", "Screen reader support"],
        compatibility: "Android 8.0+, iOS 12.0+"
      },
      {
        id: "notification_system",
        title: "Smart Notification System",
        date: "2024-11-20",
        priority: "medium",
        location: "CitizensConnect Platform",
        summary: "Intelligent notification system for personalized updates and alerts.",
        details: "Users can now receive personalized notifications about issues in their locality, government initiatives in their area, and updates on their reported issues. The system uses location-based intelligence and user preferences to deliver relevant information.",
        status: "Live",
        timeline: "Released: November 20, 2024",
        contact: "Notifications: alerts@citizensconnect.in",
        source: "CitizensConnect Development Team",
        features: ["Location-based alerts", "Issue status updates", "Emergency notifications", "Customizable preferences"],
        privacy: "GDPR compliant with user consent"
      }
    ]
  }
};

// Helper functions
export const getUpdatesByCategory = (categoryKey) => {
  return updatesCategories[categoryKey]?.updates || [];
};

export const getRecentUpdates = (limit = 10) => {
  const allUpdates = Object.values(updatesCategories).flatMap(cat =>
    cat.updates.map(update => ({ ...update, category: cat.title, categoryKey: Object.keys(updatesCategories).find(key => updatesCategories[key] === cat) }))
  );

  return allUpdates
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getUpdatesByPriority = (priority) => {
  const allUpdates = Object.values(updatesCategories).flatMap(cat => cat.updates);
  return allUpdates.filter(update => update.priority === priority);
};

export const getUpdatesByLocation = (location) => {
  const allUpdates = Object.values(updatesCategories).flatMap(cat => cat.updates);
  return allUpdates.filter(update =>
    update.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getCategoryStats = () => {
  return Object.entries(updatesCategories).map(([key, category]) => ({
    key,
    title: category.title,
    icon: category.icon,
    color: category.color,
    updateCount: category.updates.length,
    recentUpdate: category.updates[0]?.date || null
  }));
};
