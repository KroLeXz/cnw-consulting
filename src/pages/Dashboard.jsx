import React from 'react';
import { companyData } from '../data';
import { MapPin, Users, Globe, Briefcase, Activity, Zap, Anchor, Plane } from 'lucide-react';

// Icons mapping
const icons = {
  "NFO (Next Flight Out)": Plane,
  "OBC (On-Board Courier)": Briefcase,
  "Air Charter": Zap,
  "Maritime Logistics": Anchor,
};

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-slate-50 -skew-x-12 transform translate-x-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Client Profile</span>
            <span className="text-slate-400 text-xs uppercase tracking-wide">Last Updated: Feb 1, 2026</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            {companyData.tagline}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-6">
            {companyData.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {companyData.hq}
            </span>
            <span className="flex items-center gap-2">
              <Activity size={16} /> Est. {companyData.founded}
            </span>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {companyData.stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Col: Mission & Services */}
        <div className="lg:col-span-2 space-y-8">
          {/* Services */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <Zap className="text-red-600" size={20} /> Core Capabilities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {companyData.services.map((service, index) => {
                const Icon = icons[service.name] || Zap;
                return (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-red-200 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-red-600">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{service.name}</h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-slate-800 opacity-50">
              <Globe size={200} />
            </div>
            <h2 className="text-xl font-bold mb-4 relative z-10">Mission Statement</h2>
            <p className="text-lg text-slate-300 italic relative z-10 border-l-4 border-red-500 pl-4">
              "{companyData.mission}"
            </p>
          </div>
        </div>

        {/* Right Col: Leadership & Industries */}
        <div className="space-y-8">
          
          {/* Leadership */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <Users className="text-red-600" size={20} /> Key Leadership
            </h2>
            <div className="space-y-6">
              {companyData.leaders.map((leader, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-slate-500 text-sm">{leader.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">{leader.name}</div>
                    <div className="text-xs text-red-600 font-medium mb-1">{leader.title}</div>
                    <div className="text-xs text-slate-500 leading-tight">{leader.bio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-slate-900">Key Industries</h2>
            <div className="flex flex-wrap gap-2">
              {companyData.keyIndustries.map((ind, i) => (
                <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 border border-slate-200">
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
