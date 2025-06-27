import sharp from 'sharp';

export async function generateDynamicImageBlurDataURL(imageURL: string) {
  let blurDataURL: string = '';
  try {
    const response = await fetch(imageURL);

    // Handle non-2xx responses (e.g., 404, 500)
    if (!response.ok) {
      console.warn(`Failed to fetch image for blur hash: ${imageURL}, Status: ${response.status}`);

      blurDataURL =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
      return blurDataURL;
    }

    const arrayBuffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    const resizedBuffer = await sharp(imageBuffer)
      .resize(20, 20)
      .blur(1) // Adjust blur amount as needed
      .toFormat('webp')
      .toBuffer();

    blurDataURL = `data:image/webp;base64,${resizedBuffer.toString('base64')}`;
  } catch (error) {
    console.error(`Error generating blurDataURL for ${imageURL}:`, error);
    // Fallback to a transparent 1x1 pixel if error occurs
    blurDataURL =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/z8HwAIBAQAJpWqAAAAAAElFTkSuQmCC';
  } finally {
    return blurDataURL;
  }
}