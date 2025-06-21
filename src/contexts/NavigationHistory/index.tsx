'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useRef } from 'react'
import invariant from 'tiny-invariant'

interface ContextProps {
    goBack: (fallbackRoute?: string) => void
}

const Context = createContext<ContextProps | undefined>(undefined)

interface NavigationHistoryProviderProps {
    children: ReactNode
}

const NavigationHistoryProvider: FC<NavigationHistoryProviderProps> = ({ children }) => {
    const historyRef = useRef<string[]>([])

    const router = useRouter()

    const pathname = usePathname()

    useEffect(() => {
        if (!pathname) return

        historyRef.current =
            historyRef.current[historyRef.current.length - 1] !== pathname
                ? [...historyRef.current, pathname]
                : historyRef.current
    }, [pathname])

    const goBack = useCallback(
        (fallbackRoute?: string) => {
            if (historyRef.current.length < 2) {
                if (fallbackRoute) return router.push(fallbackRoute)
            }

            router.back()

            historyRef.current = historyRef.current.slice(0, -1)
        },
        [router]
    )

    return <Context.Provider value={{ goBack }}>{children}</Context.Provider>
}

export default NavigationHistoryProvider

export const useNavigationHistory = () => {
    const context = useContext(Context)

    invariant(context, '"useNavigationHistory" must be used within "NavigationHistoryProvider"')

    return context
}
