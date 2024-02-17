import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/actions/auth";

const LOGIN_PAGE = "/login";
const HOME_PAGE = "/";

// middleware for authentications
export async function middleware(request: NextRequest) {
  // const { url, nextUrl, cookies } = request;

  // //get the userSession 
  // const session = await getSession();

  // //if there is no session/is invalid
  // if (!session) {
  //   // force delete cookie
  //   cookies.delete("polar-bear");

  //   // if we are trying to go to the login page continue
  //   if (nextUrl.pathname == LOGIN_PAGE) return NextResponse.next();

  //   // otherwise redirect to login

  //   //build the login url with or without callback
  //   const callback = nextUrl.pathname.slice(1);
  //   const loginWCallback = callback ? `${LOGIN_PAGE}?callback=${callback}`: LOGIN_PAGE;

  //   return NextResponse.redirect(new URL(loginWCallback, url));
  // }

  // // from now on we know that the session is valid
  // //if we are trying to go to the login page redirect to home
  // if (nextUrl.pathname == LOGIN_PAGE) {
  //   return NextResponse.redirect(new URL(HOME_PAGE, url));
  // }

  // otherwise continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"]
};
