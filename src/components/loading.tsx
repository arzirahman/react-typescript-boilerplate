import { useSelector } from "react-redux"
import { AppState } from "../services/constants"

export const Loading = () => {
    const { loading } = useSelector((state: {app: AppState}) => state.app);

    return (
        <div className={`fixed text-white h-screen w-screen bg-[rgba(0,0,0,0.7)] 
            ${loading ? 'flex' : 'hidden'} justify-center items-center
        `}>
            Loading
        </div>
    )
}
