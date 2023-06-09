import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Heading from "../../Shared/Heading";

const GallerySection = () => {
    return (
        <div className="mt-10">
            <Heading title={"Choose Your Passion"} des={'Be the real you!'}></Heading>
            <div className="mt-10">
            <Gallery photos={photos} />
            </div>
        </div>
    );
};

export default GallerySection;