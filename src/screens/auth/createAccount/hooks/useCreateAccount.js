import { useState } from "react"

export function useHooks() {

    const [accepted, setAccepted] = useState(false)

    return { accepted, setAccepted }
}