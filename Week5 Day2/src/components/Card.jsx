const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded
          hover:bg-blue-600 active:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
