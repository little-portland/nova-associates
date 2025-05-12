import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[60vh] bg-gradient-to-r from-blue-900 via-blue-700 to-teal-500 text-white overflow-hidden">
        <img src="/assets/digital-image.jpg" alt="Abstract Energy Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 text-center p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Navigate the Energy Transition</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up">Nova Associates: Your partner in strategy, operations, and digital transformation for a sustainable energy future.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-200 animate-pulse">Get in Touch</Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Strategy</h3>
              <p className="text-gray-600">Developing forward-thinking strategies to thrive in the evolving energy landscape.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Operations</h3>
              <p className="text-gray-600">Optimizing operational efficiency and resilience for sustainable performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Digital Transformation</h3>
              <p className="text-gray-600">Leveraging digital solutions to unlock new value and drive innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Energy Business?</h2>
          <p className="text-lg mb-8">Partner with Nova Associates to lead the change.</p>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-white text-blue-800 hover:bg-white hover:text-blue-800">Learn More About Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

