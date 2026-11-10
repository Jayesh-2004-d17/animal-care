import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, Headphones } from 'lucide-react';

interface ContactSectionProps {
  onSuccessToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Support & Help');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitted(true);
    onSuccessToast('Thank you! Our animal care support desk has received your inquiry.');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1.5">
            Contact Practo for Animals
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Have questions about booking, partnering your animal clinic, or emergency rescue protocols? Our support team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Helplines */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Emergency Hotline Card */}
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-rose-900">24/7 Emergency Animal Helpline</h4>
                  <span className="text-xs text-rose-700">Ambulance dispatch & trauma routing</span>
                </div>
              </div>
              <div className="text-lg font-black font-mono text-rose-900 mt-2">
                1800-PET-CARE (Toll Free)
              </div>
              <p className="text-[11px] text-rose-800 mt-1">
                Operates 365 days a year across Bangalore, Mumbai, Delhi NCR, Pune & Hyderabad.
              </p>
            </div>

            {/* General Support Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Email Support</strong>
                  <span className="text-slate-600">support@practoforanimals.com</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">Average response time: &lt; 2 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Headquarters</strong>
                  <span className="text-slate-600">Practo Animal Healthcare Tower, 12th Main, Indiranagar, Bangalore 560038</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Headphones className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Doctor & Clinic Onboarding</strong>
                  <span className="text-slate-600">partners@practoforanimals.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Delivered!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. A support executive will follow up with you on <strong>{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Fill in your details below and we will get back to you promptly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Iyer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Subject / Concern
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
                  >
                    <option value="General Support & Help">General Support & Help</option>
                    <option value="Booking Assistance">Booking Assistance</option>
                    <option value="Clinic Partnership">Clinic / Hospital Partnership Inquiry</option>
                    <option value="Report an Issue">Report an Issue with a Clinic</option>
                    <option value="Stray Animal Rescue NGO Query">Stray Animal Rescue NGO Query</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you or your pet today?..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
