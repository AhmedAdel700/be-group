import { z } from "zod";

const nationalIdRegex = /^[0-9]{10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const arabicRegex = /^[\u0600-\u06FF\s]+$/;
const englishRegex = /^[A-Za-z\s]+$/;

export const getRegistrationSchema = (lang: string) => {
  const t = (en: string, ar: string) => (lang === "ar" ? ar : en);

  return z
    .object({
      fullName: z
        .string()
        .min(
          7,
          t(
            "Please enter your full English name (at least 4 names)",
            "يرجى إدخال الاسم الرباعي باللغة الإنجليزية"
          )
        )
        .refine((val) => englishRegex.test(val), {
          message: t(
            "English name must contain only English letters",
            "يجب أن يحتوي الاسم الإنجليزي على أحرف إنجليزية فقط"
          ),
        })
        .refine((val) => val.trim().split(/\s+/).length >= 4, {
          message: t(
            "Please enter your full English name (at least 4 names)",
            "يرجى إدخال الاسم الرباعي باللغة الإنجليزية"
          ),
        }),

      fullNameAr: z
        .string()
        .min(
          7,
          t(
            "Please enter your full Arabic name (at least 4 names)",
            "يرجى إدخال الاسم الرباعي باللغة العربية"
          )
        )
        .refine((val) => arabicRegex.test(val), {
          message: t(
            "Arabic name must contain only Arabic letters",
            "يجب أن يحتوي الاسم العربي على أحرف عربية فقط"
          ),
        })
        .refine((val) => val.trim().split(/\s+/).length >= 4, {
          message: t(
            "Please enter your full Arabic name (at least 4 names)",
            "يرجى إدخال الاسم الرباعي باللغة العربية"
          ),
        }),

      email: z
        .string()
        .email(
          t(
            "Please enter a valid email address",
            "يرجى إدخال بريد إلكتروني صالح"
          )
        ),
      password: z
        .string()
        .regex(
          passwordRegex,
          t(
            "Password must be at least 8 characters with uppercase, lowercase, a number and a special character",
            "كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على حرف كبير، وحرف صغير، ورقم، وحرف خاص"
          )
        ),
      confirmPassword: z
        .string()
        .min(1, t("Confirm password is required", "تأكيد كلمة المرور مطلوب")),
      phoneNumber: z
        .string()
        .min(1, t("Phone number is required", "رقم الهاتف مطلوب")),
      nationalNumber: z
        .string()
        .regex(
          nationalIdRegex,
          t(
            "National ID must be 10 digits",
            "رقم الهوية الوطنية يجب أن يتكون من 10 أرقام"
          )
        ),
      nationality: z
        .string()
        .min(2, t("Please enter your nationality", "يرجى إدخال الجنسية")),
      city: z
        .string()
        .min(2, t("Please enter your city", "يرجى إدخال المدينة")),
      birthDate: z.date({
        message: t("Please select your birthdate", "يرجى اختيار تاريخ الميلاد"),
      }),
      gender: z.enum(["male", "female"], {
        message: t("Please select your gender", "يرجى اختيار الجنس"),
      }),
      highSchoolDegree: z
        .string()
        .min(2, t("High school degree is required", "درجة الثانوية مطلوبة")),
      graduationYear: z
        .string()
        .min(4, t("Graduation year is required", "سنة التخرج مطلوبة")),
      studentPicture: z
        .string({
          message: t("Please upload student image", "يرجى رفع صورة الطالب"),
        })
        .min(1),
      highSchoolCertificate: z
        .string({
          message: t(
            "Please upload high school diploma",
            "يرجى رفع شهادة الثانوية"
          ),
        })
        .min(1),
      studentIdentity: z
        .string({
          message: t("Please upload ID photo", "يرجى رفع صورة الهوية"),
        })
        .min(1),
      employerApproval: z
        .string({
          message: t(
            "Please upload employer approval",
            "يرجى رفع موافقة جهة العمل"
          ),
        })
        .min(1),
      hasDisability: z.boolean(),
      proofOfDisability: z.string().optional(),
      scholarshipParticipation: z.boolean(),
      applicationAcknowledgment: z
        .boolean()
        .refine(
          (val) => val === true,
          t(
            "You must acknowledge the application terms",
            "يجب الموافقة على شروط التقديم"
          )
        ),
      computerProvision: z
        .boolean()
        .refine(
          (val) => val === true,
          t(
            "You must confirm computer provision",
            "يجب تأكيد توفير جهاز كمبيوتر"
          )
        ),
      informationAccuracy: z
        .boolean()
        .refine(
          (val) => val === true,
          t(
            "You must acknowledge information accuracy",
            "يجب تأكيد دقة المعلومات"
          )
        ),
      generalConditions: z
        .boolean()
        .refine(
          (val) => val === true,
          t(
            "You must agree to general conditions",
            "يجب الموافقة على الشروط العامة"
          )
        ),
      proctoringAcknowledgment: z
        .boolean()
        .refine(
          (val) => val === true,
          t(
            "You must acknowledge proctoring requirements",
            "يجب تأكيد الالتزام بمتطلبات المراقبة"
          )
        ),
      diplomaChoice1: z
        .string()
        .min(
          1,
          t(
            "Please select your first diploma choice",
            "يرجى اختيار الخيار الأول للدبلوم"
          )
        ),
      diplomaChoice2: z
        .string()
        .min(
          1,
          t(
            "Please select your second diploma choice",
            "يرجى اختيار الخيار الثاني للدبلوم"
          )
        ),
      diplomaChoice3: z
        .string()
        .min(
          1,
          t(
            "Please select your third diploma choice",
            "يرجى اختيار الخيار الثالث للدبلوم"
          )
        ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("Passwords don't match", "كلمتا المرور غير متطابقتين"),
      path: ["confirmPassword"],
    })
    .refine(
      (data) =>
        !data.hasDisability || (data.hasDisability && !!data.proofOfDisability),
      {
        message: t(
          "Disability document is required if you have a disability.",
          "يجب رفع مستند الإعاقة إذا كان لديك إعاقة"
        ),
        path: ["disabilityDocument"],
      }
    );
};

export type RegistrationFormData = z.infer<
  ReturnType<typeof getRegistrationSchema>
>;
