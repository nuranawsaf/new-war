import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/main-logo_ycwg7s.png"}
        alt="EUB Logo"
        width={200}
        height={50}
      />
    </Link>
  );
};

export default BrandLogo;
