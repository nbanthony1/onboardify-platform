
export interface Module {
  title: string;
  content: string;
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
