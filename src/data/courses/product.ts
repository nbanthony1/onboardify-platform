import { Course } from "../types";

export const productCourse: Course = {
  id: 2,
  title: "2. Product Portfolio",
  description: "Deep dive into Symterra Pulse and other product offerings",
  department: "sales",
  progress: 0,
  modules: [
    {
      title: "Technology Overview",
      content: "/pdfs/product/technology-overview.pdf\n\nNote: Please upload the Technology Overview PDF document to continue."
    },
    {
      title: "Product Overview",
      content: "/pdfs/product/product-overview.pdf\n\nNote: Please upload the Product Overview PDF document to continue."
    },
    {
      title: "Technical Specifications",
      content: "/pdfs/product/technical-specifications.pdf\n\nNote: Please upload the Technical Specifications PDF document to continue."
    },
    {
      title: "University of Arizona Study",
      content: "University Case Study: Validating Symterra's Effectiveness\n\nIn 2020, Symterra partnered with the Department of Ornithology at the University of Arizona to conduct a rigorous study on the efficacy of the Symterra Pulse System. The research demonstrated that the system significantly reduced bird pressure and presence, validating its effectiveness in real-world applications.\n\nKey Findings from the Study:\n\nSignificant Reduction in Bird Activity → The Symterra Pulse System achieved near elimination of birds in protected areas, proving its effectiveness as a long-term deterrent.\n\nUnique Signal-Based Deterrent → The proprietary signal technology disoriented birds, preventing them from landing in treated areas. Pigeons, seagulls, and sparrows showed particularly strong aversion to the system.\n\nEco-Friendly & Humane Impact → Unlike traditional pest control methods, the system altered bird flight behavior without harming them, supporting biodiversity and sustainable wildlife management.\n\nPerformance Optimization & System Enhancements → Insights from the study and customer feedback led to refinements in product design, including improved durability, energy efficiency, and installation flexibility.\n\nBased on these findings, Symterra refined its product offerings, incorporating feedback from both the study and customer experiences to enhance performance, durability, and long-term impact. This study serves as a cornerstone of credibility, reinforcing our position as the leader in humane and sustainable bird deterrence solutions."
    },
    {
      title: "Success Stories",
      content: "Real-World Applications:\n\n1. Agricultural Protection:\nA California vineyard reported 90% reduction in grape damage within first harvest season.\n\n2. Industrial Facility Safety:\nA power plant eliminated bird-related maintenance shutdowns.\n\n3. Airport Runway Safety:\nAn international airport significantly reduced bird strike incidents."
    }
  ]
};
