import { Check } from "lucide-react";

type ThanksProps = {
  name: string;
};

const Thanks = ({ name }: ThanksProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#1C0F26] rounded-full  flex items-center justify-center">
        <Check color="white" size={78} />
      </div>
      <h1 className="text-center mt-4 text-2xl text-[#150F24] font-semibold">
        THANK YOU, {name.toLocaleUpperCase()}
      </h1>
      <p className="mt-3 text-zinc-600 text-lg font-medium">
        We've added your card details
      </p>
      <a
        href=""
        className="bg-[#1C0F26] text-center mt-5 text-white font-medium rounded-lg px-2 py-2 w-[200px]"
      >
        Continue
      </a>
    </div>
  );
};

export default Thanks;
