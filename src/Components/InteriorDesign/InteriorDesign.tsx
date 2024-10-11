import { useState } from "react";
import GeneratedImages from "../GeneratedImages/GeneratedImages";
import ImageLoad from "../ImageLoad/ImageLoad";
import { containerDiv } from "./InteriorDesignStyles";

const InteriorDesign: React.FC = () => {
    const [generatedImages, setGeneratedImages] = useState<boolean>(false);
    const generateImages = (): void => {
        setGeneratedImages(true);
    }
    return (
        <div className={containerDiv}>
            <ImageLoad generateImages={generateImages}></ImageLoad>
            <GeneratedImages generateImages={generatedImages}></GeneratedImages>
        </div>
    );
};

export default InteriorDesign;