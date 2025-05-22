
const Card = ({  title, description, image, date }) => {
  return (
    <>
      <div class="p-4 shadow-lg rounded-lg bg-white  text-black hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold">{title}</h3>
            <p class="text-gray-700 mt-2">{description}</p>

            {(image || date) && (
                <div className="flex items-center mt-4">
                    {image && <img src={image} alt="Card" className="w-12 h-12 rounded-full mr-4" />}
                    {date && <span className="text-gray-600">{date}</span>}
                </div>
            )}
           
        </div>
    </>
  );
};

export default Card;