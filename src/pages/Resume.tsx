import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import submitResumeBg from "@/assets/submit_resume_background.png";

const positions = [
  "Project Manager",
  "Electrical Site Engineer",
  "Sales Engineer",
  "Sales Coordinator",
  "Accountant"
];

const Resume = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    file: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if ((name === "file" || name === "my_file") && files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
      return;
    }
    if (name === "user_name") {
      setFormData((prev) => ({ ...prev, name: value }));
      return;
    }
    if (name === "user_email") {
      setFormData((prev) => ({ ...prev, email: value }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePositionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, position: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);
    if (!formData.name || !formData.email || !formData.position || !formData.file) {
      setError("Please fill in all fields and upload your PDF resume.");
      return;
    }
    // Basic client-side validation for PDF
    if (formData.file && formData.file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS is not configured. Please set VITE_EMAILJS_* env vars.");
      return;
    }

    if (!formRef.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setSubmitted(true);
      // Reset form and state after successful submit
      formRef.current.reset();
      setFormData({ name: "", email: "", position: "", file: null });
    } catch (err: any) {
      setError("Failed to send. Please try again or email us directly.");
      // Optionally log error: console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      <img src={submitResumeBg} alt="Submit Resume Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-accent/60 z-10" />
      <div className="w-full max-w-lg bg-white/40 backdrop-blur-md rounded-xl shadow-card p-8 relative z-20">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Submit Your Resume</h2>
        <p className="text-muted-foreground mb-8 text-center">
          Please fill out the form below and upload your PDF resume.<br />
          Alternatively, you can email your resume to <a href="mailto:info@eliteues.com" className="text-accent underline">info@eliteues.com</a>.
        </p>
  <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="user_name" value={formData.name} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="user_email" type="email" value={formData.email} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="position">Position Applying For *</Label>
            <Select value={formData.position} onValueChange={handlePositionChange}>
              <SelectTrigger id="position" name="position">
                <SelectValue placeholder="Select a position..." />
              </SelectTrigger>
              <SelectContent>
                {positions.map((pos) => (
                  <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Hidden input to pass the selected position to EmailJS since Select isn't a native form field */}
            <input type="hidden" name="position" value={formData.position} />
            {/* Hidden message is useful if your template uses a {{message}} variable */}
            <input type="hidden" name="message" value={`Application for ${formData.position} from ${formData.name}`} />
          </div>
          <div>
            <Label htmlFor="file">Upload Resume (PDF only) *</Label>
            <Input id="file" name="my_file" type="file" accept="application/pdf" onChange={handleChange} required className="mt-1" />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button type="submit" variant="corporate" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit Resume"}
          </Button>
        </form>
        {submitted && (
          <div className="mt-6 text-green-600 text-center" aria-live="polite">
            Thank you for submitting your resume! We have received your application.
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume; 