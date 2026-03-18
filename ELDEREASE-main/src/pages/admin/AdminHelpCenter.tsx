import React from 'react';
import { MessageSquare, Phone, CheckCircle, Clock } from 'lucide-react';

export default function AdminHelpCenter() {
    const tickets = [
        { id: 1, user: 'Rukmini Amma', type: 'App Issue', subject: 'Voice command not working', status: 'Open', time: '10 mins ago' },
        { id: 2, user: 'Volunteer David', type: 'Payment', subject: 'Payment not received for Task #1023', status: 'Open', time: '1 hour ago' },
        { id: 3, user: 'Narayanan', type: 'General', subject: 'How to change language?', status: 'Resolved', time: 'Yesterday' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Help Center & Support</h2>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    Export Report
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600">User</th>
                            <th className="p-4 font-semibold text-slate-600">Type</th>
                            <th className="p-4 font-semibold text-slate-600">Subject</th>
                            <th className="p-4 font-semibold text-slate-600">Time</th>
                            <th className="p-4 font-semibold text-slate-600">Status</th>
                            <th className="p-4 font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-medium text-slate-800">{ticket.user}</td>
                                <td className="p-4 text-slate-600">
                                    <span className="bg-slate-100 px-2 py-1 rounded text-xs font-medium">{ticket.type}</span>
                                </td>
                                <td className="p-4 text-slate-600">{ticket.subject}</td>
                                <td className="p-4 text-slate-500 text-sm flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {ticket.time}
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold border ${ticket.status === 'Open'
                                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                        }`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
