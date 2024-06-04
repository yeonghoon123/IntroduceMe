/*
    ID: IM101
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 프로필 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/

import ProfieImg from "../../assets/detail/profile.jpg";
import { profile_data } from "../../constants/Profile";

const Profile = () => {
    return (
        <>
            <div className="flex flex-row w-full mb-[120px]">
                <div className="w-[128px] md:w-[182px] h-[210px] overflow-hidden mr-12">
                    <img
                        src={ProfieImg}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-[440px]">
                    <div className="flex flex-col w-full mb-[15px]">
                        <h6 className="border-b border-black border-solid text-[24px] font-extrabold">
                            Profile
                        </h6>
                        <p className="text-[28px]">{profile_data.name}</p>
                        <p className="text-[20px]">{profile_data.position}</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <h6 className="border-b border-black border-solid text-[24px] font-extrabold mb-[8px]">
                            Contact & Channels
                        </h6>
                        {profile_data.contat_channel_title.map(
                            (value, index) => (
                                <p
                                    className="text-[14px]"
                                    key={`intro_${index}`}
                                >
                                    <span className="font-bold">{value}: </span>
                                    {profile_data.contat_channel_content[index]}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
