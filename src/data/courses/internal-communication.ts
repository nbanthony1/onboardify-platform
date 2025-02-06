
import { Course } from "../types";

export const internalCommunicationCourse: Course = {
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
};
