const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
