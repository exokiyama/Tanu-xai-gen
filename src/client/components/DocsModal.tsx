import React from 'react';
import { X, Bot, Terminal, Shield, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-lg flex flex-col rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl text-slate-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-semibold text-white">Integration Guide</h2>
            <p className="text-xs text-slate-400">How to configure your bot session</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-4 text-xs">
          {/* Step 1 */}
          <section className="space-y-1">
            <h3 className="font-semibold text-sm text-white">1. Add Environment Variable</h3>
            <p className="text-slate-400">
              Copy your generated session string and set it as <code className="bg-slate-800 px-1 py-0.5 rounded text-cyan-400">SESSION_ID</code> in your host settings (Railway, Render, Koyeb) or local <code className="bg-slate-800 px-1 py-0.5 rounded text-slate-200">.env</code> file.
            </p>
          </section>

          {/* Step 2 */}
          <section className="space-y-1">
            <h3 className="font-semibold text-sm text-white">2. Load Session at Startup</h3>
            <p className="text-slate-400">
              In your bot entry point, decode the Base64 session string, reconstruct <code className="bg-slate-800 px-1 py-0.5 rounded text-slate-200">creds.json</code> in your local directory, and pass the authentication state into Baileys.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium text-xs rounded-lg transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
