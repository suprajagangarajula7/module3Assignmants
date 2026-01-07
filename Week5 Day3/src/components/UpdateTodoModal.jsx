import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UpdateTodoModal({ todo, onSave }) {
  const [value, setValue] = useState(todo.title);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={() => onSave(value)}>Save</Button>
      </DialogContent>
    </Dialog>
  );
}
