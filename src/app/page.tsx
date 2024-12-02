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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Workflow Automation',
                description: 'Streamline your business processes with intelligent workflows that reduce manual tasks and eliminate human error.'
              },
              {
                title: 'Document Processing',
                description: 'Transform your document handling with AI-powered extraction, classification, and processing.'
              },
              {
                title: 'Custom AI Solutions',
                description: 'Get tailored AI solutions that fit your specific business needs and integrate seamlessly with your existing systems.'
              }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-all">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
