import { type NextRequest } from "next/server"
import { updateSession } from "@/lib/supabase/proxy"

export async function proxy(request: NextRequest) {
    console.log("Middleware is called!!")
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/console/:path*','/onboarding'
  ],
}