import { Department, BannerImage } from "@prisma/client";

export interface ServerActionResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errorType?: string;
}
export type DepartmentData = Department;

export type DoctorSummary = {
  id: string;
  name: string | null;
  specialty: string | null;
  rating: number | null;
  reviewCount: number | null;
  imageUrl: string | null;
};

export interface DoctorReview {
  id: string;
  rating: number | null;
  reviewDate: string;
  testimonialText: string;
  patientName: string;
  patientImage: string | null;
}
export type BannerImageData = BannerImage;
