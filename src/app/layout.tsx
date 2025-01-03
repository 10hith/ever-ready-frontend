import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EverReady - AI Automation Agency',
  description: 'Transform your business with intelligent automation solutions. EverReady helps companies streamline operations through custom AI implementation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-everready-dark text-white`}>
        <CopilotKit 
        runtimeUrl="/api/copilotkit"
        agent="basic_agent"
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <CopilotPopup
              instructions={"You are assisting the user in finding the user id"}
              labels={{
                title: "myG Assistant",
                initial: "Need any help?",
              }}
            />
            <Footer />
          </div>
        </CopilotKit>
      </body>
    </html>
  )
}
