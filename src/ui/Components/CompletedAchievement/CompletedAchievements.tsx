import "./CompletedAchievements.css"
import {AchievementSVG} from "../../svg/component/AchievementSVG.tsx";

interface CompletedAchievementsProps {
    className?: string
}

export const CompletedAchievements = ({className}: CompletedAchievementsProps) => {

    const achievements: Array<string> = ["mas penes comidos","mas negros criticados"];

    return (
        <>
            <div className={`completedAchievements ${className}`}>
                <h1><AchievementSVG width={40}/> Logros completados</h1>
                <ul>
                    {achievements.map((achievement: string) => {
                        return (
                            <li key={achievement}>{achievement} </li>
                        )
                    })
                    }
                </ul>
            </div>

        </>
    )
}