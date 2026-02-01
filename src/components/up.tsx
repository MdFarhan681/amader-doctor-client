import Image from "next/image";

const Up = () => {
  return (
    <div className="relative  w-full h-45">
      <Image
         src="/image.png"
    alt="header image"
    fill
    className="w-full"
    priority
    
      />
    </div>
  );
};

export default Up;
