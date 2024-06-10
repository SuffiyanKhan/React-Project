export const CheckAuthentication = () => {
    try {
        const token = localStorage.getItem('token')
        return token

    } catch (error) {
        console.error(error)
    }
}