import './preload'

declare global {
    interface Window {
        api: {
            windowAction(action: string): void
            windowSize(): string
        } 
    }
}