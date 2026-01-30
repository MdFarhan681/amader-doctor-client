import Image from "next/image";

const Up = () => {
  return (
    <div className="relative  w-full h-80">
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
