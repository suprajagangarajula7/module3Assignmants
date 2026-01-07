import { useAuth } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="font-bold">Todos App</h1>
      {user && <Button onClick={logout}>Logout</Button>}
    </div>
  );
}
