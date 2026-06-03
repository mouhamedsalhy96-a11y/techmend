"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const { error } = await supabase.from("messages").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    ]);

    if (error) {
      // Safely extract the error message instead of an empty object
      console.error("Error submitting form:", error.message || JSON.stringify(error));
      setStatus("error");
    } else {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get a Quote / Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Have a broken device? Need some tech advice? Send us a message or visit our shop in Ulverston.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Store Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#4b6038] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Address</p>
                  <p className="text-gray-600">2A The Gill<br />Ulverston LA12 7BJ<br />United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#4b6038] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a href="tel:+441229403127" className="text-gray-600 hover:text-[#4b6038] transition-colors">
                    +44 1229 403127
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#4b6038] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">Opening Hours</p>
                  <table className="text-gray-600 mt-2">
                    <tbody>
                      <tr><td className="pr-4 py-1">Tuesday - Friday:</td><td>10:00 AM - 5:00 PM</td></tr>
                      <tr><td className="pr-4 py-1">Sat, Sun, Mon:</td><td>Closed</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4b6038] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4b6038] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4b6038] focus:border-transparent outline-none transition-all" placeholder="07123 456789" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help? *</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4b6038] focus:border-transparent outline-none transition-all resize-none" placeholder="Describe the issue with your device..." />
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-[#4b6038] hover:bg-[#3d4d2d] transition-colors disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 mt-4">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 mt-4">
                  There was an error sending your message. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}