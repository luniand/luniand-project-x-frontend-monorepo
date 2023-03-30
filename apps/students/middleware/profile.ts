export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();
  if (user.value) {
    const currentUsername = user.value?.email?.split("@")[0];
    if (to.params.username !== currentUsername) {
      throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  }
});
