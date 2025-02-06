import { Course } from "../types";

export const otherCourses: Course[] = [
  {
    id: 7,
    title: "7. Compliance & Ethics",
    description: "Industry regulations and ethical selling practices",
    department: "sales",
    progress: 0,
    modules: [
      {
        title: "Industry Regulations",
        content: "Adhering to industry standards and regulations is essential for maintaining legal compliance and upholding ethical standards. For instance, the European Federation of Pharmaceutical Industries and Associations (EFPIA) emphasizes corporate social responsibility, urging pharmaceutical companies to act responsibly towards society and their communities.\n\nTheir code of practice covers various aspects of medicine promotion, including guidelines on events, hospitality, and the conduct of medical sales representatives. Similarly, the Pharmaceutical Research and Manufacturers of America (PhRMA) has established guidelines to govern interactions between drug representatives and healthcare providers, aiming to prevent conflicts of interest and promote ethical practices."
      },
      {
        title: "Ethical Guidelines",
        content: "Commitment to humane and eco-friendly solutions is increasingly becoming a focal point in ethical selling. Businesses are recognizing the importance of sustainable practices and the impact of their operations on the environment and society.\n\nMaintaining integrity in sales practices involves transparency, honesty, and a focus on building genuine relationships with customers. Research indicates that ethical sales practices can lead to:\n\n• Increased sales\n• Higher customer satisfaction and retention\n• More referrals\n• Improved well-being for sales professionals\n\nBy prioritizing ethical considerations, companies not only comply with regulations but also build a reputation that fosters customer loyalty and trust. Incorporating these principles into sales strategies ensures that businesses operate responsibly, benefiting both their bottom line and the broader community."
      }
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
