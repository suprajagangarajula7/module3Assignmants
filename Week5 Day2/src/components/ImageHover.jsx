const ImageHover = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg overflow-hidden 
        transform transition hover:scale-105">
        <img src="https://picsum.photos/300/200" alt="demo" />
      </div>
    </div>
  );
};

export default ImageHover;
