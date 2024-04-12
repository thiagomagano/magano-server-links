export interface Service {
  name: string;
  port: number;
  url: string;
  description?: string;
  logoUrl?: string;
  online?: boolean;
  type?: "Docker" | "App" | "Nativo";
}
