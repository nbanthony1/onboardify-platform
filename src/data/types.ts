
export interface Module {
  title: string;
  content: string;
  route?: string; // Adding optional route property
}

export interface Course {
  id: number;
  title: string;
  description: string;
  department: string;
  progress: number;
  modules?: (string | Module)[];
}

export interface Department {
  id: string;
  name: string;
}
