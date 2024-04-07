import cardBack from "../../assets/bg-card-back.png";

type CardBackProps = {
  cvc: string;
};
const CardBack = ({ cvc }: CardBackProps) => {
  return (
    <div className="relative">
      <img className="relative" src={cardBack} alt="" />
      <div className="absolute inset-0 left-52 md:left-72  flex items-center justify-center">
        <p className="text-white font-bold text-lg">{cvc ? cvc : "000"}</p>
      </div>
    </div>
  );
};

export default CardBack;
