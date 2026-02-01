import React from 'react';

const SWOTCard = ({ title, type, items }) => {
  const colors = {
    Strengths: "bg-green-50 border-green-200 text-green-800",
    Weaknesses: "bg-red-50 border-red-200 text-red-800",
    Opportunities: "bg-blue-50 border-blue-200 text-blue-800",
    Threats: "bg-amber-50 border-amber-200 text-amber-800",
  };

  return (
    <div className={`p-6 rounded-xl border ${colors[type] || 'bg-white'} h-full`}>
      <h3 className="text-lg font-bold uppercase tracking-wider mb-4 opacity-80">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm font-medium leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SWOT() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Initial SWOT Hypothesis</h1>
        <p className="text-slate-600">
          Based on initial research. Validate these assumptions during your discovery phase.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <SWOTCard 
          type="Strengths"
          title="Strengths (Internal)"
          items={[
            "Premium Brand Reputation ('Failure is not an option').",
            "High-touch 'Personal Service' differentiates from FedEx/DHL.",
            "Deep expertise in complex industries (Semi, Aero, Auto).",
            "Global network of 21+ offices and trusted local partners.",
            "Agile decision making compared to massive logistics giants."
          ]}
        />
        <SWOTCard 
          type="Weaknesses"
          title="Weaknesses (Internal)"
          items={[
            "Likely reliance on manual processes & 'Tribal Knowledge'.",
            "Data likely siloed in emails/legacy ERPs (hard to access).",
            "Scaling requires hiring more humans (linear cost growth).",
            "Potential resistance to change from veteran Ops staff.",
            "Lack of a unified 'Single Source of Truth' digital platform."
          ]}
        />
        <SWOTCard 
          type="Opportunities"
          title="Opportunities (External)"
          items={[
            "AI 'Co-Pilots' to augment human speed without replacing them.",
            "Predictive Logistics: Selling 'reliability' by predicting delays.",
            "Market demand for supply chain resilience (post-COVID).",
            "Capturing unstructured data (emails) to automate entry.",
            "Becoming the 'Premium Tech-Enabled' player in the niche."
          ]}
        />
        <SWOTCard 
          type="Threats"
          title="Threats (External)"
          items={[
            "Commoditization of logistics pressing on margins.",
            "Big players (DHL/FedEx) improving their 'Special Services'.",
            "Geopolitical instability disrupting global routes.",
            "Talent drain: Losing key experts (and their knowledge).",
            "Cybersecurity risks as they digitize sensitive client data."
          ]}
        />
      </div>
    </div>
  );
}
