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
