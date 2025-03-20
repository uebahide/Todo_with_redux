import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../slices/incompleteTodosSlice";
import { memo } from "react";
import { IncompleteTodo } from "../molecules/IncompleteTodo";

export const IncompleteTodos = memo(() => {
  const incompleteTodos: string[] = useSelector(
    (state: any) => state.incompleteTodos.value
  );
  const dispatch = useDispatch();

  console.log("incompleteTodos");

  return (
    <>
      <div className="border rounded-lg h-50 w-100">
        <p className="text-center">Incomplete</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <IncompleteTodo key={todo + index} index={index}>
              {todo}
            </IncompleteTodo>
          ))}
        </ul>
      </div>
    </>
  );
});
