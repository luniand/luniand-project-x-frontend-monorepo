export default defineNuxtPlugin(() => {
  const { currentUser } = useAuth();

  addRouteMiddleware("auth", (to) => {
    if (!currentUser.value) return navigateTo("/login");
  });
});
