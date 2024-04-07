import cardFront from "../../assets/bg-card-front.png";

type CardProps = {
  cardNumbers: string;
  cardHolderName: string;
  expiration: string;
  cvc: string;
};

export const Card = ({
  cardNumbers,
  cardHolderName,
  expiration,
}: // cvc,
CardProps) => {
  return (
    <article className="relative">
      <img src={cardFront} alt="" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between px-5 py-6 sm:py-10">
        <div className="flex items-center gap-2">
          <p className="bg-white w-8 h-8 rounded-full"></p>
          <p className="bg-transparent w-4 h-4 border-2 border-white rounded-full"></p>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-2xl md:text-3xl mb-2">
            {cardNumbers ? cardNumbers : "0000 0000 0000 0000"}
          </span>
          <div className="flex justify-between font-medium w-full">
            <span className="text-white text-sm md:text-base">
              {cardHolderName ? cardHolderName : "John Doe"}
            </span>
            <span className="text-white text-sm md:text-base">
              {expiration ? expiration : "02/28"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
