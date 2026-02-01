import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Target, ClipboardList, Users, ShieldAlert, ChevronRight } from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label, exact }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive 
          ? 'bg-red-600 text-white shadow-md' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`
    }
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
    {/* Active indicator dot */}
    <NavLink to={to} end={exact} className={({ isActive }) => isActive ? "ml-auto" : "hidden"}>
        <ChevronRight size={16} />
    </NavLink>
  </NavLink>
);

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 min-h-screen flex flex-col border-r border-slate-800 fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6">
        <div className="text-red-500 font-bold tracking-wider text-xs uppercase mb-1">Consultant Mode</div>
        <div className="text-white text-xl font-extrabold tracking-tight">CNW <span className="text-slate-500">Global</span></div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mt-4 mb-2">Public Profile</div>
        <SidebarItem to="/" icon={LayoutDashboard} label="Company Overview" exact />
        
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mt-8 mb-2">Consulting Tools</div>
        <SidebarItem to="/strategy" icon={Target} label="Strategy & Vision" />
        <SidebarItem to="/discovery" icon={ClipboardList} label="Audit Checklist" />
        <SidebarItem to="/swot" icon={ShieldAlert} label="SWOT Analysis" />
        <SidebarItem to="/stakeholders" icon={Users} label="Stakeholder Map" />
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
          <div className="text-xs text-slate-400 mb-2">Next Milestone</div>
          <div className="text-sm font-bold text-white">CTO Walkthrough</div>
          <div className="text-xs text-red-400 mt-1">Feb 2026</div>
        </div>
      </div>
    </div>
  );
}
