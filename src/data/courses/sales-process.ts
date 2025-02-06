
import { Course } from "../types";

export const salesProcessCourse: Course = {
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
};
