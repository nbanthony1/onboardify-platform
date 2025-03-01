
import { Course } from "../types";

export const productCourse: Course = {
  id: 2,
  title: "2. Product Portfolio",
  description: "Deep dive into Symterra Pulse and other product offerings",
  department: "sales",
  progress: 0,
  modules: [
    {
      title: "Product Overview",
      content: "[PRODUCT_OVERVIEW_PDF]" // Special identifier for uploaded PDFs
    },
    {
      title: "Technology Overview",
      content: "/pdfs/product/technology-overview.pdf"
    },
    {
      title: "Technical Specifications",
      content: "/pdfs/product/technical-specifications.pdf"
    },
    {
      title: "University of Arizona Study",
      content: "[ARIZONA_STUDY_PDFS]" // Special identifier for multiple PDFs
    },
    {
      title: "Installation",
      content: "[INSTALLATION_PDF]" // Special identifier for uploaded PDF
    }
  ]
};
