import { useEffect, useState } from "react";
import { imageContainerClassName, loadImageClassName } from "./ImageLoadStyles";
import { Button } from "@fluentui/react-components";
import { ImageLoadProps } from "./ImageLoadProps";

const ImageLoad = (props: ImageLoadProps): JSX.Element => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];

        if (file) {
            const fileTypes = ['image/jpeg', 'image/png'];
            if (!fileTypes.includes(file.type)) {
                setImageError('Please select a valid image (JPEG, PNG).');
                return;
            }

            setUploadedImage(URL.createObjectURL(file));
            setImageError(null);
        }
    };
    return (
        <div className={loadImageClassName}>
            <h3>Load your idea</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageError && <div>{imageError}</div>}
            {uploadedImage && <img src={uploadedImage} className={imageContainerClassName}></img>}
            <Button onClick={props.generateImages}>Generate Images</Button>
        </div>
    );
};

export default ImageLoad;