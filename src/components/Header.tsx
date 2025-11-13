import { useState, useEffect } from "react";
import { ShoppingCart, Search, User, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";
import BookDemoDialog from "./BookDemoDialog";
import menuData from "@/data/menu.json";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="flex items-center justify-between h-24 md:h-28 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-18 h-18 md:w-20 md:h-20 flex items-center justify-center border-2 border-[#3BBBF0] rounded-xl group-hover:scale-105 transition-transform">
            <img 
              src="/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png" 
              alt="L.I.T. Labs Logo" 
              className="h-[90%] w-[90%] object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-foreground">
            L.I.T. LABS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuData.megaMenu.map((item) => (
            item.columns ? (
              <MegaMenu key={item.label} label={item.label} columns={item.columns} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium hover:text-[#3BBBF0] transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
          <a
            href="/shop"
            className="px-3 py-2 text-sm font-medium hover:text-[#3BBBF0] transition-colors"
          >
            Shop
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hidden md:block"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Cart */}
          <a
            href="/cart"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative hidden md:block"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF822E] text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </a>

          {/* Account */}
          <a
            href="/account"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hidden md:block"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </a>

          {/* Book Demo CTA */}
          <Button
            onClick={() => setDemoDialogOpen(true)}
            className="bg-[#FF822E] hover:bg-[#FF822E]/90 text-white hidden md:inline-flex"
            size="sm"
          >
            Book a Demo
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t py-4"
            >
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search products, courses, docs..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BBBF0]"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t overflow-hidden"
            >
              <nav className="py-4 space-y-1">
                {menuData.megaMenu.map((item) => (
                  <div key={item.label} className="space-y-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <>
                        <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                          {item.label}
                        </div>
                        {item.columns?.map((column) => (
                          <div key={column.title} className="pl-4">
                            <div className="text-xs font-semibold text-muted-foreground px-4 py-1">
                              {column.title}
                            </div>
                            {column.items.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                ))}
                <a
                  href="/shop"
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Shop
                </a>
                <div className="px-4 pt-4 space-y-2">
                  <Button 
                    onClick={() => {
                      setDemoDialogOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#FF822E] hover:bg-[#FF822E]/90 text-white"
                  >
                    Book a Demo
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Demo Dialog */}
      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </header>
  );
};

export default Header;