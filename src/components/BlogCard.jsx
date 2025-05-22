
const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full  py-10 bg-white shadow-lg transition-transform hover:scale-[1.01] ">
          <div className="mb-8 overflow-hidden rounded  ">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className="px-6">
            {date && (
              <span className="mb-5 inline-block rounded bg-emerald-500 hover:bg-emerald-800  hover:text-white px-4 py-1 text-center text-xs font-semibold ">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;