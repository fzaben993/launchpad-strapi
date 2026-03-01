export interface StrapiData {
  id: number;
  [key: string]: unknown; // Allow for any additional fields
}

export interface StrapiResponse<T = StrapiData> {
  data: T | T[];
}
