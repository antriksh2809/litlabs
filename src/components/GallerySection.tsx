const galleryItems = [
  {
    title: "Teacher Skilling in UAE",
    description: "Physical Teacher Development Program empowering teachers.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    title: "Kids @ BrightCHAMPS",
    description: "Students enjoyed DIYing with robotics kits in one-on-one sessions.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    title: "KV AFS Pune, Maharashtra",
    description: "Students showcased projects to dignitaries from the Air Force.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    title: "AI Lab in South Korea",
    description: "Teacher conducting robotics class in South Korean Public School.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    title: "Eklavya NEP Sandbox",
    description: "Students engaged in workshop promoting National Education Policy 2020.",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop",
  },
  {
    title: "C N Vidyalaya, Ahmedabad",
    description: "Master trainer conducting robotics training in AI and Robotics Lab.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&h=400&fit=crop",
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Impact Across the Globe
          </h2>
        </div>

        {/* Scrolling Gallery */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-elegant transition-all duration-300">
                  <div className="aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;