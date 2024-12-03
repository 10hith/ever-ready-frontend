export default function Home() {
  return (
    <div className="bg-byteloop-dark">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Automate Your Business with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              ByteLoop helps businesses transform their operations through intelligent automation. 
              We build custom AI solutions that streamline workflows and boost productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-xl bg-byteloop-green px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 transition-all"
              >
                Get Started
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-byteloop-green hover:text-opacity-80 transition-all">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-byteloop-green">AI Automation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to automate your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From workflow automation to intelligent document processing, we provide end-to-end AI solutions 
            that help your business operate more efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Document Processing */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-byteloop-dark/40 to-byteloop-dark/60 backdrop-blur-sm border border-byteloop-green/10 hover:border-byteloop-green/30 transition-all duration-300">
              <img src="/images/document.svg" alt="Document Processing" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Document Processing</h3>
              <p className="text-gray-400">Automate document handling with AI-powered extraction, classification, and processing capabilities.</p>
            </div>

            {/* Custom AI Solutions */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-byteloop-dark/40 to-byteloop-dark/60 backdrop-blur-sm border border-byteloop-green/10 hover:border-byteloop-green/30 transition-all duration-300">
              <img src="/images/custom.svg" alt="Custom AI Solutions" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Custom AI Solutions</h3>
              <p className="text-gray-400">Tailored AI solutions designed to meet your specific business needs and challenges.</p>
            </div>

            {/* Integration Support */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-byteloop-dark/40 to-byteloop-dark/60 backdrop-blur-sm border border-byteloop-green/10 hover:border-byteloop-green/30 transition-all duration-300">
              <img src="/images/integration.svg" alt="Integration Support" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Integration Support</h3>
              <p className="text-gray-400">Seamless integration with your existing systems and workflows for maximum efficiency.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future section */}
      <div className="relative isolate overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-byteloop-dark via-byteloop-green/10 to-byteloop-dark" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-72 h-72 bg-byteloop-green/20 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  The Future is Here
                </h2>
                <p className="text-lg leading-8 text-gray-300">
                  AI is driving the next industrial revolution. From improving productivity to delivering 
                  personalized customer experiences, AI Agents are transforming how businesses operate. 
                  Partner with ByteLoop to integrate these revolutionary tools into your business strategy.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-lg transform transition-all duration-300 group-hover:bg-white/10" />
              <div className="relative p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '85%', text: 'Increase in Productivity' },
                    { number: '60%', text: 'Cost Reduction' },
                    { number: '24/7', text: 'Automated Operations' },
                    { number: '90%', text: 'Accuracy Rate' },
                  ].map((stat) => (
                    <div key={stat.text} className="text-center">
                      <div className="text-2xl font-bold text-byteloop-green">{stat.number}</div>
                      <div className="text-sm text-gray-300 mt-1">{stat.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why AI Agents section */}
      <div className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Your Business Needs AI Agents
            </h2>
          </div>
          
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-3">
            {/* Boost Efficiency */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-byteloop-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
              <div className="relative flex flex-col">
                <div className="mx-auto h-48 w-48 flex items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <img src="/images/efficiency.svg" alt="Efficiency" className="h-32 w-32" />
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 text-white text-center">
                  Boost Efficiency
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Optimize supply chains, pricing strategies, and resource management
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Automate routine tasks, freeing your team for strategic priorities
                  </li>
                </ul>
              </div>
            </div>

            {/* Stay Competitive */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-byteloop-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
              <div className="relative flex flex-col">
                <div className="mx-auto h-48 w-48 flex items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <img src="/images/competitive.svg" alt="Competitive" className="h-32 w-32" />
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 text-white text-center">
                  Stay Competitive
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Analyze trends, monitor competitors, and adapt in real time
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Deliver faster, smarter solutions for customers
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhance Decision-Making */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-byteloop-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
              <div className="relative flex flex-col">
                <div className="mx-auto h-48 w-48 flex items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <img src="/images/decision.svg" alt="Decision Making" className="h-32 w-32" />
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-8 text-white text-center">
                  Enhance Decision-Making
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Leverage real-time data to make informed decisions
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-byteloop-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Create actionable strategies backed by AI insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="rounded-3xl bg-white/5 backdrop-blur-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Get Started Today
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Ready to transform your business? Contact us to discover how our AI automation solutions can help you achieve exceptional results.
                </p>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-xl bg-byteloop-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-80 transition-all"
                  >
                    Contact Us
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-white/5 p-8 lg:p-12">
                <h3 className="text-xl font-semibold text-white mb-6">Our Promise</h3>
                <ul className="space-y-4">
                  {[
                    'Save time and resources',
                    'Gain actionable insights',
                    'Deliver exceptional results'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-byteloop-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
