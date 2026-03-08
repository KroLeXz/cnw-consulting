import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Target, ClipboardList, Users, ShieldAlert, ChevronRight, Menu, X } from 'lucide-react';

const SidebarItem = ({ to, icon: Icon, label, exact, onClick }) => (
  <NavLink
    to={to}
    end={exact}
    onClick={onClick}
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
    {/* Active indicator dot - Desktop only */}
    <span className={({ isActive }) => isActive ? "ml-auto hidden md:block" : "hidden"}>
        <ChevronRight size={16} />
    </span>
  </NavLink>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="font-extrabold text-lg">CNW <span className="text-slate-500">Global</span></div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:h-screen md:overflow-y-auto flex flex-col
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-6 hidden md:block">
          <div className="text-red-500 font-bold tracking-wider text-xs uppercase mb-1">Consultant Mode</div>
          <div className="text-white text-xl font-extrabold tracking-tight">CNW <span className="text-slate-500">Global</span></div>
        </div>

        {/* Mobile-only spacer for the header */}
        <div className="md:hidden h-16"></div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mt-4 mb-2">Public Profile</div>
          <SidebarItem to="/" icon={LayoutDashboard} label="Company Overview" exact onClick={() => setIsOpen(false)} />
          
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mt-8 mb-2">Consulting Tools</div>
          <SidebarItem to="/strategy" icon={Target} label="Strategy & Vision" onClick={() => setIsOpen(false)} />
          <SidebarItem to="/discovery" icon={ClipboardList} label="Audit Checklist" onClick={() => setIsOpen(false)} />
          <SidebarItem to="/swot" icon={ShieldAlert} label="SWOT Analysis" onClick={() => setIsOpen(false)} />
          <SidebarItem to="/stakeholders" icon={Users} label="Stakeholder Map" onClick={() => setIsOpen(false)} />
        </nav>

        <div className="p-6 mt-auto">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-xs text-slate-400 mb-2">Next Milestone</div>
            <div className="text-sm font-bold text-white">CTO Walkthrough</div>
            <div className="text-xs text-red-400 mt-1">Feb 2026</div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}