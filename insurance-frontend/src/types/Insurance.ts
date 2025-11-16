export type Occupation =
  | "retired"
  | "freelancer"
  | "student"
  | "government_job"
  | "business_owner"
  | "unemployed"
  | "private_job";

export interface InsuranceRequest {
  age: number;
  weight: number;
  height: number;
  income_lpa: number;
  smoker: boolean;
  city: string;
  occupation: Occupation;
}

export interface InsuranceResponse {
  predicted_category: string;
}
