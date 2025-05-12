import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assuming shadcn/ui

const CaseStudiesPage: React.FC = () => {

  // Placeholder data - replace with actual anonymized case studies later
  const caseStudies = [
    {
      title: "Strategic Repositioning for a Renewable Energy Developer",
      challenge: "A mid-sized renewable energy developer faced increasing competition and margin pressure. They needed to redefine their growth strategy and identify new market segments to ensure long-term viability and attract further investment in a rapidly evolving landscape.",
      approach: "Nova Associates conducted a comprehensive market analysis, competitor benchmarking, and internal capability assessment. We facilitated strategic workshops with the leadership team to define a new value proposition focused on integrated energy solutions and long-term partnerships. We developed a phased market entry plan for adjacent sectors and identified key technology partnerships.",
      impact: "The client successfully pivoted its strategy, securing two major contracts in a new market segment within 12 months. Investor confidence increased, leading to a successful funding round that exceeded targets by 15%. The redefined focus improved internal alignment and resource allocation."
    },
    {
      title: "Operational Efficiency Enhancement for a Utility Provider",
      challenge: "An established utility provider struggled with aging infrastructure, siloed operations, and rising maintenance costs. Regulatory pressure to improve grid reliability and customer satisfaction demanded significant operational improvements without substantial rate increases.",
      approach: "Our team deployed advanced diagnostic tools to map end-to-end processes and identify key bottlenecks in asset management and field service operations. We implemented a predictive maintenance program leveraging sensor data and AI, optimized crew scheduling, and streamlined supply chain logistics for critical components. Change management support ensured smooth adoption by field teams.",
      impact: "Achieved a 20% reduction in unplanned outages within the first year. Maintenance costs decreased by 12% through optimized scheduling and predictive interventions. Customer satisfaction scores related to reliability improved significantly, meeting regulatory targets."
    },
    {
      title: "Digital Platform Implementation for an Energy Trader",
      challenge: "A growing energy trading firm relied on disparate legacy systems and manual processes, limiting their ability to react quickly to market volatility and scale operations. They needed a unified digital platform to enhance trading capabilities, improve risk management, and ensure regulatory compliance.",
      approach: "Nova Associates defined the requirements for a new Energy Trading and Risk Management (ETRM) platform, evaluated vendor solutions, and managed the implementation process. We focused on integrating real-time data feeds, automating reporting workflows, and establishing robust risk controls. We also provided training and support to ensure user adoption.",
      impact: "The new platform enabled a 30% increase in trading volume capacity. Real-time risk exposure monitoring significantly improved decision-making. Automated compliance reporting reduced manual effort by 40%, freeing up analysts for higher-value activities."
    }
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <section className="text-center pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Demonstrating Impact in the Energy Sector
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          These examples showcase our approach and the value we create across Strategy, Operations, and Digital Transformation within the energy sector.
        </p>
      </section>

      <section className="space-y-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-2xl text-blue-700">{study.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Our Approach</h3>
                <p className="text-gray-700 leading-relaxed">{study.approach}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Results & Impact</h3>
                <p className="text-gray-700 leading-relaxed">{study.impact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center pt-12 border-t border-gray-200">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          These examples represent the types of complex challenges Nova Associates is equipped to handle. We invite you to contact us to discuss how we can help your organization achieve similar impactful results.
        </p>
      </section>
    </div>
  );
};

export default CaseStudiesPage;

