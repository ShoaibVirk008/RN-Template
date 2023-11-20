import { useMemo } from "react";
import { generateRandomUsers } from "../methods";

export default function () {
    const numberOfUsers = 25; // You can change this to the desired number of users
    const users = useMemo(
        ()=>Array.from({ length: numberOfUsers }, generateRandomUsers),
        []
        );

    const dietitianUsers = useMemo(()=>users.filter((item, index) => item.isDietitian),[users])

    return { users, dietitianUsers }
}