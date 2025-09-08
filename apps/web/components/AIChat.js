import React, { useState } from 'react';

export default function AIChat({ contact, onAsk, chatHistory, loading }) {
  const [question, setQuestion] = useState('');

  const handleAsk = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onAsk(question);
      setQuestion('');
    }
  };

  return (
    <div className="mt-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-blue-100 transition-all">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-700">
        <span role="img" aria-label="AI">🤖</span> Ask the AI about <span className="text-blue-900">{contact.name}</span>
      </h3>
      <form onSubmit={handleAsk} className="flex gap-2 mb-4">
        <input
          className="flex-1 border-2 border-blue-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 shadow-sm transition-all"
          type="text"
          placeholder="Ask why or what to message..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          disabled={loading}
          aria-label="Ask the AI"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-xl shadow hover:from-blue-600 hover:to-blue-800 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        >
          <span className="flex items-center gap-1">Ask <span aria-hidden>💬</span></span>
        </button>
      </form>
      <div className="space-y-3">
        {chatHistory.map((entry, idx) => (
          <div key={idx} className="bg-blue-50/80 rounded-xl p-3 shadow flex flex-col gap-1 animate-fade-in">
            <div className="text-sm text-gray-700 flex items-center gap-1"><span className="font-bold">You:</span> {entry.question}</div>
            <div className="text-sm text-blue-800 flex items-center gap-1"><span className="font-bold">AI:</span> {entry.answer}</div>
          </div>
        ))}
        {loading && <div className="text-blue-400 animate-pulse">AI is thinking...</div>}
      </div>
    </div>
  );
}
