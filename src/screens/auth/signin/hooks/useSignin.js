import { navigate } from "../../../../navigation/RootNavigation"
import { ROUTES } from "../../../../services"

export function useHooks() {

    const handleLogin = (email, password) => {
        navigate(ROUTES.app)
    }

    return { handleLogin }
}