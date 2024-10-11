export interface ImageLoadProps
{
    errorMessage: string | null;
    generateImages: ()=>void;
    setLoadedImage: ()=>void;
}