import { Context } from "vm";
import { GeneratedImagesProps } from "./GeneratedImagesProps";
import { generatedImagesClassName } from "./GeneratedImagesStyles";

const GeneratedImages = (props: GeneratedImagesProps): JSX.Element => {
    const images=require.context('public\Images',true);

    return (
        <div className={generatedImagesClassName}>
            <h3>Generated Images</h3>
            {props.generateImages && <div>aaaa</div>}
        </div>
    );
};

export default GeneratedImages;