export const departments = [
  { id: "sales", name: "Sales" },
  { id: "operations", name: "Operations" },
  { id: "hr", name: "Human Resources" },
];

export const courses = [
  {
    id: 1,
    title: "1. Introduction to Symterra",
    description: "Company overview, history, mission, and organizational structure",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Company Overview",
        content: "Symterra is a leader in electromagnetic bird deterrent technology, dedicated to fostering coexistence between humans and wildlife. The company's innovative solutions provide humane approaches to bird deterrence, ensuring businesses can address issues like hygiene, safety, and property damage without resorting to harmful measures."
      },
      {
        title: "History and Evolution",
        content: "Originally known as FlockOff, the company rebranded to Symterra in June 2024 to better reflect its mission and values. The name \"Symterra\" is derived from \"Symbiotic\" and \"Terra\" (Earth), signifying the company's commitment to fostering harmony between human activities and the natural world."
      },
      {
        title: "Mission and Vision",
        content: "Symterra's mission is to foster coexistence between humans and wildlife through innovative and ethical bird deterrent solutions. The company envisions a future where human advancements harmonize with nature, ensuring businesses can operate effectively while safeguarding avian populations."
      },
      {
        title: "Organizational Structure",
        content: "Symterra operates with a streamlined organizational structure designed to promote efficiency and innovation. The company is led by a Chief Executive Officer, supported by key departments including R&D, Sales and Marketing, Operations, and Customer Support.",
      },
      {
        title: "Leadership Team",
        content: "Led by CEO John Smalley, who emphasizes the importance of humane approaches to bird deterrence and is committed to sustainable progress through innovative technologies."
      }
    ]
  },
  {
    id: 2,
    title: "2. Product Portfolio",
    description: "Deep dive into Symterra Pulse and other product offerings",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Technology Overview",
        content: "Symterra Pulse is a state-of-the-art bird deterrent system that leverages advanced electromagnetic technology to safely and effectively deter birds from critical infrastructure, agricultural fields, and commercial facilities. Unlike traditional deterrents such as spikes, nets, or sound-based repellents, Symterra Pulse offers a non-invasive and humane solution that does not harm birds or disrupt the surrounding environment.\n\nUnique Selling Points:\n• Electromagnetic deterrence: Utilizes a scientifically-backed approach\n• Non-harmful technology: Safe for birds, humans, and wildlife\n• Low maintenance: Minimal upkeep and long-term durability\n• Customizable coverage: Scalable to various environments\n• Eco-friendly and silent operation"
      },
      {
        title: "Benefits of Electromagnetic Deterrence",
        content: "Electromagnetic bird deterrence represents a breakthrough in wildlife management by leveraging the natural avian response to electromagnetic fields.\n\nKey Benefits:\n• Effective Behavior Modification: Birds learn to avoid protected areas\n• Minimal Environmental Impact: No toxins introduced into ecosystems\n• Cost-Effective Solution: Reduces long-term operational costs\n• Versatile Application: Suitable for various settings"
      },
      {
        title: "Product Features and Specifications",
        content: "Symterra Pulse is engineered to meet the highest industry standards.\n\nProduct Components:\n• Control Unit: Centralized system for electromagnetic emissions\n• Emitter Modules: Strategic units generating deterrent fields\n• Solar or AC-Powered Options: Flexible power sources\n• Remote Monitoring: Cloud-based dashboard\n\nCertifications:\n• FCC & CE Certified\n• Environmental Compliance\n• OSHA Approved"
      },
      {
        title: "University of Arizona Study",
        content: "A comprehensive study by the University of Arizona evaluated Symterra Pulse's effectiveness in agricultural zones and industrial sites.\n\nKey Findings:\n• 85% Reduction in Bird Presence\n• Sustained Effectiveness\n• No Adverse Effects on Other Wildlife"
      },
      {
        title: "Success Stories",
        content: "Real-World Applications:\n\n1. Agricultural Protection:\nA California vineyard reported 90% reduction in grape damage within first harvest season.\n\n2. Industrial Facility Safety:\nA power plant eliminated bird-related maintenance shutdowns.\n\n3. Airport Runway Safety:\nAn international airport significantly reduced bird strike incidents."
      }
    ]
  },
  {
    id: 3,
    title: "3. Market Segmentation",
    description: "Understanding target industries and customer profiles",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Industry Applications",
        content: "Symterra's solutions serve diverse industries addressing critical infrastructure needs:\n\n" +
          "1. Institutional and Government Facilities\n" +
          "• Applications: Security infrastructure, emergency response systems\n" +
          "• Key Challenges: Aging infrastructure, compliance requirements\n" +
          "• Solutions: Predictive maintenance, sustainable energy solutions\n\n" +
          "2. Utility, Signal, and Power Transmission Towers\n" +
          "• Applications: Power grid reliability, telecommunications infrastructure\n" +
          "• Key Challenges: Grid stability, high maintenance costs\n" +
          "• Solutions: Smart grid integration, remote asset monitoring\n\n" +
          "3. Commercial and Retail Facilities\n" +
          "• Applications: Facility management, security, energy efficiency\n" +
          "• Key Challenges: High energy costs, security risks\n" +
          "• Solutions: Smart building automation, security infrastructure\n\n" +
          "4. Agribusiness\n" +
          "• Applications: Precision agriculture, irrigation management\n" +
          "• Key Challenges: Water scarcity, fluctuating costs\n" +
          "• Solutions: IoT-enabled farming, automated irrigation controls\n\n" +
          "5. Sports Venues and Stadiums\n" +
          "• Applications: Crowd control, security, facility maintenance\n" +
          "• Key Challenges: High foot traffic, emergency preparedness\n" +
          "• Solutions: Smart security, real-time facility monitoring\n\n" +
          "6. Industrial and Warehouse Facilities\n" +
          "• Applications: Equipment monitoring, logistics optimization\n" +
          "• Key Challenges: Asset downtime, worker safety\n" +
          "• Solutions: Predictive maintenance, real-time tracking"
      },
      {
        title: "Customer Avatars",
        content: "Key decision-makers and their specific needs:\n\n" +
          "1. Facility Operations Manager (Institutional & Government)\n" +
          "• Pain Points: Managing aging infrastructure, balancing budgets\n" +
          "• Solution: Predictive maintenance and compliance tools\n\n" +
          "2. Utility Infrastructure Director\n" +
          "• Pain Points: Unplanned outages, high maintenance costs\n" +
          "• Solution: Real-time monitoring and predictive maintenance\n\n" +
          "3. Retail Property Manager\n" +
          "• Pain Points: High operational costs, security threats\n" +
          "• Solution: Smart automation systems for energy and security\n\n" +
          "4. Agricultural Operations Director\n" +
          "• Pain Points: Unpredictable weather, labor shortages\n" +
          "• Solution: IoT-driven precision agriculture solutions\n\n" +
          "5. Venue Security Coordinator\n" +
          "• Pain Points: Managing crowds, security threats\n" +
          "• Solution: Integrated security and maintenance scheduling\n\n" +
          "6. Warehouse Logistics Manager\n" +
          "• Pain Points: Equipment failure, inefficient tracking\n" +
          "• Solution: Predictive maintenance and real-time logistics"
      }
    ]
  },
  {
    id: 4,
    title: "4. Sales Process",
    description: "Complete sales cycle from lead generation to customer retention",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Lead Generation and Qualification",
        content: "Identifying Potential Clients and Assessing Needs\n\n" +
          "Customer Research\n" +
          "Begin by defining your ideal customer profile through detailed research. This involves understanding demographic traits like industry and business size, as well as psychological aspects such as the motivations and challenges of target decision-makers.\n\n" +
          "Prospecting\n" +
          "• Utilize various channels to identify potential clients\n" +
          "• Leverage social media platforms\n" +
          "• Attend industry events\n" +
          "• Employ data analytics to discover prospects\n\n" +
          "Qualification and Discovery\n" +
          "Engage with identified prospects to assess their needs and determine if they align with your offerings. This stage involves asking probing questions to understand their pain points and readiness to purchase."
      },
      {
        title: "Sales Presentation and Demonstration",
        content: "Effective Communication of Product Benefits\n\n" +
          "Tailoring Presentations to Specific Industries\n\n" +
          "Customize your sales presentations to address the unique challenges and needs of each industry you target. This demonstrates an understanding of the prospect's business environment and positions your product as a tailored solution.\n\n" +
          "Utilizing Technology\n\n" +
          "Incorporate multimedia elements and live demonstrations to showcase your product's capabilities effectively. This can enhance understanding and engagement during the presentation."
      },
      {
        title: "Proposal Development and Pricing",
        content: "Crafting Compelling Proposals\n\n" +
          "Understanding Pricing Strategies\n" +
          "• Develop value-based pricing strategies\n" +
          "• Consider tiered pricing models\n" +
          "• Evaluate bundling options\n" +
          "• Assess subscription-based pricing\n\n" +
          "Proposal Development\n" +
          "Create proposals that clearly outline:\n" +
          "• Product benefits and features\n" +
          "• Implementation process\n" +
          "• Return on investment calculations\n" +
          "• Timeline and milestones\n" +
          "• Pricing and payment terms"
      },
      {
        title: "Closing and Onboarding",
        content: "Negotiation Techniques\n\n" +
          "Effective Negotiation\n" +
          "• Aim for win-win outcomes\n" +
          "• Understand client constraints\n" +
          "• Prepare for common objections\n" +
          "• Know your bottom line\n\n" +
          "Client Onboarding Procedures\n" +
          "• Set clear expectations\n" +
          "• Provide comprehensive training\n" +
          "• Maintain open communication\n" +
          "• Address initial concerns promptly\n" +
          "• Document key processes and contacts"
      },
      {
        title: "Post-Sale Support and Retention",
        content: "Ensuring Customer Satisfaction\n\n" +
          "Continuous Engagement\n" +
          "• Schedule regular follow-up meetings\n" +
          "• Conduct satisfaction surveys\n" +
          "• Provide product updates and news\n" +
          "• Monitor usage and adoption\n\n" +
          "Long-Term Relationship Building\n" +
          "• Implement loyalty programs\n" +
          "• Identify upsell opportunities\n" +
          "• Establish feedback mechanisms\n" +
          "• Act on customer suggestions\n" +
          "• Recognize and reward loyalty"
      }
    ]
  },
  {
    id: 5,
    title: "5. Internal Communication",
    description: "Collaboration with marketing, operations, and support teams",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Collaboration with Marketing",
        content: "Aligning Sales Strategies with Marketing Campaigns\n\n" +
          "Companies with strong sales and marketing alignment achieve significantly higher revenue growth than those with poor collaboration. Successful alignment ensures that sales teams are working with high-quality leads and that marketing efforts directly support sales objectives.\n\n" +
          "Best Practices:\n" +
          "• Schedule bi-weekly strategy meetings between sales and marketing to align on messaging, campaign objectives, and lead qualification\n" +
          "• Define and track shared performance metrics such as lead-to-customer conversion rates, deal velocity, and marketing-influenced revenue\n" +
          "• Provide sales reps with real-time insights into which marketing campaigns are generating the most engagement and high-quality leads\n\n" +
          "Utilizing Marketing Materials and Resources\n\n" +
          "Sales reps need easy access to relevant marketing content to educate prospects and close deals effectively.\n\n" +
          "Best Practices:\n" +
          "• Establish a centralized content library with case studies, product one-pagers, and whitepapers\n" +
          "• Conduct training sessions on how to personalize and present marketing materials effectively\n" +
          "• Use customer engagement data from marketing campaigns to tailor sales outreach and messaging"
      },
      {
        title: "Coordination with Operations",
        content: "Understanding Product Installation and Delivery Timelines\n\n" +
          "Many sales deals fall through due to misalignment between customer expectations and actual delivery or installation timelines. Clear communication between sales and operations ensures realistic commitments and prevents delays.\n\n" +
          "Best Practices:\n" +
          "• Implement structured checkpoints where sales teams verify delivery feasibility with operations before finalizing deals\n" +
          "• Provide sales reps with access to real-time product availability and installation scheduling tools\n" +
          "• Define clear service level agreements (SLAs) between sales and operations\n\n" +
          "Communicating Client Requirements\n\n" +
          "Best Practices:\n" +
          "• Document all client-specific requirements in the CRM\n" +
          "• Conduct internal handoff meetings for large or complex deals\n" +
          "• Use structured intake forms to capture key technical and logistical details"
      },
      {
        title: "Engagement with Customer Support",
        content: "Process for Escalating Customer Issues\n\n" +
          "Poor issue escalation processes lead to customer frustration and increased churn. Clearly defining escalation pathways allows sales teams to support customers effectively while maintaining trust.\n\n" +
          "Best Practices:\n" +
          "• Develop a structured escalation framework\n" +
          "• Set internal SLAs for issue resolution timeframes\n" +
          "• Create a direct communication channel for urgent concerns\n\n" +
          "Feedback Loops for Improvement\n\n" +
          "Best Practices:\n" +
          "• Hold monthly meetings between sales, support, and product teams\n" +
          "• Analyze customer support tickets to uncover patterns\n" +
          "• Integrate NPS and CSAT data to track performance"
      }
    ]
  },
  {
    id: 6,
    title: "6. Sales Tools",
    description: "CRM systems, sales collateral, and competitive analysis",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "CRM Training",
        content: "Training on the Company's CRM Platform\n\n" +
          "Standardized Data Entry Protocols\n" +
          "• Develop clear SOPs for data entry to ensure consistency\n" +
          "• Standardize formats for key data fields (names, addresses, etc.)\n" +
          "• Schedule regular audits to identify and correct errors\n" +
          "• Encourage real-time logging of customer interactions\n\n" +
          "Best Practices for Data Entry and Management\n\n" +
          "Automation and Training:\n" +
          "• Implement automation tools to reduce human error\n" +
          "• Integrate CRM with other business systems\n" +
          "• Provide ongoing training on best practices\n" +
          "• Maintain data quality through regular reviews"
      },
      {
        title: "Sales Materials",
        content: "Overview of Brochures, Case Studies, and Presentations\n\n" +
          "Comprehensive Library Management:\n" +
          "• Maintain up-to-date repository of all sales materials\n" +
          "• Ensure easy accessibility for the sales team\n" +
          "• Regular review and updates of materials\n" +
          "• Include latest product features and market trends\n\n" +
          "Guidelines for Customization:\n" +
          "• Tailor materials to client-specific needs\n" +
          "• Address unique pain points per industry\n" +
          "• Highlight relevant case studies\n" +
          "• Maintain brand consistency in customization"
      },
      {
        title: "Competition Overview",
        content: "Understanding the Bird Deterrent Market\n\n" +
          "Market Research and Trends:\n" +
          "• Global market projected to reach $448.3M by 2031\n" +
          "• 3.9% CAGR from 2022 to 2031\n" +
          "• Key competitors: Bird-X, Bird B Gone, Bird Barrier America\n" +
          "• Growing awareness in agriculture, aviation, construction\n\n" +
          "Symterra's Competitive Advantages:\n\n" +
          "1. Innovative Technology\n" +
          "• Advanced and humane solutions\n" +
          "• Environmentally friendly approach\n" +
          "• Cutting-edge electromagnetic technology\n\n" +
          "2. Proven Effectiveness\n" +
          "• Documented case studies\n" +
          "• Customer testimonials\n" +
          "• Measurable results\n\n" +
          "3. Comprehensive Support\n" +
          "• Site assessments\n" +
          "• Customized control plans\n" +
          "• Ongoing monitoring and maintenance"
      }
    ]
  },
  {
    id: 7,
    title: "7. Compliance & Ethics",
    description: "Industry regulations and ethical selling practices",
    department: "sales",
    progress: 0,
    modules: [
      "Industry Regulations",
      "Ethical Guidelines"
    ]
  },
  {
    id: 8,
    title: "8. Performance Metrics",
    description: "Sales targets, KPIs, and professional development",
    department: "sales",
    progress: 0,
    modules: [
      "Sales Targets",
      "Development Plans"
    ]
  },
  {
    id: 9,
    title: "Operations Handbook",
    description: "Standard operating procedures and best practices",
    department: "operations",
    progress: 0,
  },
  {
    id: 10,
    title: "HR Policies",
    description: "Essential company policies and guidelines",
    department: "hr",
    progress: 0,
  },
];
