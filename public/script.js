document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const fetchTodos = async () => {
        const response = await fetch('/api/todos');
        const todos = await response.json();
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.text;
            li.dataset.id = todo.id;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = async () => {
                await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
                fetchTodos();
            };
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text !== '') {
            await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Date.now().toString(), text }),
            });
            input.value = '';
            fetchTodos();
        }
    });

    fetchTodos();
});
