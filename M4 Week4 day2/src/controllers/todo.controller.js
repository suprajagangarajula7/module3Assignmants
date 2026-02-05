import supabase from '../config/supabase.js';

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.userId;

    const { data, error } = await supabase.from('todos').insert([
      { title, user_id: userId }
    ]).select();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json(data[0]);
  } catch {
    res.status(500).json({ message: 'Failed to create todo' });
  }
};

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: 'Failed to fetch todos' });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const updates = req.body;

    const { data, error } = await supabase
      .from('todos')
      .update(updates)
      .eq('id', id)
      .eq('user_id', userId)
      .select();

    if (error || data.length === 0) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    res.status(200).json(data[0]);
  } catch {
    res.status(500).json({ message: 'Failed to update todo' });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const { data, error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)
      .eq('user_id', userId)
      .select();

    if (error || data.length === 0) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch {
    res.status(500).json({ message: 'Failed to delete todo' });
  }
};
