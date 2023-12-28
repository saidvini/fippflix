import { NextResponse } from 'next/server'

export default function Middleware(request) {

    if(request.cookies.get("cookieAuth") == undefined){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*']
}