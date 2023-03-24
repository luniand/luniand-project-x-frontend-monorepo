export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp()
        console.log($auth?.currentUser, 'ahjsdgasgdagsh', !$auth?.currentUser?.uid);
        if (!$auth?.currentUser?.uid) {
            return abortNavigation()
        }
    })
})
