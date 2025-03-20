import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import { remove as removeComp } from "../../slices/completeTodosSlice";
import { add as addIncomp } from "../../slices/incompleteTodosSlice";
import { useCallback } from "react";

export const CompleteTodo = (props: { children: string; index: number }) => {
  const { children, index } = props;
  const dispatch = useDispatch();
  const onClickReturn = useCallback(() => {
    dispatch(addIncomp(children));
    dispatch(removeComp(index));
  }, []);

  return (
    <>
      <div className="flex space-x-1">
        <p>{children}</p>
        <PrimaryButton onClick={onClickReturn}>Return</PrimaryButton>
      </div>
    </>
  );
};
