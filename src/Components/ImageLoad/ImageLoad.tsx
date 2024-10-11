import { useEffect, useState } from "react";
import { imageContainerClassName, loadImageClassName } from "./ImageLoadStyles";
import { Button, Image } from "@fluentui/react-components";
import { ImageLoadProps } from "./ImageLoadProps";

const ImageLoad = (props: ImageLoadProps): JSX.Element => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [imageError, setImageError] = useState<string | null>(null);

    useEffect(() => {
        if (props.errorMessage) {
            setImageError(props.errorMessage);
            return;
        }
        setImageError(null);
    }, [props.errorMessage]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];

        if (file) {
            const fileTypes = ['image/jpeg', 'image/png'];
            if (!fileTypes.includes(file.type)) {
                setImageError('Please select a valid image (JPEG, PNG).');
                return;
            }
            props.setLoadedImage();
            setUploadedImage(URL.createObjectURL(file));
            setImageError(null);
        }
    };
    return (
        <div className={loadImageClassName}>
            <h3>Load your idea</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageError && <div>{imageError}</div>}
            {uploadedImage && <Image src={uploadedImage} className={imageContainerClassName}></Image>}
            <Button onClick={props.generateImages}>Generate Images</Button>
        </div>
    );
};

export default ImageLoad;