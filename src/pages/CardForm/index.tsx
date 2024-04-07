import { useState } from "react";
import Input from "../../components/Input";
import { Card } from "../../components/Card";
import CardBack from "../../components/CardBack";
import Thanks from "../../components/Thanks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ClientCard = () => {
  const [isForm, setIsForm] = useState(true);

  const schema = z.object({
    cardHolderName: z.string().min(1, "The name is required"),
    cardNumbers: z.string().min(19, "Type a valid card number"),
    expiration: z.string().min(5, "Type a valid expiration"),
    cvc: z.string().min(3, "Type a valid cvc number"),
  });

  type dataSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      cardHolderName: "",
      cardNumbers: "",
      expiration: "",
      cvc: "",
    },
    resolver: zodResolver(schema),
  });

  const cardHolderName = watch("cardHolderName");
  const cardNumbers = watch("cardNumbers");
  const expiration = watch("expiration");
  const cvc = watch("cvc");

  function handleOnSubmit(data: dataSchema) {
    console.log(data);
    setIsForm(false);
  }

  return (
    <section className="min-h-screen w-full bg-slate-50 grid grid-cols-1 lg:grid-cols-2">
      <div className="w-[100%] px-2 py-2 flex flex-col justify-center items-center bg-gradient-to-tr from-[#1C0F26] to-[#46436F]">
        <div className="top-12 left-2 md:left-10 relative">
          <CardBack cvc={cvc} />
        </div>
        <div className="z-10 aboslute">
          <Card
            cardNumbers={cardNumbers
              .replace(/\D/g, "")
              .replace(/(\d{4})(?=\d)/g, "$1 ")}
            cardHolderName={cardHolderName}
            expiration={expiration
              .replace(/\D/g, "")
              .replace(/(\d{2})(\d{2})/, "$1/$2")}
            cvc={cvc}
          />
        </div>
      </div>
      {isForm ? (
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex py-5 flex-col justify-center items-center gap-5"
          autoComplete="off"
        >
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <Input
              className=""
              type="text"
              placeholder="Ex: Jonh Doe"
              id="name"
              minLength={1}
              name="cardHolderName"
              error={errors.cardHolderName?.message}
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="card-number">
              Card Number
            </label>
            <Input
              className=""
              value={cardNumbers
                .replace(/\D/g, "")
                .replace(/(\d{4})(?=\d)/g, "$1 ")}
              type="text"
              name="cardNumbers"
              placeholder="Ex: 1234 5678 9012 3456"
              id="card-number"
              maxLength={19}
              minLength={16}
              error={errors.cardNumbers?.message}
              register={register}
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex flex-col">
              <label className="font-medium" htmlFor="exp">
                Expiration
              </label>
              <Input
                className="border font-bold py-2 px-2 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg w-[135px] border-[#E0DFEC]"
                type="text"
                value={expiration
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(\d{2})/, "$1/$2")}
                placeholder="Ex: 02/28"
                id="exp"
                maxLength={5}
                name="expiration"
                error={errors.expiration?.message}
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium" htmlFor="cvv">
                CVC
              </label>
              <Input
                className="border font-bold py-2 px-2 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg w-[135px] border-[#E0DFEC]"
                type="text"
                name="cvc"
                placeholder="Ex: 923"
                id="cvc"
                maxLength={3}
                minLength={3}
                error={errors.cvc?.message}
                register={register}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#1C0F26] text-white font-medium rounded-lg px-2 py-2 w-[280px]"
          >
            Confirm
          </button>
        </form>
      ) : (
        <div className="flex items-center justify-center py-5">
          <Thanks name={cardHolderName} />
        </div>
      )}
    </section>
  );
};

export default ClientCard;
