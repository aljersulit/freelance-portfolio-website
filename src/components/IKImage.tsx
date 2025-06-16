import { Image, ImageKitProvider, IKImageProps } from '@imagekit/next';

export default function IKImage(props: IKImageProps) {
  return (
    <ImageKitProvider urlEndpoint='https://ik.imagekit.io/aljersulit'>
      <Image
        {...props}
      />
    </ImageKitProvider>
  )
}