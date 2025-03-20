interface SecondaryButtonProps {
  children: string;
  onClick: () => void;
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { children, onClick } = props;
  return (
    <>
      <button
        className="border rounded-lg px-4 bg-red-300 hover:bg-red-200"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
