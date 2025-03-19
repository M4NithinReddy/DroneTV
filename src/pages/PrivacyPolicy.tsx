import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#FFE135]">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Name and contact information</li>
              <li>Portfolio and work samples</li>
              <li>Application details for internships</li>
              <li>Device and usage information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300">We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Process your internship applications</li>
              <li>Communicate with you about opportunities</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-gray-300">
              We do not sell or rent your personal information to third parties. We may share your
              information with trusted partners who assist us in operating our website and conducting
              our internship program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@dronetv.in
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};