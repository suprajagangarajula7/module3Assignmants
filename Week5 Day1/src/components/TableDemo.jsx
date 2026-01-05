const TableDemo = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="border p-2">John</td>
            <td className="border p-2">Developer</td>
            <td className="border p-2">Active</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="border p-2">Jane</td>
            <td className="border p-2">Designer</td>
            <td className="border p-2">Active</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="border p-2">Mike</td>
            <td className="border p-2">Manager</td>
            <td className="border p-2">Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDemo;
