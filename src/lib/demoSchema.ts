import { z } from "zod";

export const DemoLeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80, "Name too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+\d[\d\s-]{9,}$/, "Use international format like +91 98765 43210"),
  role: z.enum(["Principal", "Coordinator", "Teacher", "Management", "Other"]),
  organisation: z.string().min(2, "Organisation name required"),
  country: z.string().min(2, "Country required"),
  state: z.string().optional(),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  message: z.string().max(2000, "Message too long").optional(),
  preferredAtIST: z.string().datetime().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "You must agree to be contacted" }) }),
}).refine((d) => d.country !== "India" || (d.state && d.state.length > 0), {
  message: "State is required for India",
  path: ["state"],
});

export type DemoLead = z.infer<typeof DemoLeadSchema>;
