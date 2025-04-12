import Image from "next/image";

const SkillCard = ({ title, icon }) => {
  return (
    <div className="bg-secondary flex flex-col items-center rounded-[14px] border border-amber-100 p-5">
      <Image src={icon} alt={title} className="size-17" />
      <h5 className="text-mint mb-5 mt-2 text-center text-base font-semibold">
        {title}
      </h5>
    </div>
  );
};

export default SkillCard;
