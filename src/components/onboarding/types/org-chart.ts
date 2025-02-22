
export interface Role {
  title: string;
  responsibilities: string[];
}

export interface Department {
  name: string;
  responsibilities: string[];
  roles: Role[];
}
