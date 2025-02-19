
import { Course } from "../types";

export const marketCourse: Course = {
  id: 3,
  title: "3. Market Segmentation",
  description: "Understanding target industries and customer profiles",
  department: "sales",
  progress: 0,
  modules: [
    {
      title: "Customer Research",
      content: "[CUSTOMER_RESEARCH]",
      route: "market/customer-research"
    }
  ]
};
