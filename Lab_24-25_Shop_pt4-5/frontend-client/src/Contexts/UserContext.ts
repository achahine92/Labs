import { createContext } from "react"

interface UserModel {
    changeDarkTheme: (userId: string, isDarkTheme: boolean) => void
}

const defaultContext: UserModel = { 
    changeDarkTheme: () => {}
}

const UserContext = createContext(defaultContext)

export default UserContext