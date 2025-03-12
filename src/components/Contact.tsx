
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="reveal stagger-1">
            <span className="text-sm uppercase tracking-widest text-primary/60 font-medium mb-3 block">Contact</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's create something amazing together</h2>
            
            <p className="text-primary/80 mb-8 leading-relaxed">
              Have a project in mind or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <a href="mailto:hello@aniwave.com" className="text-primary/80 hover:text-primary transition-colors">hello@aniwave.com</a>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <address className="text-primary/80 not-italic flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary/60" />
                  <span>
                    Chinchwad<br />
                    Pune, Maharashtra, India
                  </span>
                </address>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Follow us</h4>
                <div className="flex gap-4">
                  {["Twitter", "Instagram", "Dribbble", "Behance"].map((social) => (
                    <a key={social} href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal stagger-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/10 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-primary/10 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-primary/10 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full rounded-md bg-primary text-white px-8 py-3 font-medium transition-all",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:translate-y-[-2px] hover:shadow-lg"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
