import React from 'react';

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#FFE135]">Cookie Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your device when you visit our website.
              They help us provide you with a better experience by remembering your preferences
              and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p className="text-gray-300">
                  Required for the website to function properly. They enable basic features like
                  page navigation and access to secure areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p className="text-gray-300">
                  Help us understand how visitors interact with our website by collecting and
                  reporting information anonymously.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
                <p className="text-gray-300">
                  Remember your preferences to enhance your experience on our website.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="text-gray-300">
              You can control and/or delete cookies as you wish. You can delete all cookies that
              are already on your computer and you can set most browsers to prevent them from
              being placed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300">
              Some of our pages may contain content from other sites, like YouTube or Vimeo,
              which may set their own cookies. We do not control the setting of these cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};