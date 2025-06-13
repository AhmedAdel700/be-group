"use client";
import ConsultationForm from "@/components/consultation-form";

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

        <div className="md:w-[80%] mx-auto">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
