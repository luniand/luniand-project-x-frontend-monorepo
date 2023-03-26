export default defineNuxtRouteMiddleware((to, from) => {
  const { currentUser } = useAuth();
  if (currentUser.value) {
    const currentUsername = currentUser.value?.username;
    if (to.params.username !== currentUsername) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  }
});
