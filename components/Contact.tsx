"use client";

import { PORTFOLIO_DATA } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              I'm always open to discussing projects, cybersecurity operations, or partnership opportunities. 
              <br/><br/>
              <strong className="text-white">If you'd like to book a web development package, please reach out to me through any of the platforms below:</strong>
            </p>
            
            <div className="flex flex-col gap-6">
              {PORTFOLIO_DATA.contact.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors w-fit"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-400">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-400">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400">
                Message
              </label>
              <textarea 
                id="message"
                rows={5}
                className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-4 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
