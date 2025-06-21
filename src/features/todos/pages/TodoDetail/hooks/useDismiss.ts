import { useNavigationHistory } from '@/contexts/NavigationHistory'

export const useDismiss = (): (() => void) => {
    const { goBack } = useNavigationHistory()

    return () => goBack('/')
}
