import React from 'react';

const icons = {
  formal: '🎩',
  casual: '😎',
  friendly: '😊',
  career: '💼',
  personal: '🏡',
  all: '🌟',
};

export default function Preferences({ preferences, onChange }) {
  return (
    <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 rounded-2xl p-8 mt-12 shadow-xl border border-blue-100 backdrop-blur-md">
      <h3 className="font-extrabold text-xl mb-6 flex items-center gap-3 text-blue-700 tracking-tight">
        <span>⚙️</span> Preferences
      </h3>
      <div className="flex flex-col gap-6">
        <label className="flex items-center gap-4">
          <span className="font-semibold text-blue-800">Tone:</span>
          <span className="text-2xl">{icons[preferences.tone]}</span>
          <select
            className="border-2 border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 shadow-sm transition-all bg-white/80"
            value={preferences.tone}
            onChange={e => onChange({ ...preferences, tone: e.target.value })}
            aria-label="Select tone"
          >
            <option value="formal">Formal 🎩</option>
            <option value="casual">Casual 😎</option>
            <option value="friendly">Friendly 😊</option>
          </select>
        </label>
        <label className="flex items-center gap-4">
          <span className="font-semibold text-blue-800">Context:</span>
          <span className="text-2xl">{icons[preferences.context]}</span>
          <select
            className="border-2 border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 shadow-sm transition-all bg-white/80"
            value={preferences.context}
            onChange={e => onChange({ ...preferences, context: e.target.value })}
            aria-label="Select context"
          >
            <option value="career">Career 💼</option>
            <option value="personal">Personal 🏡</option>
            <option value="all">All 🌟</option>
          </select>
        </label>
        <label className="flex items-center gap-4">
          <span className="font-semibold text-blue-800">Notify on job changes</span>
          <input
            type="checkbox"
            className="h-6 w-6 accent-blue-600 border-2 border-blue-200 rounded focus:ring-2 focus:ring-blue-400"
            checked={preferences.notifyJobChange}
            onChange={e => onChange({ ...preferences, notifyJobChange: e.target.checked })}
            aria-label="Notify on job changes"
          />
        </label>
      </div>
    </div>
  );
}
