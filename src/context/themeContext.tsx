import { createContext,  useEffect,  useState} from "react"

interface themeContextProps{
    theme: string,
    changeTheme: () => void
}
// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext<themeContextProps | null>(null)
export const ThemeProvider = ( {children}: {children: React.ReactNode} )=>{
    const [theme, setTheme]=useState<string>('a')
    useEffect(()=>{
        //
    })
    const changeTheme = ()=>{
        setTheme('dark');
    }
    
    return (
        <themeContext.Provider value={{ changeTheme, theme }}>{children}</themeContext.Provider>
    )
}
// useThemeContext has been moved to a separate file for Fast Refresh compatibility.