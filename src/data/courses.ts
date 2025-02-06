
import { Course } from "./types";
import { departments } from "./departments";
import { introductionCourse } from "./courses/introduction";
import { productCourse } from "./courses/product";
import { marketCourse } from "./courses/market";
import { salesProcessCourse } from "./courses/sales-process";
import { internalCommunicationCourse } from "./courses/internal-communication";
import { salesToolsCourse } from "./courses/sales-tools";
import { otherCourses } from "./courses/other-courses";

export { departments } from "./departments";

export const courses: Course[] = [
  introductionCourse,
  productCourse,
  marketCourse,
  salesProcessCourse,
  internalCommunicationCourse,
  salesToolsCourse,
  ...otherCourses
];
