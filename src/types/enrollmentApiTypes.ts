export interface EnrollmentResponse {
  success: boolean;
  data: UserData;
}

interface UserData {
  _id: string;
  picture: string | null;
  fullName: string;
  fullNameAr: string;
  nationalNumber: string;
  birthDate: string;
  gender: "male" | "female";
  phoneNumber: string;
  countryCode: string;
  internationalNumber: string;
  email: string;
  nationality: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  isVerified: boolean;
  address: Address;
  student: Student;
  isRegistrationAccepted: boolean;
}


interface Address {
  city: string;
  _id: string;
}

interface Student {
  highSchoolCertificate: string;
  studentIdentity: string;
  studentPicture: string;
  studentDiploma: StudentDiploma;
  graduationYear: number;
  highSchoolDegree: string;
  employerApproval: string;
  sendaGrantApplicationPrompt: boolean;
  _id: string;
  registrationFees: RegistrationFees;
}

interface StudentDiploma {
  initialRegistrationDiplomaId: Diploma[];
  paymentStatus: "pending" | "paid" | string;
  isPaid: boolean;
  _id: string;
}

interface Diploma {
  _id: string;
  title: string;
  titleAr: string;
}

interface RegistrationFees {
  amount: number;
  currency: string;
  isPaid: boolean;
  transactionId: string;
  _id: string;
}

