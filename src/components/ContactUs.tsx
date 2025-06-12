"use client";
import ConsultationForm from "@/components/consultation-form";
import ContactForm from "@/components/contact-form";
export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            اطلب استشارتك المجانية
          </h2>
          <p className="text-xl text-gray-600">
            تواصل معنا للحصول على استشارة مجانية وعرض مخصص لمحطتك
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="h-full">
            <ConsultationForm />
          </div>
          <div className="h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
