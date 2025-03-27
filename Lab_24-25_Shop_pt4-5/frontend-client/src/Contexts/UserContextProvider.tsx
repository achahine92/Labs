import { FC, ReactNode, useState } from "react"
import UserContext from "./UserContext"
import User from "../Models/User"

interface Props {
    children: ReactNode
}

const UserContextProvider: FC<Props> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([
        {
            userId: "67abac1e5a8a1935ac0d6931",
            displayName: "Harry@Seeker7",
            isDarkTheme: false
        },
        {
            userId: "67abac265a8a1935ac0d6935",
            displayName: "FrizzyBookWorm",
            isDarkTheme: true
        },
        {
            userId: "67ae664de8fcc92d9b2dc357",
            displayName: "Luna@Quibbler",
            isDarkTheme: false
        }
    ])

    const changeDarkTheme = (userId: string, isDarkTheme: boolean) => {
        setUsers((users) => {
            return users.map((user) => {
                return user.userId === userId ? {...user, isDarkTheme} : user
            })
        })
    }

    return (
        <UserContext.Provider value={{ changeDarkTheme }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider