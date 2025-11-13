import { useState } from "react";
import { DemoLeadSchema, DemoLead } from "@/lib/demoSchema";
import { submitDemoLead } from "@/api/demoApi";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const INDIA_STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat", 
  "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan", 
  "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const COUNTRIES = [
  "India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", 
  "Oman", "Singapore", "Other"
];

const INTERESTS = [
  "AI & Robotics Lab",
  "Atal Tinkering Lab",
  "Coding & AI Curriculum",
  "AI & Robotics Hardware Kits",
  "Portable Science Park",
  "Teacher Training"
];

const DEFAULT_FORM: Partial<DemoLead> = {
  country: "India",
  interests: [],
  role: "Teacher",
};

interface BookDemoDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function BookDemoDialog({ open, onClose }: BookDemoDialogProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Partial<DemoLead>>({ ...DEFAULT_FORM });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [done, setDone] = useState(false);

  const set = <K extends keyof DemoLead>(key: K, value: DemoLead[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
    // Clear error for this field
    if (errors[key]) {
      const newErrors = { ...errors };
      delete newErrors[key];
      setErrors(newErrors);
    }
  };

  const toggleInterest = (interest: string) => {
    const current = new Set(form.interests ?? []);
    if (current.has(interest)) {
      current.delete(interest);
    } else {
      current.add(interest);
    }
    set("interests", Array.from(current));
  };

  async function submit() {
    setLoading(true);
    setErrors({});

    const toValidate = { ...form, consent: form.consent ?? false };
    const parsed = DemoLeadSchema.safeParse(toValidate);

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await submitDemoLead(parsed.data);

      if (response.ok) {
        setDone(true);
        // Fire analytics event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'demo_request_submitted', {
            country: form.country,
            role: form.role,
            interests: form.interests,
            source: form.utmSource || 'organic',
          });
        }
      } else {
        setErrors(response.fieldErrors ?? { _form: [response.error || "Unable to submit. Please try again."] });
      }
    } catch (error) {
      setErrors({ _form: ["Network error. Please check your connection and try again."] });
    } finally {
      setLoading(false);
    }
  }

  const handleClose = () => {
    if (!loading) {
      setForm({ ...DEFAULT_FORM });
      setErrors({});
      setDone(false);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Request your Demo</h2>
            <p className="text-sm text-muted-foreground mt-1">
              In ~1 hour on a call, we'll map your needs and show how L.I.T. Labs can help
            </p>
          </div>
          <button 
            onClick={handleClose} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            disabled={loading}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {done ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2">Thanks! 🎉</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our team will contact you within 1 business day.
              </p>
              <Button onClick={handleClose} size="lg">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Aditi Sharma"
                    value={form.name || ""}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name[0]}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="aditi@example.com"
                    value={form.email || ""}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="+91 98765 43210"
                    value={form.phone || ""}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone[0]}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Designation *</label>
                  <select
                    className="input-field"
                    value={form.role || "Teacher"}
                    onChange={(e) => set("role", e.target.value as any)}
                  >
                    <option value="Principal">Principal</option>
                    <option value="Coordinator">Coordinator</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Management">Management</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role[0]}</p>}
                </div>
              </div>

              {/* Organisation */}
              <div>
                <label className="block text-sm font-medium mb-2">School / Organisation *</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Kendriya Vidyalaya, Varanasi"
                  value={form.organisation || ""}
                  onChange={(e) => set("organisation", e.target.value)}
                />
                {errors.organisation && <p className="text-red-600 text-sm mt-1">{errors.organisation[0]}</p>}
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <select
                    className="input-field"
                    value={form.country || "India"}
                    onChange={(e) => set("country", e.target.value)}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country[0]}</p>}
                </div>

                {form.country === "India" && (
                  <div>
                    <label className="block text-sm font-medium mb-2">State / UT *</label>
                    <select
                      className="input-field"
                      value={form.state || ""}
                      onChange={(e) => set("state", e.target.value)}
                    >
                      <option value="">Select State</option>
                      {INDIA_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state[0]}</p>}
                  </div>
                )}
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Schedule demo for (check all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {INTERESTS.map((interest) => (
                    <label
                      key={interest}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 cursor-pointer transition-all ${
                        form.interests?.includes(interest)
                          ? "border-[#3BBBF0] bg-[#3BBBF0]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.interests?.includes(interest) || false}
                        onChange={() => toggleInterest(interest)}
                        className="w-4 h-4 text-[#3BBBF0] rounded focus:ring-[#3BBBF0]"
                      />
                      <span className="text-sm font-medium">{interest}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <p className="text-red-600 text-sm mt-2">{errors.interests[0]}</p>}
              </div>

              {/* Optional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Demo Date & Time</label>
                  <input
                    type="datetime-local"
                    className="input-field"
                    onChange={(e) =>
                      set("preferredAtIST", e.target.value ? new Date(e.target.value).toISOString() : undefined)
                    }
                  />
                  <p className="text-xs text-muted-foreground mt-1">Asia/Kolkata timezone</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message (Optional)</label>
                <textarea
                  className="input-field"
                  rows={4}
                  placeholder="Add any details to help us tailor your demo..."
                  value={form.message || ""}
                  onChange={(e) => set("message", e.target.value)}
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent || false}
                    onChange={(e) => set("consent", e.target.checked as any)}
                    className="w-4 h-4 mt-1 text-[#3BBBF0] rounded focus:ring-[#3BBBF0]"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to be contacted and accept the{" "}
                    <a href="/privacy" className="text-[#3BBBF0] hover:underline">Privacy Policy</a>
                  </span>
                </label>
                {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent[0]}</p>}
              </div>

              {/* General Errors */}
              {errors._form && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-600 text-sm">{errors._form[0]}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FF822E] hover:bg-[#FF822E]/90"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Book a Demo"}
                </Button>
              </div>
              
              {/* Additional Book a Demo Button at the bottom */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#FF822E] hover:bg-[#FF822E]/90"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Book a Demo"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: #3BBBF0;
          box-shadow: 0 0 0 3px rgba(59, 187, 240, 0.1);
        }
      `}</style>
    </div>
  );
}
