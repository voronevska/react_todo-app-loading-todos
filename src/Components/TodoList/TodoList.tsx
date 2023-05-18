import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = ({ todos }) => (
  <section className="todoapp__main">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
      />
    ))}
  </section>
);