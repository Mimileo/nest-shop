import Card from "../../components/Card";
const AboutPage = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "We build fast, responsive, and user-friendly websites and web applications tailored to your business needs.",
      image:
        "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg",
    },
    {
      title: "Design",
      description:
        "Our design team creates visually stunning and user-focused experiences that elevate your brand identity.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_1280.jpg",
    },
    {
      title: "Marketing",
      description:
        "We help your business grow with strategic marketing solutions that drive awareness, engagement, and conversions.",
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
    },

    {
      title: "Videography",
      description:
        "We produce compelling video content that tells your story and captivates your audience",
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
    },
  ];

  return (
    <>
      <section className="bg-white pb-20 pt-20 dark:bg-dark px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="homepage">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16  text-emerald-800">
              <h2 class="text-2xl font-bold">Mission And Values</h2>

              <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
                Our mission is to provide exceptional healthcare services with a
                focus on availability, reliability, and support.
              </p>

              <div class="flex justify-center space-x-8 mt-8">
                <div class="transition transform hover:scale-110">
                  <h3 class="text-xl font-bold">85+</h3>
                  <p class="text-gray-700">Specialists</p>
                </div>
                <div class="transition transform hover:scale-110">
                  <h3 class="text-xl font-bold">25+</h3>
                  <p class="text-gray-700">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-emerald-500 text-center text-3xl font-bold text-white py-12">
            Services
          </div>

          <div className="py-12 text-emerald-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {["Development", "Design", "Marketing", "Videography"].map(
                (item) => (
                  <div
                    key={item}
                    className="p-6 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors text-center"
                  >
                    <h3 className="text-xl font-bold">{item}</h3>
                  </div>
                )
              )}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
