import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
              Accessibility Statement
            </h1>
            
            <div className="bg-card rounded-2xl border p-8 shadow-sm">
              <p className="text-lg text-muted-foreground mb-8">
                L.I.T. Labs is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Conformance Status</h2>
                  <p className="text-muted-foreground">
                    The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. L.I.T. Labs is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Accessibility Features</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Keyboard navigation support for all interactive elements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Sufficient color contrast ratios for text and background elements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Alternative text for all meaningful images</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Clear heading structure and semantic markup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Resizable text up to 200% without loss of content or functionality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Screen reader compatibility</span>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Technical Specifications</h2>
                  <p className="text-muted-foreground mb-4">
                    Accessibility of L.I.T. Labs relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>HTML</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>WAI-ARIA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>CSS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>JavaScript</span>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Limitations and Alternatives</h2>
                  <p className="text-muted-foreground">
                    Despite our best efforts to ensure accessibility of L.I.T. Labs, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Assessment Approach</h2>
                  <p className="text-muted-foreground">
                    L.I.T. Labs assessed the accessibility of the website by the following approaches:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mt-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Self-evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>External evaluation</span>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions or need assistance with accessibility, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Accessibility Coordinator</h3>
                    <p className="text-muted-foreground mb-2">Email: accessibility@litlabs.in</p>
                    <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Feedback</h2>
                  <p className="text-muted-foreground">
                    We welcome your feedback on the accessibility of L.I.T. Labs. If you encounter accessibility barriers, please let us know:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mt-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Email: accessibility@litlabs.in</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Phone: +91 98765 43210</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Mail: 123 Education Street, Bangalore, Karnataka 560001</span>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Compatibility with Browsers and Assistive Technology</h2>
                  <p className="text-muted-foreground">
                    L.I.T. Labs is designed to be compatible with the following browsers:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mt-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Chrome (latest version)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Firefox (latest version)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Safari (latest version)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>Edge (latest version)</span>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Glossary</h2>
                  <p className="text-muted-foreground">
                    For definitions of accessibility terms, please visit the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-primary hover:underline">W3C Web Content Accessibility Guidelines (WCAG) Overview</a>.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}