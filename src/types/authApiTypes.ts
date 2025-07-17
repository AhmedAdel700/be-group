interface StudentData {
  highSchoolCertificate: string;
  studentIdentity: string;
  studentPicture: string;
  initialRegistrationDiplomaId: string;
  proofOfDisability: string;
  sendaGrantApplicationPrompt: boolean;
  _id: string;
}

interface UserData {
  _id: string;
  picture: string | null;
  fullName: string;
  nationalNumber: string;
  phoneNumber: string;
  countryCode: string;
  internationalNumber: string;
  email: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  isVerified: boolean;
  student: StudentData;
  isRegistrationAccepted: boolean;
  id: string;
}

export interface VerifyEmailResponse {
  success: boolean;
  data: {
    token: string;
    user: UserData;
    paymentUrl: string;
  };
}

interface Address {
  city?: string;
  _id?: string;
}

interface Student {
  highSchoolCertificate?: string;
  studentIdentity?: string;
  studentPicture?: string;
  initialRegistrationDiplomaId?: string[];
  graduationYear?: number;
  highSchoolDegree?: string;
  employerApproval?: string;
  proofOfDisability?: string;
  sendaGrantApplicationPrompt?: boolean;
  _id?: string;
}

interface User {
  _id?: string;
  picture?: string | null;
  fullName?: string;
  fullNameAr?: string;
  nationalNumber?: string;
  birthDate?: string;
  gender?: string;
  phoneNumber?: string;
  countryCode?: string;
  internationalNumber?: string;
  email?: string;
  nationality?: string;
  role?: string;
  permissions?: [];
  isActive?: boolean;
  isVerified?: boolean;
  address?: Address;
  student?: Student;
  isRegistrationAccepted?: boolean;
}

export interface SginUpResponse {
  success?: boolean;
  data?: {
    token?: string;
    user?: User;
  };
}

export interface RegistrationData {
  fullName?: string;
  fullNameAr?: string;
  birthDate?: string;
  gender?: string;
  nationality?: string;
  city?: string;
  nationalNumber?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  countryCode?: string;
  graduationYear?: number;
  highSchoolDegree?: string;
  highSchoolCertificate?: string;
  studentIdentity?: string;
  proofOfDisability?: string;
  studentPicture?: string;
  employerApproval?: string;
  sendaGrantApplicationPrompt?: boolean;
  isFinalizedRegistration?: boolean;
  initialRegistrationDiplomaId?: string[];
}
