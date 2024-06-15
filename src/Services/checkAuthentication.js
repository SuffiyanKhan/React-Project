export const CheckAuthenticationUser = () => {
    try {
        const token = localStorage.getItem('token')
        return token

    } catch (error) {
        console.error(error)
    }
}