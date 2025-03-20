import { memo, useCallback } from "react";
import { Input } from "../atoms/inputs/Input";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../slices/inputTitleSlice";
import { add } from "../../slices/incompleteTodosSlice";

export const InputTodo = memo(() => {
  console.log("inputTodo");
  const dispatch = useDispatch();
  const inputTitle = useSelector((state: any) => state.inputTitle.value);

  const onClickAdd = useCallback(() => {
    dispatch(add(inputTitle));
    dispatch(reset());
  }, [inputTitle]);
  return (
    <>
      <Input placeholder="Enter title" />
      <PrimaryButton onClick={onClickAdd}>Add</PrimaryButton>
    </>
  );
});
