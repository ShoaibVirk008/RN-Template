import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks() {

    const handleLogin = (email, password) => {
        navigate(routes.app)
    }

    return { handleLogin }
}