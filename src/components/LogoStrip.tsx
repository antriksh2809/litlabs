import { motion } from "framer-motion";

interface Logo {
  name: string;
  image?: string;
}

const partnerLogos: Logo[] = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

export default function LogoStrip() {
  return (
    <section className="bg-white dark:bg-background border-y">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by Leading Institutions Worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="h-16 w-full rounded-lg bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                <span className="text-xs font-semibold text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
