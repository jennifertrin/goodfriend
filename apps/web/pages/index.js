import React, { useState } from 'react';
import Head from 'next/head';
import ContactList from '../components/ContactList';
import AIChat from '../components/AIChat';
import MessageOptions from '../components/MessageOptions';
import Preferences from '../components/Preferences';

const mockContacts = [
  { id: '1', name: 'Alex Johnson', lastMessaged: '2025-04-01', highlights: ['Started new job at Acme Corp.'] },
  { id: '2', name: 'Jamie Lee', lastMessaged: '2025-03-15', highlights: ['Moved to San Francisco.'] },
  { id: '3', name: 'Morgan Smith', lastMessaged: null, highlights: ['Graduated from university.'] },
];

function monthsSince(dateStr) {
  if (!dateStr) return 999;
  const then = new Date(dateStr);
  const now = new Date();
  return (now.getFullYear() - then.getFullYear()) * 12 + (now.getMonth() - then.getMonth());
}


export default function Home() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    tone: 'formal',
    context: 'all',
    notifyJobChange: true,
  });
  const [notification, setNotification] = useState(null);
  const [messageDraft, setMessageDraft] = useState('');
  const [autoMessage, setAutoMessage] = useState('');

  // Filter contacts not messaged in 3+ months
  const contactsToShow = mockContacts.filter(c => monthsSince(c.lastMessaged) >= 3);

  const handleSelect = (contact) => {
    setSelectedContact(contact);
    setChatHistory([]);
    setMessageDraft('');
    setAutoMessage('');
  };

  // Simulate NLPWeb API call
  const handleAsk = async (question) => {
    setLoading(true);
    let answer = '';
    if (question.toLowerCase().includes('why')) {
      answer = `You haven't messaged ${selectedContact.name} in a while. Notable: ${selectedContact.highlights.join(', ')}`;
    } else if (question.toLowerCase().includes('what')) {
      answer = `You could mention: ${selectedContact.highlights.join(', ')}.`;
    } else {
      answer = `Try asking about their recent highlights or why they are suggested.`;
    }
    setChatHistory(h => [...h, { question, answer }]);
    setLoading(false);
  };

  // Simulate auto message generation
  const handleAutoMessage = () => {
    let msg = `Hi ${selectedContact.name},`;
    if (preferences.tone === 'formal') {
      msg += ' I hope this message finds you well.';
    } else if (preferences.tone === 'casual') {
      msg += ' Long time no talk!';
    } else {
      msg += ' Just wanted to check in!';
    }
    if (preferences.context === 'career' || preferences.context === 'all') {
      msg += ` Congrats on your recent career highlight: ${selectedContact.highlights[0]}.`;
    }
    if (preferences.context === 'personal' || preferences.context === 'all') {
      msg += ` Hope all is well personally too!`;
    }
    setAutoMessage(msg);
  };

  // Simulate notification for job change
  React.useEffect(() => {
    if (preferences.notifyJobChange && selectedContact && selectedContact.highlights.some(h => h.toLowerCase().includes('job'))) {
      setNotification(`Job change detected for ${selectedContact.name}. Consider reaching out!`);
    } else {
      setNotification(null);
    }
  }, [preferences, selectedContact]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 to-blue-200/80">
      <Head>
        <title>Be A Good Friend</title>
      </Head>
      {/* Header Bar */}
      <header className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-6 shadow-lg mb-10 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3 drop-shadow-lg">
            🤝 Be A Good Friend
          </h1>
          <span className="text-blue-100 font-medium text-sm hidden md:block">AI-powered connection assistant</span>
        </div>
      </header>
      <main className="max-w-2xl mx-auto pb-12 px-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-blue-100 transition-all">
          <h2 className="text-2xl font-extrabold mb-8 text-blue-700 flex items-center gap-3 tracking-tight">
            <span>📇</span> Contacts to Reconnect
          </h2>
          <ContactList contacts={contactsToShow} onSelect={handleSelect} />
          {selectedContact && (
            <section className="mt-12 border-t border-blue-100 pt-10">
              <h3 className="font-extrabold text-xl mb-4 text-blue-800 flex items-center gap-3 tracking-tight">
                <span>👤</span> {selectedContact.name}'s Highlights
              </h3>
              <ul className="list-disc ml-6 mb-6 text-blue-900 space-y-1">
                {selectedContact.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
              {notification && (
                <div className="bg-yellow-50/80 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6 rounded-xl flex items-center gap-3 animate-pulse shadow">
                  <span>🔔</span> {notification}
                </div>
              )}
              <MessageOptions
                onManual={() => setMessageDraft('')}
                onAuto={handleAutoMessage}
                disabled={loading}
              />
              {autoMessage && (
                <div className="bg-gradient-to-r from-blue-100/80 to-blue-200/80 border-l-4 border-blue-400 text-blue-900 p-5 mt-5 rounded-2xl shadow-lg">
                  <div className="font-bold mb-2 flex items-center gap-2 text-blue-700">🤖 Auto-generated Message:</div>
                  <div className="whitespace-pre-line text-base">{autoMessage}</div>
                </div>
              )}
              <div className="mt-8">
                <label className="block font-semibold mb-2 text-blue-800">Manual Message:</label>
                <textarea
                  className="w-full border-2 border-blue-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-300 shadow-sm text-base transition-all"
                  rows={3}
                  value={messageDraft}
                  onChange={e => setMessageDraft(e.target.value)}
                  placeholder="Type your message here..."
                  aria-label="Manual message"
                />
              </div>
              <div className="mt-10">
                <AIChat
                  contact={selectedContact}
                  onAsk={handleAsk}
                  chatHistory={chatHistory}
                  loading={loading}
                />
              </div>
            </section>
          )}
          <Preferences preferences={preferences} onChange={setPreferences} />
        </div>
        {/* Footer */}
        <footer className="mt-14 text-center text-blue-400 text-xs opacity-80">
          &copy; {new Date().getFullYear()} Be A Good Friend. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
