import { useCookie, useRuntimeConfig } from "#imports";

export default function () {
  const cookieOptions = useRuntimeConfig().public.FIREBASE_AUTH_COOKIE;
  return useCookie(`${cookieOptions.name}-token`);
}
