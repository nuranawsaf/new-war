import Activities from "./Activities/Activities";
import Artwork from "./artwork/Artwork";
import Banner from "./header/Banner";
import HomeContactForm from "./HomeContactForm/HomeContactForm";
import HomeFooterImage from "./HomeFooter/HomeFooter";
import HomeVideoOne from "./HomeVideoOne/HomeVideoOne";
import Tutorials from "./Tutorials/Tutorials";

export default async function Page() {
  return (
    <div className="">
      <Banner />
      <Artwork />
      <Tutorials />
      <Activities />
      <HomeContactForm />
      <HomeVideoOne />
      <HomeFooterImage />
    </div>
  );
}
