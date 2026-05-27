import BrandLogo from "@/components/brand-logo";
const TopNav = () => {
  return (
    <div className="container flex justify-between">
      <div className="py-5">
        <BrandLogo />
      </div>
      <div className="flex items-center gap-2">
        <img src="/icon/cart.svg" alt="" />
        <span className="text-xl">Cart (0)</span>
      </div>
    </div>
  );
};

export default TopNav;
