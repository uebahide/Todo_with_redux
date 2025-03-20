import { memo } from "react";
import { useSelector } from "react-redux";
import { CompleteTodo } from "../molecules/CompleteTodo";

export const CompleteTodos = memo(() => {
  console.log("CompleteTodos");
  const completeTodos: string[] = useSelector(
    (state: any) => state.completeTodos.value
  );

  return (
    <>
      <div className="border rounded-lg h-50 w-100">
        <p className="text-center">Complete</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <CompleteTodo key={todo + index} index={index}>
              {todo}
            </CompleteTodo>
          ))}
        </ul>
      </div>
    </>
  );
});
