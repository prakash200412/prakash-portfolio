import React, { useState } from 'react';
import { MapPin, Navigation, Phone, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import MockMap from '../../components/shared/MockMap';

export default function VolunteerApp() {
    const [activeTab, setActiveTab] = useState<'feed' | 'active'>('feed');
    const [activeTask, setActiveTask] = useState<any>(null);

    const tasks = [
        {
            id: 1,
            type: 'medicine',
            title: 'Medicine Delivery',
            location: '12th Cross Street, Anna Nagar',
            distance: '0.8 km',
            earnings: '₹50',
            urgent: false,
        },
        {
            id: 2,
            type: 'sos',
            title: 'EMERGENCY HELP NEEDED',
            location: 'Main Road, Near Temple',
            distance: '0.2 km',
            earnings: 'Volunteer',
            urgent: true,
        },
        {
            id: 3,
            type: 'grocery',
            title: 'Grocery Run',
            location: 'Green Garden Apartments',
            distance: '2.5 km',
            earnings: '₹80',
            urgent: false,
        }
    ];

    const handleAccept = (task: any) => {
        setActiveTask(task);
        setActiveTab('active');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header */}
            <header className="bg-amber-500 text-white p-4 shadow-md flex justify-between items-center">
                <h1 className="font-bold text-lg">Volunteer Mate</h1>
                <div className="flex items-center gap-2">
                    <span className="text-sm bg-amber-600 px-2 py-1 rounded-full">Online</span>
                </div>
            </header>

            {/* Content */}
            <main className="flex-1 p-4 overflow-y-auto pb-20">
                {activeTab === 'feed' ? (
                    <div className="space-y-4">
                        <h2 className="font-semibold text-slate-700">Nearby Requests</h2>
                        {tasks.map((task) => (
                            <div key={task.id} className={`bg-white p-4 rounded-xl shadow-sm border-l-4 ${task.urgent ? 'border-red-500' : 'border-amber-500'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                        {task.urgent && <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />}
                                        {task.title}
                                    </h3>
                                    <span className="font-bold text-emerald-600">{task.earnings}</span>
                                </div>

                                <div className="text-sm text-slate-500 space-y-1 mb-4">
                                    <p className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {task.location}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Navigation className="w-4 h-4" />
                                        {task.distance} away
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 bg-slate-100 text-slate-600 py-2 rounded-lg font-medium text-sm">Ignore</button>
                                    <button
                                        onClick={() => handleAccept(task)}
                                        className={`flex-1 ${task.urgent ? 'bg-red-600 hover:bg-red-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white py-2 rounded-lg font-medium text-sm transition-colors`}
                                    >
                                        {task.urgent ? 'RUSH TO HELP' : 'Accept Request'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-full flex flex-col">
                        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 border border-slate-100">
                            <h2 className="font-bold text-slate-800 text-lg mb-1">{activeTask?.title}</h2>
                            <p className="text-slate-500 text-sm mb-4">{activeTask?.location}</p>

                            <div className="flex gap-4 mb-4">
                                <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call Elder
                                </button>
                                <button className="flex-1 bg-amber-50 text-amber-600 py-2 rounded-lg flex items-center justify-center gap-2">
                                    <Navigation className="w-4 h-4" />
                                    Navigate
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-200 rounded-xl overflow-hidden relative shadow-inner mb-4">
                            <MockMap />
                        </div>

                        <button
                            onClick={() => {
                                alert("Task Completed! Payment will be processed.");
                                setActiveTask(null);
                                setActiveTab('feed');
                            }}
                            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                        >
                            Mark as Completed
                        </button>
                    </div>
                )}
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 z-10">
                <button
                    onClick={() => setActiveTab('feed')}
                    className={`flex flex-col items-center ${activeTab === 'feed' ? 'text-amber-600' : 'text-slate-400'}`}
                >
                    <Clock className="w-6 h-6" />
                    <span className="text-xs mt-1">Requests</span>
                </button>
                <button
                    onClick={() => activeTask && setActiveTab('active')}
                    className={`flex flex-col items-center ${activeTab === 'active' ? 'text-amber-600' : 'text-slate-400'}`}
                >
                    <Navigation className="w-6 h-6" />
                    <span className="text-xs mt-1">Active</span>
                </button>
                <button className="flex flex-col items-center text-slate-400">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-xs mt-1">History</span>
                </button>
            </nav>
        </div>
    );
}
