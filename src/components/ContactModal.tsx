import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Send, Mail, Calendar, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Product Design',
    budget: '$15k - $30k',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ivan@showcasy.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-zinc-200 hover:border-zinc-900 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-zinc-950 text-white rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Message Received!
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <span className="font-semibold text-zinc-900">{formData.name || 'there'}</span>. Ivan will review your project brief and respond within 24 hours.
            </p>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-semibold transition-colors"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                <span>Start a Project</span>
                <span>·</span>
                <span className="text-emerald-600 font-semibold">Q3/Q4 Available</span>
              </div>
              <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
                Let's build something exceptional.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                Tell me about your product, timeline, or design challenges.
              </p>
            </div>

            {/* Quick Email Copy Strip */}
            <div className="mb-6 p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-zinc-700 font-mono">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>ivan@showcasy.design</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-800 text-xs font-medium transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Project Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2 font-mono">
                  Project Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Product Design', 'Design System', 'Mobile App', 'Web Redesign', 'Audit / Advisory'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.projectType === type
                          ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-950 focus:outline-none text-sm text-zinc-950 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-950 focus:outline-none text-sm text-zinc-950 transition-colors"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5 font-mono">
                  Target Budget
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['$10k - $25k', '$25k - $50k', '$50k+'].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 text-xs font-medium rounded-xl border text-center transition-all ${
                        formData.budget === b
                          ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1 font-mono">
                  Brief Overview
                </label>
                <textarea
                  id="message-input"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a few sentences about your product, desired timeline, or goals..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-950 focus:outline-none text-sm text-zinc-950 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer mt-4"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
