import { NextRequest, NextResponse } from 'next/server';

const removedImageNames = ['edfh-yellow-room', 'henners-dj'];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const optimizerSource = searchParams.get('url') ?? '';
  const target = `${pathname} ${optimizerSource}`;

  if (removedImageNames.some((name) => target.includes(name))) {
    return new NextResponse('Removed image', {
      status: 410,
      headers: {
        'cache-control': 'no-store, max-age=0',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/images/:path*', '/_next/image'],
};
