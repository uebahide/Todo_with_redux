interface PrimaryButtonProps {
  children: string;
  onClick: () => void;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children, onClick } = props;
  return (
    <>
      <button
        className="border rounded-lg px-4 bg-green-300 hover:bg-green-200"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
