import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Services</h1>

      <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
        <img src="/assets/services-image.jpg" alt="Abstract Service Representation" className="w-full h-64 object-cover"/>
      </div>

      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Nova Associates provides comprehensive consulting services tailored to the unique challenges and opportunities within the energy sector. We empower our clients to lead the energy transition through strategic insight, operational optimization, and digital innovation.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Strategy Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Strategy Consulting</h2>
          <p className="text-gray-600 mb-4">
            Navigate market volatility, regulatory changes, and technological disruption with robust strategies. We help define your vision, identify growth opportunities, and build resilient business models for long-term success.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Market Entry & Growth Strategy</li>
            <li>Portfolio Optimization</li>
            <li>Energy Transition Planning</li>
            <li>Regulatory Advisory</li>
          </ul>
        </div>

        {/* Operations Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-teal-600">
          <h2 className="text-2xl font-semibold mb-4 text-teal-800">Operations Improvement</h2>
          <p className="text-gray-600 mb-4">
            Enhance efficiency, reduce costs, and improve the reliability of your operations. We leverage deep industry knowledge and analytical rigor to optimize processes, supply chains, and asset management.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Process Re-engineering</li>
            <li>Supply Chain Optimization</li>
            <li>Asset Performance Management</li>
            <li>Operational Excellence Programs</li>
          </ul>
        </div>

        {/* Digital Transformation Card */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Digital Transformation</h2>
          <p className="text-gray-600 mb-4">
            Harness the power of digital technology to innovate and gain a competitive edge. We guide clients through implementing IoT, AI, data analytics, and automation to transform their business capabilities.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Digital Strategy & Roadmap</li>
            <li>Data Analytics & AI Implementation</li>
            <li>IoT Solutions for Energy</li>
            <li>Process Automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

