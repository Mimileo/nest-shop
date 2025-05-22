import BlogCard from "../../components/BlogCard";
const HomePage = () => {


  const blogs = [
    {
      index: 0,
      date: "Dec 22, 2023",
      CardTitle: "Meet AutoManage, the best AI management tools",
      CardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg",
    },
    {
      index: 1,
      date: "Dec 22, 2023",
      CardTitle: "Meet AutoManage, the best AI management tools",
      CardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_1280.jpg",
    },
    {
      index: 2,
      date: "Dec 22, 2023",
      CardTitle: "Meet AutoManage, the best AI management tools",
      CardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/15/13/computer-2788918_1280.jpg",
    },
  ]
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] px-10">
        <div className="homepage">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-4xl font-semibold text-primary">
                 Find your path.
                Create your Future.
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                 Welcome to the Nest
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Fostering growth and passion for tech in style since 2014. Giving flight to your dreams.
                  Resources and expanding networks for LatinX and other underserved groups.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                date={blog.date}
                CardTitle={blog.CardTitle}
                CardDescription={blog.CardDescription}
                image={blog.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
