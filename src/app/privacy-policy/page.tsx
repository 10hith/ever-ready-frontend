export default function PrivacyPolicy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
        
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Information We Collect</h2>
          <p className="mt-6">
            At ByteLoop, we collect information that you provide directly to us when you:
          </p>
          <ul className="mt-4 list-disc pl-8">
            <li>Fill out forms on our website</li>
            <li>Correspond with us by email, phone, or otherwise</li>
            <li>Use our services</li>
            <li>Sign up for our newsletter</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. How We Use Your Information</h2>
          <p className="mt-6">
            We use the information we collect to:
          </p>
          <ul className="mt-4 list-disc pl-8">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Information Sharing</h2>
          <p className="mt-6">
            We do not share your personal information with third parties except:
          </p>
          <ul className="mt-4 list-disc pl-8">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and the rights of others</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Data Security</h2>
          <p className="mt-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Contact Us</h2>
          <p className="mt-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            Email: privacy@byteloop.ai<br />
            Address: [Your Business Address]
          </p>
        </div>
      </div>
    </div>
  )
}
