import React from "react";
import RegistrationForm from "./RegistrationForm";
import HeroFrame from "@/app/assets/Section.png";

export default async function page() {
  return (
    <div className="min-h-screen bg-white">
      <main
        style={{
          backgroundImage: `url(${HeroFrame.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="px-4 xl:px-8 pt-[120px]">
          <div className="w-full mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Student Registration Form
              </h1>
              <p className="text-slate-600">
                Please fill out all required information to complete your
                registration
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </main>
    </div>
  );
}
