import { routing } from "./07.shared/config";
// import { routes } from "../protected-routes";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel\\..*).*)"],
};
