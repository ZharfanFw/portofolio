import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper border-t border-rule mt-auto py-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Large Statement header */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">Memento Mori</p>
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight max-w-3xl leading-none">
            THE INSTRUMENT IS DARK.<br />THE OUTPUT IS YOURS.
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-rule-2 text-xs uppercase tracking-wider text-ink-2">
          <div>
            &copy; {currentYear} Zharfan. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://github.com/zharfanfw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/zharfanfw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:zharfanfw.dev@gmail.com" 
              className="hover:text-accent transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="#home" 
              className="hover:text-accent transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
