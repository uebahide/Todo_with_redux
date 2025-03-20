interface inputProps {
  placeholder: string;
}

export const Input = (props: inputProps) => {
  const { placeholder } = props;
  return (
    <>
      <input placeholder={placeholder} className="border rounded-lg px-2" />
    </>
  );
};
