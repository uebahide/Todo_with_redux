import { UseSelector, useDispatch, useSelector } from "react-redux";
import { change, reset } from "../../../slices/inputTitleSlice";

interface inputProps {
  placeholder: string;
}

export const Input = (props: inputProps) => {
  console.log("input");
  const { placeholder } = props;
  const inputTitle = useSelector((state: any) => state.inputTitle.value);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(change(e.target.value));
  };
  return (
    <>
      <input
        value={inputTitle}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-lg px-2"
      />
    </>
  );
};
