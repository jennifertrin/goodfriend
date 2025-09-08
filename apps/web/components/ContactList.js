import React from 'react';

export default function ContactList({ contacts, onSelect }) {
  if (!contacts || contacts.length === 0) {
    return <div className="text-gray-400 italic text-center py-8">No contacts to show.</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-6">
      {contacts.map((contact) => {
        const initials = contact.name.split(' ').map(n => n[0]).join('').toUpperCase();
        return (
          <div
            key={contact.id}
            className="flex items-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 p-5 gap-5 cursor-pointer hover:bg-blue-50/80 group focus-within:ring-2 focus-within:ring-blue-400"
            tabIndex={0}
            aria-label={`View details for ${contact.name}`}
            onClick={() => onSelect(contact)}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center text-2xl font-extrabold text-white shadow-inner border-4 border-white group-hover:scale-105 transition-transform">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-gray-900 text-lg truncate flex items-center gap-2">
                <span className="inline-block align-middle">{contact.name}</span>
                <span className="ml-1 text-blue-400 text-base" title="Contact">👤</span>
              </div>
              <div className="text-gray-500 text-sm truncate">Last messaged: {contact.lastMessaged || 'Never'}</div>
            </div>
            <button
              className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={e => { e.stopPropagation(); onSelect(contact); }}
              tabIndex={0}
              aria-label={`View ${contact.name}`}
            >
              <span className="flex items-center gap-1">View <span aria-hidden>→</span></span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
