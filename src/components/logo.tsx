import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="AmaderDoctor Logo"
      width={60}
      height={60}
        className="h-15 w-15 object-contain rounded-2xl px-1"
    />
  );
};

export default Logo;
