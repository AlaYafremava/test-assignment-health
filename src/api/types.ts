export interface MedicalStaff {
  id: string;
  name: string;
  email: string;
  department?: Department;
}

interface Department {
  id: string;
  name: string;
}

export interface Doctor extends MedicalStaff {
  isHeadOfDepartment: boolean;
}
