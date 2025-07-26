'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
    const [effectiveDate, setEffectiveDate] = useState('');

    useEffect(() => {
        setEffectiveDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    return (
      <div className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
          <h1 className="font-headline text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose-lg prose-p:text-foreground/80 prose-headings:text-primary prose-headings:font-headline space-y-6 text-lg text-foreground/80">
            <p>
              Your privacy is important to us. It is Super Waterwheel's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc space-y-2 pl-8">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
  
            <h2 className="text-3xl font-bold pt-4">3. Log Files</h2>
            <p>
              Waterwheel Academy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">4. Security</h2>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">5. Links to Other Sites</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">6. Your Rights</h2>
            <p>
              You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
            </p>
  
            <h2 className="text-3xl font-bold pt-4">Contact Us</h2>
            <p>
              If you have any questions about how we handle user data and personal information, feel free to contact us.
            </p>
  
            <p className="pt-4">This policy is effective as of {effectiveDate || '...'}.</p>
          </div>
        </div>
      </div>
    );
  }
