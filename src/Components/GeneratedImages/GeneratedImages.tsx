import { Image } from "@fluentui/react-components";
import { GeneratedImagesProps } from "./GeneratedImagesProps";
import { generatedImagesClassName, imageListClassName, imgClassName } from "./GeneratedImagesStyles";

const GeneratedImages = (props: GeneratedImagesProps): JSX.Element => {
    const imagePaths:string[]=["/Images/download (1).jpeg","Images/download (2).jpeg","Images/download (3).jpeg"]
    return (
        <div className={generatedImagesClassName}>
            <h3>Generated Images</h3>
            <div className={imageListClassName}>{props.generateImages && imagePaths.map(img=><Image src={img} className={imgClassName}></Image>)}</div>
        </div>
    );
};

export default GeneratedImages;