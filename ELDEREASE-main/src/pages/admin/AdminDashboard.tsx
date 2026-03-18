import React, { useState } from 'react';
import { ClipboardList, MapPin, User, CheckCircle, Smartphone, AlertTriangle } from 'lucide-react';
import MockMap from '../../components/shared/MockMap';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<'overview' | 'jobs'>('overview');

    const pendingJobs = [
        { id: 101, type: 'SOS', elder: 'Kannan', loc: 'Anna Nagar', time: '2 mins ago', status: 'Unassigned', priority: 'high' },
        { id: 102, type: 'Medicine', elder: 'Lakshmi', loc: 'T. Nagar', time: '15 mins ago', status: 'Unassigned', priority: 'normal' },
        { id: 103, type: 'Ride', elder: 'Ramanathan', loc: 'Adyar', time: '30 mins ago', status: 'In Progress', volunteer: 'Senthil', priority: 'normal' },
    ];

    return (
        <div className="space-y-6">
            {/* Overview stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatsCard label="Active SOS" value="1" color="text-red-600 bg-red-50" icon={<AlertTriangle />} />
                <StatsCard label="Pending Requests" value="2" color="text-amber-600 bg-amber-50" icon={<ClipboardList />} />
                <StatsCard label="Active Volunteers" value="12" color="text-emerald-600 bg-emerald-50" icon={<User />} />
                <StatsCard label="Tasks Completed" value="145" color="text-blue-600 bg-blue-50" icon={<CheckCircle />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Map View */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-slate-400" />
                            Live Fleet View
                        </h3>
                        <div className="flex gap-2">
                            <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">12 Online</span>
                            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">5 Busy</span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <MockMap />
                    </div>
                </div>

                {/* Job Dispatch Panel */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
                    <div className="p-4 border-b border-slate-100">
                        <h3 className="font-semibold text-slate-800">Job Dispatch</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {pendingJobs.map(job => (
                            <div key={job.id} className={`p-4 rounded-lg border ${job.priority === 'high' ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-white'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${job.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                                        {job.type}
                                    </span>
                                    <span className="text-xs text-slate-500">{job.time}</span>
                                </div>
                                <h4 className="font-semibold text-slate-800">{job.elder}</h4>
                                <p className="text-sm text-slate-500 flex items-center gap-1 mb-3">
                                    <MapPin className="w-3 h-3" /> {job.loc}
                                </p>

                                {job.status === 'Unassigned' ? (
                                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                                        Assign Volunteer
                                    </button>
                                ) : (
                                    <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-2 rounded">
                                        <Smartphone className="w-4 h-4" />
                                        Assigned to {job.volunteer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ label, value, color, icon }: any) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
            <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
                <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${color}`}>
                {React.cloneElement(icon, { className: "w-6 h-6" })}
            </div>
        </div>
    );
}
