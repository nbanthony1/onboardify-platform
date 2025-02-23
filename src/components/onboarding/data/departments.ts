import { Department } from '../types/org-chart';

export const departments: Department[] = [
  {
    name: "Visionary",
    responsibilities: [
      "Big Ideas",
      "Big Relationships",
      "R&D",
      "Culture"
    ],
    roles: []
  },
  {
    name: "Integrator",
    responsibilities: [
      "LMA",
      "P&L",
      "Remove Obstacles",
      "Special Projects"
    ],
    roles: []
  },
  {
    name: "Marketing",
    responsibilities: [
      "Lead, Manage and hold people Accountable: Champions agile management practices within the marketing team, ensuring streamlined operations, accountability, and alignment with overall business objectives.",
      "Marketing Strategy: Crafts comprehensive marketing blueprints that integrate current market trends and brand goals to drive long-term growth and competitive positioning.",
      "Lead Generation: Utilizes multi-channel initiatives and innovative digital tactics to attract and nurture prospects, fueling a steady pipeline of qualified leads.",
      "Analytics & Reporting: Monitors and interprets key performance metrics to assess campaign effectiveness, optimize strategies, and provide actionable insights for continuous improvement.",
      "Market Research: Conducts in-depth research on market dynamics, consumer behaviors, and competitor activities to inform strategy and support data-driven decision-making."
    ],
    roles: [
      {
        title: "Lead Generation",
        responsibilities: [
          "Multi-Channel Lead Generation: Drives prospect engagement by leveraging various channels—digital, social, and traditional—to capture and nurture leads",
          "SEO: Enhances online visibility by optimizing website content and structure to rank higher in search engine results",
          "Email/CRM: Utilizes targeted email campaigns and customer relationship management tools to nurture leads and convert prospects",
          "Website: Serves as the digital storefront, providing an engaging and informative experience that encourages visitor conversion"
        ]
      },
      {
        title: "Brand Awareness",
        responsibilities: [
          "PR: Builds and maintains a positive public image through strategic media outreach and communications",
          "Testimonials: Leverages customer success stories to build trust and validate the brand's value proposition",
          "Events: Creates opportunities for direct engagement with audiences through conferences, webinars, and networking events"
        ]
      },
      {
        title: "Sales Support",
        responsibilities: [
          "Market Collateral: Develops branded materials that clearly communicate product benefits and value propositions to support the sales process",
          "Presentations: Crafts compelling visual and verbal presentations to effectively convey key messages during sales meetings",
          "Letters of Intent: Prepares preliminary agreements outlining mutual interest and key terms, paving the way for formal contracts",
          "CRM: Centralizes customer data to streamline sales activities and maintain consistent communication with prospects",
          "Commercial Work: Develops tailored commercial strategies and materials to target specific market segments and drive sales",
          "Newsletter: Delivers regular updates and insights to keep prospects and clients informed and engaged with the brand"
        ]
      }
    ],
  },
  {
    name: "Sales",
    responsibilities: [
      "Leadership, Management, and Accountability: Providing strategic direction, setting clear goals, and ensuring alignment with company objectives",
      "Developing and executing a structured approach to identifying, engaging, and converting prospects",
      "Meeting and exceeding revenue, conversion, and performance goals through effective execution"
    ],
    roles: [
      {
        title: "Account Acquisition",
        responsibilities: [
          "Identifying Opportunities – Researching market trends and targeting potential clients that align with Symterra's value proposition",
          "Acquiring Accounts – Implementing effective outreach strategies to convert leads into customers",
          "Closing Deals – Negotiating contracts and finalizing agreements to secure long-term client relationships"
        ]
      },
      {
        title: "Account Management",
        responsibilities: [
          "Grow Revenue – Expanding business with existing clients through upselling and cross-selling opportunities",
          "Client Adoption – Ensuring customers integrate and utilize Symterra's solutions effectively",
          "Relationship Management – Building and maintaining strong partnerships with PCOs, commercial enterprises, and municipalities to ensure long-term adoption and success"
        ]
      }
    ]
  },
  {
    name: "Operations",
    responsibilities: [
      "Lead, Manage and hold people Accountable: Champions lean management practices and oversees daily administrative operations, ensuring teams remain accountable while continuously driving process improvements.",
      "Manufacturing Process: Designs and manages production workflows to optimize efficiency and consistency, ensuring manufacturing operations meet quality and throughput targets.",
      "QC: Implements systematic quality checks and inspection protocols throughout production, ensuring every product meets rigorous internal and industry standards.",
      "Logistics: Coordinates the seamless flow of goods and materials—from inbound supplies to final delivery—reducing delays and minimizing operational costs.",
      "Tech Support: Provides prompt technical assistance to maintain critical systems and troubleshoot issues, ensuring continuous operation and minimal downtime.",
      "Asset Management: Oversees the lifecycle of physical and digital assets, ensuring they are optimally maintained, effectively allocated, and leveraged for operational success."
    ],
    roles: [
      {
        title: "Logistics",
        responsibilities: [
          "Shipping & Receiving: Oversees the efficient movement of goods, ensuring timely dispatch and receipt to meet operational demands",
          "Inventory Control: Manages stock levels and tracks inventory to optimize supply chain efficiency and reduce costs",
          "Customs Broker: Navigates international trade regulations and customs processes to ensure smooth global shipments"
        ]
      },
      {
        title: "Manufacturing",
        responsibilities: [
          "Quality Control: Implements rigorous testing and inspection processes to ensure products meet established standards",
          "Inventory Control: Oversees raw materials and finished goods to support production needs while minimizing waste",
          "Production: Manages the end-to-end manufacturing process to produce high-quality products efficiently",
          "Sourcing: Identifies and collaborates with suppliers to secure quality materials at competitive prices"
        ]
      },
      {
        title: "Customer Service",
        responsibilities: [
          "Training: Delivers comprehensive training programs to empower customers with the knowledge to use products effectively",
          "Troubleshooting: Provides responsive support to quickly resolve technical issues and customer challenges",
          "Onboarding: Guides new customers through a seamless integration process, ensuring a positive initial experience"
        ]
      }
    ]
  },
  {
    name: "R&D",
    responsibilities: [
      "Lead, Manage and Hold People Accountable: Oversees the R&D team by setting clear objectives, monitoring progress, and ensuring accountability to meet innovation goals",
      "Product Development: Drives the creation and refinement of innovative products, transforming ideas into market-ready solutions",
      "Regulatory: Ensures all R&D initiatives adhere to relevant industry regulations and standards, facilitating smooth market entry",
      "Compliance: Maintains strict adherence to internal policies and external guidelines, fostering a culture of ethical research and development"
    ],
    roles: []
  },
  {
    name: "Finance",
    responsibilities: [
      "Lead, Manage and Hold People Accountable: Directs the finance team by establishing performance benchmarks, promoting accountability, and aligning efforts with strategic financial goals",
      "Budget/Forecast: Crafts comprehensive budgets and financial forecasts to guide strategic planning and resource allocation",
      "Risk Management: Identifies and mitigates financial risks, ensuring the organization's assets and investments are safeguarded",
      "Accounting: Manages the accurate recording and processing of financial transactions in compliance with established accounting standards",
      "Reporting: Delivers timely, transparent financial reports to stakeholders, providing critical insights into the company's performance",
      "Legal: Oversees legal matters, ensuring contracts and financial activities comply with relevant laws and regulations",
      "HR: Supports the financial function by managing human resources, from talent acquisition to staff development, to maintain a productive and compliant team"
    ],
    roles: []
  }
];
