import { Input } from '../atoms/inputs/Input';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';

export const InputTodo = () => {
  const onClickAdd = () => {
    alert('input todo add button');
  };
  return (
    <>
      <Input placeholder="Enter title" />
      <PrimaryButton onClick={onClickAdd}>Add</PrimaryButton>
    </>
  );
};
