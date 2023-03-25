export default defineNuxtPlugin(() => {
  const { currentUser } = useAuth();

  addRouteMiddleware("auth", (to) => {
    console.log("currentUser: ", currentUser.value);

    // if (!currentUser.value) return navigateTo("/login");
  });
});
