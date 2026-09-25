import { useState } from "react";
import { useForm } from "@formspree/react";
import {
  Phone,
  MapPin,
  Navigation,
  Clock,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { businessInfo, treatments } from "@/data";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const [formState, handleSubmit] = useForm("xppwjkdk");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const [calendarDate, setCalendarDate] = useState(new Date());

  const [validationError, setValidationError] = useState("");

  const directionsUrl = "https://maps.app.goo.gl/KnBwHPdCbrSXHhQE9";

  const treatmentOptions = [
    ...treatments.map((t) => t.name),
    "Other / Not Sure",
  ];

  // Calendar
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  const monthName = calendarDate.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayString = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const formatDate = (day: number) => {
    const date = new Date(year, month, day);

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const displayDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Select a date";

  const isPastDate = (day: number) => {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);

    return date < today;
  };

  // Form validation
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedDate) {
      setValidationError("Please select your preferred date.");
      setDateOpen(true);
      setDropdownOpen(false);
      return;
    }

    if (!selectedTreatment) {
      setValidationError("Please select a treatment or service.");
      setDropdownOpen(true);
      setDateOpen(false);
      return;
    }

    setValidationError("");

    await handleSubmit(e);
  };

  return (
    <section id="contact" className="section-padding py-24 lg:py-36 bg-ivory">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`flex items-center justify-center gap-3 reveal ${
              isVisible ? "is-visible" : ""
            }`}>
            <span className="w-8 h-px bg-champagne" />
            <span className="eyebrow">Contact</span>
            <span className="w-8 h-px bg-champagne" />
          </div>

          <h2
            className={`font-serif text-4xl md:text-5xl text-cocoa mt-6 leading-tight reveal reveal-delay-1 ${
              isVisible ? "is-visible" : ""
            }`}>
            Visit Glow with Gull
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE */}
          <div
            className={`reveal reveal-delay-2 ${
              isVisible ? "is-visible" : ""
            }`}>
            <div className="bg-nude/20 p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-cocoa mb-6">Location</h3>

              <div className="flex gap-3 items-start mb-6">
                <MapPin
                  className="w-5 h-5 text-champagne flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />

                <address className="not-italic text-cocoa/70 leading-relaxed">
                  {businessInfo.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex gap-3 items-center mb-8">
                <Phone
                  className="w-5 h-5 text-champagne flex-shrink-0"
                  strokeWidth={1.5}
                />

                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-cocoa/70 hover:text-cocoa transition-colors duration-300">
                  {businessInfo.phoneDisplay}
                </a>
              </div>
              {/* OPENING HOURS */}
              <div className="flex gap-3 items-start mb-8">
                <Clock
                  className="w-5 h-5 text-champagne flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />

                <div className="text-cocoa/70 leading-relaxed">
                  <p className="text-cocoa font-medium mb-2">Opening Hours</p>

                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-8">
                      <span>Monday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Tuesday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Wednesday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Thursday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Friday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span>11:30 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="btn-primary !py-3">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* MAP */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 relative aspect-[16/10] bg-nude/30 overflow-hidden border border-cocoa/10 block group">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#302725 1px, transparent 1px), linear-gradient(90deg, #302725 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transition-transform duration-500 group-hover:scale-105">
                  <div className="w-14 h-14 rounded-full bg-ivory flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <MapPin
                      className="w-7 h-7 text-champagne"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="font-serif text-2xl text-cocoa">
                    Glow with Gull
                  </p>

                  <p className="text-sm text-cocoa/60 mt-1">
                    DHA Phase 6, Lahore
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs uppercase tracking-widest text-champagne">
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/5 transition-colors duration-500" />
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`reveal reveal-delay-3 ${
              isVisible ? "is-visible" : ""
            }`}>
            <h3 className="font-serif text-2xl text-cocoa mb-2">
              Request an Appointment
            </h3>

            <p className="text-sm text-cocoa/50 mb-8">
              Fill out the form below and we will get back to you to confirm
              your appointment.
            </p>

            {/* SUCCESS */}
            {formState.succeeded && (
              <div className="flex items-center gap-3 bg-sage/15 border border-sage/30 p-4 mb-6">
                <Check className="w-5 h-5 text-sage-dark flex-shrink-0" />

                <p className="text-sm text-cocoa">
                  Thank you. Your appointment request has been received. We will
                  contact you shortly.
                </p>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={submitForm} className="space-y-5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300 font-serif tracking-wide"
                  placeholder="Your full name"
                />
              </div>

              {/* PHONE + DATE */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={11}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        "",
                      );
                    }}
                    className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-colors duration-300 font-serif tracking-wide"
                    placeholder="XXXXXXXXXXX"
                  />
                </div>

                {/* DATE */}
                <div className="relative">
                  <label
                    htmlFor="date"
                    className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                    Preferred Date
                  </label>

                  <input
                    type="hidden"
                    id="date"
                    name="date"
                    value={selectedDate}
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setDateOpen(!dateOpen);
                      setDropdownOpen(false);
                      setValidationError("");
                    }}
                    className={`w-full flex items-center justify-between bg-ivory border border-cocoa/15 rounded-xl px-4 py-3.5 text-left outline-none cursor-pointer transition-all duration-300 ease-out ${
                      dateOpen
                        ? "border-champagne ring-4 ring-champagne/10 shadow-[0_6px_20px_rgba(48,39,37,0.08)]"
                        : "hover:border-champagne hover:shadow-[0_4px_16px_rgba(48,39,37,0.07)]"
                    }`}>
                    <span
                      className={`font-serif tracking-wide ${
                        selectedDate ? "text-cocoa" : "text-cocoa/40"
                      }`}>
                      {displayDate}
                    </span>

                    <ChevronDown
                      className={`w-4 h-4 text-cocoa/50 flex-shrink-0 transition-transform duration-300 ease-out ${
                        dateOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute z-50 left-0 right-0 mt-2 origin-top rounded-xl border border-cocoa/10 bg-ivory shadow-[0_10px_30px_rgba(48,39,37,0.10)] overflow-hidden transition-all duration-300 ease-out ${
                      dateOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
                    }`}>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-5">
                        <button
                          type="button"
                          onClick={() =>
                            setCalendarDate(new Date(year, month - 1, 1))
                          }
                          className="w-8 h-8 rounded-full flex items-center justify-center text-cocoa/60 hover:bg-nude/40 hover:text-cocoa">
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <h4 className="font-serif text-lg text-cocoa">
                          {monthName} {year}
                        </h4>

                        <button
                          type="button"
                          onClick={() =>
                            setCalendarDate(new Date(year, month + 1, 1))
                          }
                          className="w-8 h-8 rounded-full flex items-center justify-center text-cocoa/60 hover:bg-nude/40 hover:text-cocoa">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 mb-2">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center text-[10px] uppercase tracking-wider text-cocoa/40 py-2">
                              {day}
                            </div>
                          ),
                        )}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, index) => {
                          if (day === null) {
                            return (
                              <div key={`empty-${index}`} className="h-9" />
                            );
                          }

                          const value = formatDate(day);
                          const isSelected = selectedDate === value;
                          const past = isPastDate(day);
                          const isToday = value === todayString;

                          return (
                            <button
                              key={day}
                              type="button"
                              disabled={past}
                              onClick={() => {
                                setSelectedDate(value);
                                setDateOpen(false);
                                setValidationError("");
                              }}
                              className={`h-9 w-full rounded-lg text-sm font-serif transition-all duration-200 ${
                                past
                                  ? "text-cocoa/20 cursor-not-allowed"
                                  : "text-cocoa hover:bg-nude/40 hover:scale-105"
                              } ${
                                isSelected ? "bg-champagne text-cocoa" : ""
                              } ${
                                isToday && !isSelected
                                  ? "border border-champagne/60"
                                  : ""
                              }`}>
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TREATMENT */}
              <div className="relative">
                <label
                  htmlFor="service"
                  className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                  Treatment / Service
                </label>

                <input
                  type="hidden"
                  id="service"
                  name="service"
                  value={selectedTreatment}
                />

                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(!dropdownOpen);
                    setDateOpen(false);
                    setValidationError("");
                  }}
                  className={`w-full flex items-center justify-between bg-ivory border border-cocoa/15 rounded-xl px-4 py-3.5 text-left outline-none cursor-pointer transition-all duration-300 ease-out ${
                    dropdownOpen
                      ? "border-champagne ring-4 ring-champagne/10"
                      : "hover:border-champagne"
                  }`}>
                  <span
                    className={`font-serif tracking-wide ${
                      selectedTreatment ? "text-cocoa" : "text-cocoa/40"
                    }`}>
                    {selectedTreatment || "Select a treatment"}
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-cocoa/50 transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute z-50 left-0 right-0 mt-2 rounded-xl border border-cocoa/10 bg-ivory shadow-[0_10px_30px_rgba(48,39,37,0.10)] overflow-hidden transition-all duration-300 ${
                    dropdownOpen
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
                  }`}>
                  <div className="p-1.5">
                    {treatmentOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedTreatment(option);
                          setDropdownOpen(false);
                          setValidationError("");
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-serif tracking-wide text-cocoa hover:bg-nude/40 hover:pl-5 transition-all duration-200 ${
                          selectedTreatment === option ? "bg-nude/30" : ""
                        }`}>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* VALIDATION ERROR */}
              {validationError && (
                <p className="text-sm text-red-600">{validationError}</p>
              )}

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-cocoa/60 mb-2">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-cocoa/20 py-3 text-cocoa placeholder-cocoa/30 focus:border-champagne outline-none transition-all duration-300 ease-out resize-none font-serif tracking-wide leading-relaxed"
                  placeholder="Any specific concerns or requests"
                />
              </div>

              {/* FORM ERROR */}
              {formState.errors && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please check your information and try
                  again.
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={formState.submitting}
                className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                {formState.submitting ? "Sending..." : "Request Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
