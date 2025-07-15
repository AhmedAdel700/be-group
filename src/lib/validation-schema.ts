import { z } from "zod";

// const phoneRegex = /^\+966[0-9]{9}$/;
const nationalIdRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

export const registrationSchema = z
  .object({
    fullNameEn: z.string().min(2, "English name must be at least 2 characters"),
    fullNameAr: z.string().min(2, "Arabic name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .regex(
        passwordRegex,
        "Password must be at least 8 characters with one number and one special character"
      ),
    confirmPassword: z.string(),
    phoneNumber: z.string().min(1, "Phone number is required"),
    nationalId: z
      .string()
      .regex(nationalIdRegex, "National ID must be 10 digits"),
    nationality: z.string().min(2, "Please enter your nationality"),
    city: z.string().min(2, "Please enter your city"),
    birthdate: z.date({
      message: "Please select your birthdate",
    }),
    gender: z.enum(["male", "female"], {
      message: "Please select your gender",
    }),
    studentImage: z.instanceof(File, {
      message: "Please upload student image",
    }),
    highSchoolDiploma: z.instanceof(File, {
      message: "Please upload high school diploma",
    }),
    idPhoto: z.instanceof(File, { message: "Please upload ID photo" }),
    employerApproval: z.instanceof(File, {
      message: "Please upload employer approval",
    }),
    hasDisability: z.boolean(),
    disabilityDocument: z.instanceof(File).optional(),
    scholarshipParticipation: z.boolean(),
    applicationAcknowledgment: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must acknowledge the application terms"
      ),
    computerProvision: z
      .boolean()
      .refine((val) => val === true, "You must confirm computer provision"),
    informationAccuracy: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must acknowledge information accuracy"
      ),
    generalConditions: z
      .boolean()
      .refine((val) => val === true, "You must agree to general conditions"),
    proctoringAcknowledgment: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must acknowledge proctoring requirements"
      ),
    diplomaChoice1: z.string().min(1, "Please select your first diploma choice"),
    diplomaChoice2: z.string().min(1, "Please select your second diploma choice"),
    diplomaChoice3: z.string().min(1, "Please select your third diploma choice"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
