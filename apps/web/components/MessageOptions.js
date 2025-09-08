import React from 'react';

export default function MessageOptions({ onManual, onAuto, disabled }) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl shadow hover:from-green-600 hover:to-green-800 transition-colors font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={onManual}
        disabled={disabled}
        aria-label="Manual Message"
      >
        <span role="img" aria-label="Manual">✍️</span> Manual Message
      </button>
      <button
        className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition-colors font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={onAuto}
        disabled={disabled}
        aria-label="Auto Message"
      >
        <span role="img" aria-label="Auto">⚡</span> Auto Message
      </button>
    </div>
  );
}
