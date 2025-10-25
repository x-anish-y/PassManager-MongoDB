import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-gray-400 py-3 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <p className="text-sm">
          Created by <span className="text-[#8267ff] font-medium">Anish</span>
        </p>
        <a
          href="https://www.linkedin.com/in/anish-sasmal-685081330/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5] transition-all"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
            alt="LinkedIn"
            className="w-5 h-5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
