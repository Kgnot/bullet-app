import './Profile.css'
import {ProfileContainer} from "../../Components/ProfileContainer/ProfileContainer.tsx";
import { Collection } from '../../Components/Collections/Collection.tsx';
import {Goals} from "../../Components/Goals/Goals.tsx";
import {FastStats} from "../../Components/FastStats/FastStats.tsx";
import {CompletedAchievements} from "../../Components/CompletedAchievement/CompletedAchievements.tsx";

export const Profile = () => {
    return (
        <>
            <section className="Profile">
                <div className="profile-left">
                    <ProfileContainer className="profile-left-top child-default-comp"/>

                    <div className="profile-left-bot">
                        <Collection
                        className="profile-left-bot-left child-default-comp"
                        name="Gastos"
                        collection= {["Gasto", "Gasto 2", "Gasto 3"]}
                        />

                        <Goals
                            className="profile-left-bot-right child-default-comp"
                            items={['aaas','xd',"otro","y otro porque no"]}
                        />
                    </div>
                </div>
                <div className="profile-right">
                    <FastStats className="profile-right-top child-default-comp"/>
                    <CompletedAchievements className="profile-right-bot child-default-comp"/>
                </div>
            </section>
        </>
    )
}

export default Profile;