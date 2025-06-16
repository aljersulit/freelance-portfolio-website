import { Image, ImageKitProvider, IKImageProps } from '@imagekit/next';

export default function IKImage({ alt, ...rest }: IKImageProps) {
  return (
    <ImageKitProvider urlEndpoint='https://ik.imagekit.io/aljersulit'>
      <Image alt={alt} {...rest} />
    </ImageKitProvider>
  );
}
