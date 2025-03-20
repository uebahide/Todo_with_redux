import { memo, useCallback } from "react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useDispatch } from "react-redux";
import { remove as removeIncomp } from "../../slices/incompleteTodosSlice";
import { add as addComp } from "../../slices/completeTodosSlice";

export const IncompleteTodo = memo(
  (props: { children: string; index: number }) => {
    const { children, index } = props;
    const dispatch = useDispatch();

    const onClickComplete = useCallback(() => {
      dispatch(removeIncomp(index));
      dispatch(addComp(children));
    }, []);
    const onClickDelete = useCallback(() => {
      dispatch(removeIncomp(index));
    }, []);
    return (
      <>
        <div className="flex space-x-1">
          <p>{children}</p>
          <PrimaryButton onClick={onClickComplete}>Complete</PrimaryButton>
          <SecondaryButton onClick={onClickDelete}>Delete</SecondaryButton>
        </div>
      </>
    );
  }
);
