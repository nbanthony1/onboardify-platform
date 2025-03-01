
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
      content: "/pdfs/product/product-overview.pdf"
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
      content: "/pdfs/product/university-arizona-study-1.pdf,/pdfs/product/university-arizona-study-2.pdf,/pdfs/product/university-arizona-study-3.pdf"
    },
    {
      title: "Installation",
      content: "/pdfs/product/installation.pdf"
    }
  ]
};
