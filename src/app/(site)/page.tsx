import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
      {/* Header */}
      <header className="w-full py-6 bg-opacity-90 bg-indigo-900 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center tracking-wide">
            Welcome to <span className="text-yellow-300">EduAI</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex flex-col items-center">
        {/* Logo */}
        <Image
          src="/logo.svg" // Replace with your logo path
          alt="EduAI Logo"
          width={180}
          height={180}
          className="mb-6 animate-pulse"
        />

        {/* Tagline */}
        <h2 className="text-3xl font-bold mb-4 text-center leading-snug">
          Explore, Learn, and Shape the Future with AI
        </h2>

        {/* Description */}
        <p className="text-center max-w-2xl mb-8 text-lg leading-relaxed">
          EduAI is a dynamic platform that demystifies artificial intelligence. 
          Dive into its limitless potential, tackle ethical dilemmas, and master the 
          skills to identify and engage with AI systems. Discover a new world of possibilities, 
          whether you're just starting out or already passionate about technology.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6">
          <a
            href="/get-started"
            className="px-8 py-3 rounded-lg bg-yellow-300 text-indigo-900 font-bold shadow-md hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="px-8 py-3 rounded-lg bg-white text-indigo-900 font-bold shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-indigo-900 text-center mt-12 bg-opacity-90">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-bold">EduAI</span>. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}