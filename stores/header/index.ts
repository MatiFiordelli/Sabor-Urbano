import { create } from 'zustand'

interface HeaderState {
    headerHeight: string
    isActiveHamburgerButton: boolean
    itemsNav: string[],

    setHeaderHeight: (newValue:string) => void
    SetIsActiveHamburgerButton: (newValue:boolean) => void
}

export const useHeaderStore = create<HeaderState>()((set)=>({
    headerHeight: '100',
    isActiveHamburgerButton: false,
    itemsNav :["Home", "Menu", "Nosotros", "Contacto"],

    setHeaderHeight: (newValue: string) => set(()=>({ headerHeight: newValue})),
    SetIsActiveHamburgerButton: (newValue: boolean) => set(()=>({ isActiveHamburgerButton: newValue }))
}))