import { useState } from "react";
import GeneratedImages from "../GeneratedImages/GeneratedImages";
import ImageLoad from "../ImageLoad/ImageLoad";
import { containerDiv } from "./InteriorDesignStyles";

const InteriorDesign: React.FC = () => {
    const [generatedImages, setGeneratedImages] = useState<boolean>(false);
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const setLoadedImage = (): void => {
        setIsImgLoaded(true);
    }
    const generateImages = (): void => {

        if (isImgLoaded)
        {
            setGeneratedImages(true);
            return;
        }
        setErrorMsg("A file must be selected!");
    }
    return (
        <div className={containerDiv}>
            <ImageLoad errorMessage={errorMsg} generateImages={generateImages} setLoadedImage={setLoadedImage} ></ImageLoad>
            <GeneratedImages generateImages={generatedImages}></GeneratedImages>
        </div>
    );
};

export default InteriorDesign;