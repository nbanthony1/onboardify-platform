
import { Course } from "../types";

export const introductionCourse: Course = {
  id: 1,
  title: "1. Who We Are",
  description: "Company overview, mission, vision, and organizational structure",
  department: "sales",
  progress: 0,
  modules: [
    {
      title: "Welcome from Leadership",
      content: "[Video Placeholder: Leadership Welcome Message]\n\n" +
        "Mission Statement\n" +
        "At Symterra, our mission is to provide innovative, humane, and sustainable bird deterrent solutions that empower businesses to protect their environments efficiently and ethically. We strive to lead the industry by integrating cutting-edge technology with eco-conscious practices to ensure long-term success for our customers.\n\n" +
        "Vision\n" +
        "To become the solution in pest control in 5 years."
    },
    {
      title: "Core Values and Secrets to Success",
      content: "[Video Placeholder: Core Values Presentation]\n\n" +
        "Guarantee\n" +
        "We guarantee significant reductions in bird activity, costs associated with pest control, and reputational risk from inhumane pest control practices. Our solutions are permanent, effective, and ethical that align with environmental responsibility and operational efficiency."
    },
    {
      title: "Market Positioning",
      content: "Who We Serve\n" +
        "Symterra serves a diverse range of industries that require innovative bird control solutions:\n\n" +
        "• Pest Control Operators (PCOs) – Companies seeking humane, effective bird deterrent solutions to enhance their service offerings.\n" +
        "• Commercial Enterprises – Hotels, airports, warehouses, retail centers, and manufacturing facilities needing operational efficiency.\n" +
        "• Municipalities & Public Institutions – City planners, public works directors, and environmental officers ensuring public safety and compliance.\n" +
        "• Large End-User Organizations – Fortune 500 companies, universities, stadiums, and corporate campuses managing bird-related challenges.\n" +
        "• Pest Control Distributors – Distributors seeking exclusive, high-margin, innovative bird deterrent products."
    },
    {
      title: "Roles and Responsibilities",
      content: "[INTERACTIVE_ORG_CHART]"
    }
  ]
};
