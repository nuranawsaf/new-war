import PaintMediate from "./PaintMediate";
import JoinMe from "./JoinMe";
import VisitChild from "./VisitChild";
import HomeFooterImage from "@/app/(home)/HomeFooter/HomeFooter";

export default function Content() {
  return (
    <div>
      <div className="lg:h-[496px] bg-style arafat-bg flex items-end pb-8">
        <div className="container">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1772224128/arafat/Iocn_kknvan.png"
            width="95"
            height="44"
          />
          <h4 className="font-cormorant mb-2">Artist Arafat Hosen</h4>
        </div>
      </div>

      <PaintMediate />

      <JoinMe />

      <VisitChild />

      <div>
        <HomeFooterImage />
      </div>
    </div>
  );
}
