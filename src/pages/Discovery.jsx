import React, { useState } from 'react';
import { ClipboardList, MessageCircle, AlertTriangle, Eye, Database } from 'lucide-react';

const AuditItem = ({ question, script, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className={`mb-4 border rounded-lg transition-all ${checked ? 'bg-slate-50 border-slate-200 opacity-75' : 'bg-white border-slate-200 hover:border-red-200 hover:shadow-sm'}`}>
      <div className="p-4 flex items-start gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div 
          className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 text-transparent hover:border-green-400'}`}
          onClick={(e) => { e.stopPropagation(); setChecked(!checked); }}
        >
          ✓
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
              type === 'OBSERVATION' ? 'bg-blue-100 text-blue-700' : 
              type === 'HARD_QUESTION' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
            }`}>
              {type.replace('_', ' ')}
            </span>
          </div>
          <h3 className={`font-medium text-slate-900 ${checked ? 'line-through text-slate-400' : ''}`}>{question}</h3>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          {isOpen ? 'Close' : 'View Script'}
        </button>
      </div>
      
      {isOpen && (
        <div className="px-4 pb-4 pl-14">
          <div className="bg-slate-800 text-slate-200 p-4 rounded-lg text-sm font-mono leading-relaxed relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg"></div>
            <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Suggested Script</div>
            "{script}"
          </div>
        </div>
      )}
    </div>
  );
};

export default function Discovery() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Discovery & Audit Checklist</h1>
        <p className="text-slate-600">
          Use this interactive checklist during your walkthrough. Don't be afraid to ask the hard questions—that's why you are the consultant.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* Section 1: The Walkthrough */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Eye className="text-blue-600" /> Observation Phase
          </h2>
          <AuditItem 
            type="OBSERVATION"
            question="Trace the 'Life of a Package'"
            script="I'd love to see a real NFO shipment happen right now. Can we sit with an agent and watch them handle a request from start to finish? I want to see every screen they open."
          />
          <AuditItem 
            type="OBSERVATION"
            question="Identify the 'Swivel Chair' Friction"
            script="(Watch for: Copy-pasting data between systems, using personal Excel sheets, writing on sticky notes, or calling people to get info that should be in the system.)"
          />
           <AuditItem 
            type="OBSERVATION"
            question="Map the Communication Chaos"
            script="How many emails/calls does one shipment generate? (Look at their inbox volume. If it's 50 emails per shipment, that's our automation target.)"
          />
        </div>

        {/* Section 2: The Tech Audit */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Database className="text-purple-600" /> Technical Reality Check
          </h2>
          <AuditItem 
            type="HARD_QUESTION"
            question="The Data Integrity Test"
            script="Be honest with me—if I asked for a clean CSV of all shipments delayed by weather in 2024, could you generate that in 10 minutes? Or would it take a week of manual compiling?"
          />
          <AuditItem 
            type="HARD_QUESTION"
            question="The Legacy Debt"
            script="What is the one system or server in this building that you are terrified to touch because it might break everything? The 'Do Not Touch' box."
          />
        </div>

        {/* Section 3: The Politics */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" /> Political Landscape
          </h2>
          <AuditItem 
            type="HARD_QUESTION"
            question="Identify the 'Gatekeeper'"
            script="Who is the veteran in Ops that everyone goes to for answers? The person who knows where all the bodies are buried. I need to meet them and win them over first."
          />
           <AuditItem 
            type="HARD_QUESTION"
            question="The 'Hair on Fire' Problem"
            script="What is the one specific problem that wakes the CEO up at 3 AM? Not 'efficiency' in general, but the specific nightmare scenario we need to solve first."
          />
        </div>

      </div>
    </div>
  );
}
