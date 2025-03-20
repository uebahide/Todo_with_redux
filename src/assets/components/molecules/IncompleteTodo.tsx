import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';

export const IncompleteTodo = (props: { children: string }) => {
  const { children } = props;

  const onClickComplete = () => {
    alert('Complete');
  };
  const onClickDelete = () => {
    alert('delete');
  };
  return (
    <>
      <div className="flex space-x-1">
        <p>{children}</p>
        <PrimaryButton onClick={onClickComplete}>Complete</PrimaryButton>
        <SecondaryButton onClick={onClickDelete}>Delete</SecondaryButton>
      </div>
    </>
  );
};
