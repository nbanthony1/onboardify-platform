
import { Course } from "./types";
import { departments } from "./departments";
import { introductionCourse } from "./courses/introduction";
import { productCourse } from "./courses/product";
import { marketCourse } from "./courses/market";
import { salesProcessCourse } from "./courses/sales-process";

export { departments } from "./departments";

export const courses: Course[] = [
  introductionCourse,
  productCourse,
  marketCourse,
  salesProcessCourse
];
