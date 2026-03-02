import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  const lang = country === "RU" ? "ru" : "en";

  const response = NextResponse.next({
    request: {
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        "x-lang": lang,
      }),
    },
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images|.*\\..*).*)"],
};
