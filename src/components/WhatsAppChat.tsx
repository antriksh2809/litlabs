import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-24 right-6 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.button
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-green-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </motion.div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Chat Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold">L.I.T. Labs Support</h3>
                <p className="text-xs text-green-100">Typically replies within an hour</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-green-100"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg rounded-bl-none max-w-[80%]">
                <p className="text-sm">Hello! 👋 How can we help you today?</p>
                <p className="text-xs text-gray-500 mt-1">10:00 AM</p>
              </div>

              <div className="bg-green-100 p-3 rounded-lg rounded-br-none max-w-[80%] ml-auto">
                <p className="text-sm">I'd like to know more about your AI & Robotics Lab program.</p>
                <p className="text-xs text-gray-500 mt-1 text-right">10:02 AM</p>
              </div>

              <div className="bg-white p-3 rounded-lg rounded-bl-none max-w-[80%]">
                <p className="text-sm">Sure! Our AI & Robotics Lab is a comprehensive solution for schools that includes:</p>
                <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                  <li>Complete lab infrastructure setup</li>
                  <li>100+ projects curriculum</li>
                  <li>Teacher training & certification</li>
                  <li>Ongoing technical support</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">10:03 AM</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default WhatsAppChat;