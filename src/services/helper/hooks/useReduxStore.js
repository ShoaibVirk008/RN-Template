import { useSelector } from "react-redux"
import { getUserRole } from "../methods"
import { rolesTypes } from "../data"

export default function () {
    const { signedInUser } = useSelector(state => state?.auth)


    return {
        signedInUser,
    }
}