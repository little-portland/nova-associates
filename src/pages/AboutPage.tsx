import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">About Nova Associates</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Nova Associates was founded on the principle that the energy sector requires a fresh, modern approach to consultancy. In an industry often bound by legacy systems and outdated thinking, we bring innovative strategies, operational excellence, and cutting-edge digital solutions to help our clients navigate the complexities of the energy transition and build a sustainable future.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We partner with large energy companies, providing tailored insights and actionable plans to address their most pressing challenges. Our core message is simple: embrace the new, optimize the present, and lead the future of energy.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/about-image.jpg" alt="Modern Abstract Representation" className="w-full h-auto object-cover"/>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Modern Perspective</h3>
            <p className="text-gray-600">We challenge conventional wisdom and bring a forward-thinking mindset to every engagement.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Deep Expertise</h3>
            <p className="text-gray-600">Our team combines extensive energy sector knowledge with cross-industry best practices.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Results-Driven</h3>
            <p className="text-gray-600">We focus on delivering tangible outcomes and measurable value for our clients.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;

