const ContactForm = () => {
  return (
    <form className="bg-white max-w-md mx-auto p-6 rounded shadow space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border rounded px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
