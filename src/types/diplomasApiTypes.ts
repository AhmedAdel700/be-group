interface Diploma {
  _id: string;
  title: string;
  titleAr: string;
  brief: string;
  briefAr: string;
  description: Description[];
  descriptionAr: Description[];
  image: string;
  category: string;
  semesterCost: number;
  hours: number;
  enrollmentSettings: EnrollmentSettings;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  semesters: Semester[];
}

interface Description {
  title: string;
  items: string[];
}

interface EnrollmentSettings {
  openEnrollment: boolean;
  enrollmentStartDate: string;
  enrollmentEndDate: string;
  autoApproval: boolean;
}

interface Semester {
  _id: string;
  courseIds: Course[];
  semesterNumber: number;
  title: string;
  titleAr: string;
  description: string;
  credits: number;
  isActive: boolean;
  isFinalized: boolean;
  configuration: Configuration;
  createdAt: string;
  updatedAt: string;
  __v: number;
  diplomaId: string;
}

interface Course {
  _id: string;
  date: string;
  title: string;
  titleAr: string;
}

interface Configuration {
  duration: Duration;
}

interface Duration {
  startDate: string;
  endDate: string;
}

export interface DiplomaResponseData {
  success: boolean;
  data: {
    diplomas: Diploma[];
    options: {
      limit: number;
      skip: number;
      sort: { createdAt: number };
      page: number;
      count: number;
    };
  };
}


export interface DiplomaDetailsData {
  success: boolean;
  data: {
    _id: string;
    title: string;
    titleAr: string;
    brief: string;
    briefAr: string;
    description: {
      title: string;
      items: string[];
    }[];
    descriptionAr: {
      title: string;
      items: string[];
    }[];
    image: string;
    category: string;
    semesterCost: number;
    hours: number;
    enrollmentSettings: {
      openEnrollment: boolean;
      enrollmentStartDate: string;
      enrollmentEndDate: string;
      autoApproval: boolean;
    };
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    semesters: {
      _id: string;
      courseIds: {
        _id: string;
        date: string;
        title: string;
        titleAr: string;
      }[];
      semesterNumber: number;
      title: string;
      titleAr: string;
      description: string;
      credits: number;
      isActive: boolean;
      isFinalized: boolean;
      configuration: {
        duration: {
          startDate: string;
          endDate: string;
        };
      };
      createdAt: string;
      updatedAt: string;
      __v: number;
      diplomaId: string;
    }[];
  };
}
