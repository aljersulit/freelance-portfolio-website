import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Payload CMS
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.PAYLOAD_SECRET;

    if (!authHeader || !expectedToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.replace('Bearer ', '');

    if (token !== expectedToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { collection, global } = body;

    // Revalidate based on what was updated
    if (global) {
      // For global updates, revalidate the entire homepage
      revalidatePath('/');

      // Also revalidate specific paths based on the global type
      switch (global) {
        case 'hero':
          revalidateTag('hero-data');
          break;
        case 'about':
          revalidateTag('about-data');
          break;
        case 'banner':
          revalidateTag('banner-data');
          break;
        case 'testimonials':
          revalidateTag('testimonials-data');
          break;
        case 'works':
          revalidateTag('works-data');
          break;
        default:
          break;
      }
    }

    if (collection) {
      // For collection updates, revalidate relevant paths
      switch (collection) {
        case 'media':
          // Revalidate all pages that might use media
          revalidatePath('/');
          break;
        default:
          break;
      }
    }

    return NextResponse.json({
      message: 'Revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}

// Also handle GET requests for manual testing
export async function GET() {
  try {
    revalidatePath('/');
    return NextResponse.json({
      message: 'Manual revalidation successful',
      revalidated: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Manual revalidation error:', error);
    return NextResponse.json(
      { message: 'Error during manual revalidation', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
