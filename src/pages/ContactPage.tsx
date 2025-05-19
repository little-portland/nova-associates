import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin } from 'lucide-react'; // Using lucide-react icons

const ContactPage: React.FC = () => {
  // Placeholder contact info - replace with actual details later
  const contactDetails = {
    email: "info@novaassociates.consulting",
    // phone: "+1-XXX-XXX-XXXX",
    // address: "123 Energy Lane, Houston, TX 77002, USA", // Optional
    // linkedin: "#" // Placeholder link
  };

  // Basic form handling simulation (no actual submission logic here)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted (simulation). Thank you for your message!");
    // In a real app, you would handle form submission here (e.g., send data to an API)
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <section className="text-center pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let's Connect and Power the Future
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We are eager to discuss how Nova Associates can partner with your organization. Reach out to start the conversation.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Contact Information Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Please reach out to us to schedule an initial consultation or to learn more about our services. Use the contact information below or fill out the inquiry form, and one of our energy sector specialists will respond promptly.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href={`mailto:${contactDetails.email}`} className="hover:text-blue-700 transition duration-150">{contactDetails.email}</a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>{contactDetails.phone}</span>
            </div>
            {/* {contactDetails.address && (
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>{contactDetails.address}</span>
              </div>
            )} */}
            <div className="flex items-center space-x-3">
              <Linkedin className="h-5 w-5 text-blue-600" />
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-150">Connect on LinkedIn</a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <Input type="text" id="name" placeholder="Your Name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Email Address</Label>
              <Input type="email" id="email" placeholder="your.email@example.com" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="company" className="text-gray-700">Company (Optional)</Label>
              <Input type="text" id="company" placeholder="Your Company" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <Textarea id="message" placeholder="How can we help?" required rows={5} className="mt-1" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5">
                Send Message
              </Button>
            </div>
          </form>
        </section>
      </div>

      {/* Optional Map Placeholder */}
      {/* <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
          [Map Placeholder - e.g., Embed Google Maps iframe here]
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;

