import { UseFormRegister } from "react-hook-form";

type InputProps = {
  placeholder: string;
  type: string;
  value?: string;
  id: string;
  maxLength?: number;
  minLength?: number;
  error?: string;
  name: string;
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

const Input = ({
  placeholder,
  type,
  value,
  id,
  maxLength,
  minLength,
  name,
  error,
  className,
  register,
}: InputProps) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        {...register(name)}
        className={
          className
            ? className
            : "border font-bold py-2 px-2 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg w-[280px] border-[#E0DFEC]"
        }
      />

      {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
    </>
  );
};

export default Input;
