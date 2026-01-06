const GridCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-white p-4 rounded shadow">
          Card {item}
        </div>
      ))}
    </div>
  );
};

export default GridCards;
