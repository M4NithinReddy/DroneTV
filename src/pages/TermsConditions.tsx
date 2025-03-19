import React from 'react';

export const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#FFE135]">Terms and Conditions</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Internship Program</h2>
            <p className="text-gray-300">
              Participation in our internship program is subject to the following conditions:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Mandatory attendance for all three days of the Drone Expo</li>
              <li>Compliance with safety guidelines and regulations</li>
              <li>Proper handling of provided equipment</li>
              <li>Adherence to confidentiality agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-gray-300">
              All content on this website, including text, graphics, logos, and images, is the
              property of Drone TV and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Equipment Usage</h2>
            <p className="text-gray-300">
              Selected candidates who receive equipment support must:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Use equipment only for program-related activities</li>
              <li>Return equipment in good condition</li>
              <li>Report any damage or issues immediately</li>
              <li>Follow all safety guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300">
              Drone TV shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. Your continued use of the
              website following any changes indicates your acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};