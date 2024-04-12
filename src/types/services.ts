export interface Service {
  name: string;
  port: number;
  description?: string;
  logoUrl?: string;
  online?: boolean;
  type?: "Docker" | "App" | "Nativo";
}
