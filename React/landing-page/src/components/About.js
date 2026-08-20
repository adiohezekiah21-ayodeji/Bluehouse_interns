function About() {
  const images = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1016/400/300",
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1020/400/300",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        About Us & Gallery
      </h2>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We are a team of passionate developers teaching modern React to the
        next generation of engineers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;