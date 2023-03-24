export default defineNuxtPlugin(() => {
  const { currentUser } = useAuth();

  addRouteMiddleware(
    "auth",
    (to) => {
      if (to.path === "/secret" && currentUser.value)
        return navigateTo("/secret");

      if (to.path === "/secret" && !currentUser.value)
        return navigateTo("/login");
    },
    { global: true }
  );
});
