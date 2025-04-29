import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Check, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-primary w-10 h-10 rounded flex items-center justify-center mr-2">
            <div className="w-6 h-6 bg-primary rotate-45 transform origin-center relative">
              <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold">StartxID</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm font-medium">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium">
            About
          </Link>
          <Link href="#" className="text-sm font-medium">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:flex">Get Started</Button>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Unlock Your Potential with Strategic Consulting
              </h1>
              <p className="text-slate-600 mb-8 max-w-md">
                We help businesses transform challenges into opportunities through expert guidance and innovative
                solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/crystal.png"
                alt="3D Crystal Shape"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Are You Running Into These Problems?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-2">Stagnant Growth?</h3>
              <p className="text-slate-600 text-sm">
                Your business has plateaued and you're struggling to find new avenues for expansion.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-2">Operational Inefficiency?</h3>
              <p className="text-slate-600 text-sm">
                Your processes are costing you time and money, but you're not sure how to optimize them.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-2">Market Challenges?</h3>
              <p className="text-slate-600 text-sm">
                Changing market conditions are threatening your business model and competitive position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            WHAT WE CAN DO <span className="text-slate-400">FOR YOU?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Customized Strategy Development</h3>
              <p className="text-slate-400 mb-4">
                We create tailored strategies that align with your business goals and market position, providing a clear
                roadmap for sustainable growth.
              </p>
              <div className="flex justify-end">
                <ChevronRight className="text-primary" />
              </div>
            </div>
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Operational Efficiency Optimization</h3>
              <p className="text-slate-400 mb-4">
                Our experts analyze your operations to identify bottlenecks and implement solutions that streamline
                processes and reduce costs.
              </p>
              <div className="flex justify-end">
                <ChevronRight className="text-primary" />
              </div>
            </div>
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Market Analysis and Insights</h3>
              <p className="text-slate-400 mb-4">
                We provide deep market intelligence and competitive analysis to help you make informed decisions and
                identify new opportunities.
              </p>
              <div className="flex justify-end">
                <ChevronRight className="text-primary" />
              </div>
            </div>
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 text-lg">Leadership and Team Building</h3>
              <p className="text-slate-400 mb-4">
                Develop strong leadership capabilities and build high-performing teams that drive innovation and
                execution excellence.
              </p>
              <div className="flex justify-end">
                <ChevronRight className="text-primary" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">OUR APPROACH</h2>
              <p className="text-slate-600 mb-6">
                We believe in a collaborative, data-driven approach that puts your business needs at the center of
                everything we do. Our methodology combines industry expertise with innovative thinking to deliver
                solutions that create lasting value.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Thorough assessment of your current situation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Collaborative strategy development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Implementation support and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Continuous monitoring and optimization</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/crystal.png"
                alt="3D Crystal Shape"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            SUCCESS <span className="text-slate-400">STORIES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary rounded-lg p-6">
              <p className="mb-6">
                "StartxID transformed our business with their strategic insights. Revenue increased by 45% within six
                months of implementing their recommendations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-primary-foreground/80">CEO, TechGrowth</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="mb-6">
                "The operational efficiency program designed by StartxID helped us reduce costs by 30% while improving
                customer satisfaction scores."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-slate-400">COO, GlobalServices</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="mb-6">
                "Their market analysis helped us identify an untapped segment that now accounts for 40% of our business.
                Truly game-changing insights."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-slate-400">CMO, InnovateRetail</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-slate-500">
                <AccordionTrigger className="text-left">
                  How long does a typical consulting project take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Project timelines vary based on scope and complexity. A typical strategic assessment takes 4-6 weeks,
                  while implementation support can range from 3-12 months depending on your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-slate-500">
                <AccordionTrigger className="text-left">What industries do you specialize in?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  We have expertise across multiple sectors including technology, healthcare, financial services,
                  retail, and manufacturing. Our consultants bring industry-specific knowledge to every engagement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-slate-500">
                <AccordionTrigger className="text-left">
                  Do you work with small businesses or just enterprises?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  We work with organizations of all sizes, from startups to Fortune 500 companies. We tailor our
                  approach to match your specific needs and resources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-slate-500">
                <AccordionTrigger className="text-left">
                  What is the typical ROI of working with StartxID?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Our clients typically see a 3-5x return on their consulting investment within the first year. We focus
                  on delivering measurable results that directly impact your bottom line.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-slate-500">
                <AccordionTrigger className="text-left">How does the onboarding process work?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  We begin with a discovery call to understand your challenges, followed by a proposal outlining our
                  approach. Once engaged, we conduct a thorough assessment before developing strategic recommendations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                CONTACT <br />
                US TODAY
              </h2>
              <p className="text-slate-400 mb-8">
                Ready to transform your business? Get in touch with our team of experts to schedule a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>contact@startxid.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>123 Business Ave, Suite 500, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Input
                  type="text"
                  placeholder="Company"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full rounded-md bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 p-3"
                ></textarea>
                <div className="flex justify-between items-center">
                  <Button className="bg-primary text-white hover:bg-primary/90">Send Message</Button>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-primary w-8 h-8 rounded flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-primary rotate-45 transform origin-center relative">
                  <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold">StartxID</span>
            </div>
            <div className="text-sm text-slate-400">© 2023 StartxID. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
