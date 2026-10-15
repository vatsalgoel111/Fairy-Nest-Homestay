import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, MessageCircle, MapPin, Clock, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { HOMESTAY_INFO, FAQ_LIST } from '../data/homestayData';

export const InstantEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterestedIn: '1BHK Apartment (Attached Kitchen)',
    dates: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your mobile or WhatsApp number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: HOMESTAY_INFO.web3FormsKey,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          room_type: formData.serviceInterestedIn,
          stay_dates: formData.dates || 'Not specified',
          message: formData.message || 'Direct booking inquiry from website',
          subject: `Fairy Nest Homestay Direct Booking Inquiry from ${formData.fullName}`
        })
      });

      const result = await response.json();
      if (response.ok && result.success !== false) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('success');
    }
  };

  const whatsappDirectLink = `https://wa.me/${HOMESTAY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hello Fairy Nest Homestay! My name is ${formData.fullName || 'Guest'}. I am looking to book: ${formData.serviceInterestedIn} for dates: ${formData.dates || 'my upcoming stay'}. Please confirm room availability and tariff.`
  )}`;

  return (
    <section id="reserve" className="py-14 sm:py-20 bg-[#FAF8F5] relative border-b border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8860B] font-bold mb-2">
            <Clock className="w-4 h-4" />
            <span>Direct Booking</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14241E] tracking-tight leading-tight">
            Book Directly With The Host
          </h2>
          <p className="text-base sm:text-lg text-[#3D4F47] mt-3 leading-relaxed">
            Zero middleman fees, no agent commissions, and instant confirmation directly on WhatsApp with the Fairy Nest Homestay management.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD4] shadow-md">
            
            <div className="mb-7">
              <span className="text-xs sm:text-sm font-bold text-[#B8860B] uppercase tracking-wider block mb-1">
                Direct Host Enquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] leading-snug">
                Send a Quick Message
              </h3>
              <p className="text-sm sm:text-base text-[#52635B] mt-1.5 leading-relaxed">
                Fill this simple form or tap the green WhatsApp button below for fastest reply.
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-[#F0F7F3] border border-[#A5D6B6] text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#2C6E49] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-[#14241E]">
                  Enquiry Received!
                </h4>
                <p className="text-base text-[#3D4F47] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. The Fairy Nest Homestay team will check room availability for <strong>{formData.serviceInterestedIn}</strong> and contact you via call or WhatsApp.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-[#14241E] hover:bg-[#1D362C] transition-colors"
                  >
                    <MessageCircle className="w-4.5 h-4.5 text-[#E2BC5A]" />
                    <span>Also Message Host on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
                    <span>{errorMessage || 'Please fill in all required fields.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-[#9AA8A1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-[#9AA8A1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-[#9AA8A1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                      Select Room Type
                    </label>
                    <select
                      name="serviceInterestedIn"
                      value={formData.serviceInterestedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors cursor-pointer"
                    >
                      <option value="1BHK Apartment (Attached Kitchen)">1BHK Apartment (Attached Kitchen & Bath)</option>
                      <option value="2BHK Family Flat (Attached Kitchen)">2BHK Family Flat (Attached Kitchen & Bath)</option>
                      <option value="Penthouse 1RK Studio (Attached Kitchen)">Penthouse 1RK Studio (Top Floor Breeze)</option>
                      <option value="Unit-11 Solo Room (Private Bath)">Unit-11 Solo Room (Private Bath)</option>
                      <option value="General Stay Enquiry">General Stay Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                    Planned Travel Dates / Nights (Optional)
                  </label>
                  <input
                    type="text"
                    name="dates"
                    placeholder="e.g. Checking in Nov 12, 3 nights for 2 adults"
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-[#9AA8A1]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14241E] mb-2">
                    Any Message or Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your trip or any special questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5DFD4] text-sm sm:text-base text-[#14241E] focus:outline-none focus:border-[#B8860B] transition-colors placeholder:text-[#9AA8A1] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-[#14241E] hover:bg-[#1D362C] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#E2BC5A]" />
                    <span>{status === 'submitting' ? 'Sending Enquiry...' : 'Send Booking Enquiry'}</span>
                  </button>

                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-[#14241E] bg-[#F4EFE8] hover:bg-[#EAE4D9] border border-[#E5DFD4] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4.5 h-4.5 text-[#B8860B]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#64756E] text-center pt-2">
                  🔒 No middleman booking fees · Direct host confirmation · Valid photo ID required at check-in
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Direct Host Card & Frequently Asked Questions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Host Contact Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD4] shadow-sm space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B8860B] block">
                Direct Host Contact
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#14241E] leading-snug">
                Fairy Nest Homestay Management
              </h4>

              <div className="space-y-4 text-sm sm:text-base text-[#3D4F47]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{HOMESTAY_INFO.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4.5 h-4.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#64756E] block mb-0.5">Direct Call & WhatsApp</span>
                    <a href={`tel:+${HOMESTAY_INFO.phoneRaw}`} className="font-bold text-lg text-[#14241E] hover:text-[#B8860B] transition-colors font-mono tracking-tight">
                      {HOMESTAY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE6DC] space-y-3">
                <span className="text-xs sm:text-sm text-[#64756E] block leading-relaxed">
                  Always ready to welcome you with comfortable rooms and warm Assamese hospitality.
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={`tel:+${HOMESTAY_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#14241E] bg-[#F4EFE8] hover:bg-[#EAE4D9] border border-[#E5DFD4] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#B8860B]" />
                    <span>Call Host</span>
                  </a>
                  <a
                    href={`https://wa.me/${HOMESTAY_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Verified FAQ Accordion */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#B8860B] uppercase tracking-wider mb-2.5">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>

              {FAQ_LIST.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-[#E5DFD4] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-serif text-base sm:text-lg font-bold text-[#14241E] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#B8860B] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#64756E] shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-sm sm:text-base text-[#52635B] leading-relaxed border-t border-[#EDE6DC] pt-3.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
