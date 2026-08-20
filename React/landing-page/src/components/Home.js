function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Welcome to Our React Landing Page
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        This is a simple, modern landing page built with the latest React 19,
        pure JavaScript, Parcel, Tailwind CSS, and React Router.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
        Get Started
      </button>
    </section>
  );
}

export default Home;