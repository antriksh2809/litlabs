import { useState, useEffect, useRef } from "react";

const HeroWelcomeBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user has already visited
    const hasVisited = localStorage.getItem("hasVisitedLIT");
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // Auto-focus on input when modal opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      // Store user name and visited status
      localStorage.setItem("userNameLIT", userName.trim());
      localStorage.setItem("hasVisitedLIT", "true");
      setIsOpen(false);
      
      // Reload to update the header with the user's name
      window.location.reload();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userName.trim()) {
      handleSubmit(e as any);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-fadeIn">
      <div className="w-80 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-4">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-2">Welcome to L.I.T. Labs!</h3>
          <p className="text-sm mb-3">What's your name?</p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-3 py-2 text-sm rounded-full bg-white/30 border border-white/50 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm border border-white/30 disabled:opacity-50"
                disabled={!userName.trim()}
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroWelcomeBox;