export interface EmployeeResponse {
  message: string;
  data: {
    employees: EmployeeGlobal[];
    count: number;
  };
}

export interface EmployeeGlobal {
  id: number;
  firstName: string;
  lastName: string;
  isActive?: boolean;
  dob?: string;
  email: string;
  phone?: string;
  designation?: string;
  salary?: string;
  dateOfJoining?: string;
  skills: {
    id: number;
    skill: string;
  }[];
  address?: string;
  role?: {
    id: number;
    role: string;
  };
  department?: {
    id: number;
    department: string;
  };
}
