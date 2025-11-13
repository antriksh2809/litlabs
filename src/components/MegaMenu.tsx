import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface MegaMenuItem {
  title: string;
  items: { label: string; href: string; description?: string }[];
}

interface MegaMenuProps {
  label: string;
  columns: MegaMenuItem[];
}

export default function MegaMenu({ label, columns }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-[#3BBBF0] transition-colors">
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full mt-2 min-w-[600px] rounded-2xl border bg-white dark:bg-gray-900 shadow-2xl p-6 grid gap-6 z-50"
            style={{ 
              gridTemplateColumns: `repeat(${Math.min(columns.length, 3)}, 1fr)`,
              maxWidth: columns.length > 2 ? '800px' : '600px'
            }}
          >
            {columns.map((column) => (
              <div key={column.title}>
                <div className="text-sm font-semibold mb-3 text-foreground border-b pb-2">
                  {column.title}
                </div>
                <ul className="space-y-2">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-[#3BBBF0] transition-colors group/item py-1"
                      >
                        <span className="font-medium">{item.label}</span>
                        {item.description && (
                          <p className="text-xs mt-0.5 opacity-70 group-hover/item:opacity-100">
                            {item.description}
                          </p>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
