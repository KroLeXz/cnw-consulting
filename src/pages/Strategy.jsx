import React from 'react';
import { Target, Cpu, BrainCircuit, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Strategy() {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Strategic Vision: "Augmented Intelligence"</h1>
        <p className="text-lg text-slate-600">
          We are not replacing the human operator. We are building them an <span className="font-bold text-red-600">Iron Man Suit</span>.
          The goal is to scale the "Personal Touch" without linearly scaling headcount.
        </p>
      </div>

      {/* The Core Pivot */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="text-red-400 font-bold tracking-widest uppercase text-sm mb-2">The Winning Narrative</div>
            <h2 className="text-3xl font-bold mb-4">Evolution, Not Revolution.</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              CNW's premium brand is built on reliability and human accountability. 
              Pure automation feels cheap and risky. "Augmented Intelligence" feels premium and powerful.
              We position AI as a tool that handles the data chaos so the operators can handle the client relationship.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
            <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">The Pitch to the Board</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Reduce NFO routing time from 15m to 30s</span></li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Eliminate manual data entry errors in Customs</span></li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Retain "Tribal Knowledge" before experts retire</span></li>
              <li className="flex gap-2"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Zero disruption to current Ops workflow</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Pillar 1 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <BrainCircuit size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">1. Ops Knowledge Base</h3>
          <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">The "Quick Win"</div>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            A RAG (Retrieval-Augmented Generation) chatbot indexing 2 years of emails and SOPs.
          </p>
          <div className="text-xs bg-slate-50 p-3 rounded text-slate-600 border border-slate-100">
            <strong>User Story:</strong> "How do I clear medical devices through Mumbai customs on a Sunday?"
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <Target size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">2. NFO Routing Copilot</h3>
          <div className="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wide">High Value / Mid Term</div>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            An assistant that instantly cross-references flight tables, courier availability, and historical delays.
          </p>
          <div className="text-xs bg-slate-50 p-3 rounded text-slate-600 border border-slate-100">
            <strong>User Story:</strong> "Find the safest route from JFK to SIN leaving in 4 hours."
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <Search size={24} />
          </div>
          <h3 className="font-bold text-lg text-slate-900 mb-2">3. Disruption Predictor</h3>
          <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Long Term Vision</div>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Early warning system scanning news/weather to predict delays *before* they happen.
          </p>
          <div className="text-xs bg-slate-50 p-3 rounded text-slate-600 border border-slate-100">
            <strong>User Story:</strong> "Alert: Strike at LHR likely in 48h. Re-route shipment #992 via LGW."
          </div>
        </div>
      </div>

      {/* The Roadmap */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <h3 className="text-xl font-bold mb-6">The "First 90 Days" Roadmap</h3>
        <div className="relative border-l-2 border-slate-200 ml-3 space-y-8">
          
          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white ring-2 ring-slate-100"></div>
            <h4 className="font-bold text-slate-900">Month 1: Discovery & Audit</h4>
            <p className="text-sm text-slate-500 mt-1">
              Deep dive into data quality. Identify the "Gatekeepers". Map the "Life of a Package".
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-2 ring-blue-100"></div>
            <h4 className="font-bold text-blue-600">Month 2: The "Quick Win" Build</h4>
            <p className="text-sm text-slate-500 mt-1">
              Develop the **Ops Knowledge Base** (MVP). Ingest clean subset of data.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-white ring-2 ring-slate-100"></div>
            <h4 className="font-bold text-slate-900">Month 3: Pilot & Internal PR</h4>
            <p className="text-sm text-slate-500 mt-1">
              Release tool to 5 friendly agents. Gather testimonials. Present "Win" to CEO.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
