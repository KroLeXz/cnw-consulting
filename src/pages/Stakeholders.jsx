import React from 'react';
import { User, Shield, Briefcase, HelpCircle } from 'lucide-react';

const StakeholderCard = ({ name, role, type, agenda, notes }) => {
  const typeColors = {
    champion: "border-green-500 bg-green-50",
    blocker: "border-red-500 bg-red-50",
    neutral: "border-slate-300 bg-white",
    decision_maker: "border-blue-500 bg-blue-50"
  };

  const icons = {
    champion: Shield,
    blocker: AlertTriangle, // Assuming you have this imported or similar
    neutral: HelpCircle,
    decision_maker: Briefcase
  };
  
  // Fallback for missing icon
  const Icon = icons[type] || User;

  return (
    <div className={`border-l-4 rounded-r-lg shadow-sm p-5 ${typeColors[type] || 'border-slate-300 bg-white'}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-slate-900 text-lg">{name}</h3>
          <div className="text-xs uppercase tracking-wide font-semibold opacity-75">{role}</div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-bold uppercase ${type === 'champion' ? 'bg-green-200 text-green-800' : type === 'blocker' ? 'bg-red-200 text-red-800' : 'bg-slate-200 text-slate-700'}`}>
          {type.replace('_', ' ')}
        </div>
      </div>
      
      <div className="space-y-3 mt-4">
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase">Their Agenda</div>
          <p className="text-sm text-slate-700 leading-snug">{agenda}</p>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase">Consulting Note</div>
          <p className="text-sm italic text-slate-600">"{notes}"</p>
        </div>
      </div>
    </div>
  );
};
import { AlertTriangle } from 'lucide-react';

export default function Stakeholders() {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Stakeholder Map</h1>
        <p className="text-slate-600">
          Understanding the players is more important than the technology. Update this after your first meeting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        <StakeholderCard 
          name="The CTO (Your Friend)"
          role="Chief Technology Officer"
          type="champion"
          agenda="Needs a 'First 90 Days' win to prove value to the Board. Wants modernization but fears breaking legacy Ops."
          notes="He is your entry point. Make him look like the hero. Do not let him over-promise."
        />

        <StakeholderCard 
          name="Elazar Grinstein"
          role="President & Founder"
          type="decision_maker"
          agenda="Protecting the 'Personal Touch' brand. Likely skeptical of 'robots' handling his VIP clients."
          notes="Pitch AI as 'Augmented Intelligence' (Iron Man suit) ONLY. Never imply replacing people."
        />

        <StakeholderCard 
          name="The 'Ops Gatekeeper' (Unknown)"
          role="Head of Operations / Veteran"
          type="blocker"
          agenda="Keeping the status quo because 'it works'. Fears new tech will slow them down or crash."
          notes="DANGER. You must find this person immediately. Ask their advice. Make them feel involved, or they will kill the project."
        />

        <StakeholderCard 
          name="The CFO"
          role="Chief Financial Officer"
          type="neutral"
          agenda="Cost control. ROI. 'Why are we spending money on this?'"
          notes="Prepare a clear business case for the 'Quick Win'. Show how automating data entry saves X hours = $Y."
        />

      </div>
    </div>
  );
}
