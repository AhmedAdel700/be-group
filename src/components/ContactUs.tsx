"use client";
import { useRef } from "react";
import ConsultationForm from "@/components/ConsultationForm";

export default function ContactUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    if (sectionRef.current) {
      const yOffset = -100; // Offset to account for header
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            اطلب استشارتك المجانية
          </h2>
          <p className="text-xl text-gray-600">
            تواصل معنا للحصول على استشارة مجانية وعرض مخصص لمحطتك
          </p>
        </div>

        <div className="md:w-[80%] mx-auto">
          <ConsultationForm onSuccess={scrollToTop} />
        </div>
      </div>
    </section>
  );
}
