import Image from 'next/image';
import Nav from '';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex space-x-6 z-50 border border-gray-300 dark:border-gray-700">
        <a href="/" className="text-gray-900 dark:text-gray-100 hover:underline">Home</a>
        <a href="/projects" className="text-gray-900 dark:text-gray-100 hover:underline">Projects</a>
        <a href="/about" className="text-gray-900 dark:text-gray-100 hover:underline">About</a>
        <a href="/contact" className="text-gray-900 dark:text-gray-100 hover:underline">Contact</a>
      </nav>

      <header className="text-center mt-20 mb-10">
        <h1 className="text-4xl font-bold">blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Software Engineer | Web Developer | System Developer</p>
      </header>

      <section className="flex flex-col items-center text-center max-w-2xl">
        <Image
          className="rounded-full border-4 border-gray-300 dark:border-gray-700"
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          priority
        />
        <p className="mt-5 text-lg">
          Hi, I'm a passionate developer who loves building fast, efficient, and modern web applications.
          I specialize in Next.js, Vue.js, and FastAPI.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <a
          href="/projects"
          className="group p-5 border border-gray-300 dark:border-gray-700 rounded-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-800 shadow-lg"
        >
          <h2 className="text-xl font-semibold">Projects →</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Explore my latest web and system development projects.</p>
        </a>

        <a
          href="/about"
          className="group p-5 border border-gray-300 dark:border-gray-700 rounded-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-800 shadow-lg"
        >
          <h2 className="text-xl font-semibold">About Me →</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Learn more about my journey in software development.</p>
        </a>

        <a
          href="/contact"
          className="group p-5 border border-gray-300 dark:border-gray-700 rounded-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-800 shadow-lg"
        >
          <h2 className="text-xl font-semibold">Contact →</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Get in touch for collaborations or inquiries.</p>
        </a>
      </section>
    </main>
  );
}
