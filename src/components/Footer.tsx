import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        <p>&copy; {currentYear} Nova Associates. All rights reserved.</p>
        {/* Optional: Add links to privacy policy, terms, etc. later */}
        {/* <div className="mt-2">
          <a href="#" className="hover:text-blue-600 mx-2">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-blue-600 mx-2">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

