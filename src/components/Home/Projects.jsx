/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 개인 프로젝트 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/
import { project_data } from "../../constants/Projects";

const Projects = () => {
    return (
        project_data.length > 0 && (
            <div className="w-full mb-[40px]">
                <div className="w-full border-b border-solid border-black text-[24px] text-center font-extrabold">
                    Projects
                </div>
                {project_data.map((value, index) => (
                    <div className="flex flex-row w-full p-[24px]">
                        <div className="w-[210px] mr-[100px]">
                            <p className="text-[20px] font-bold">
                                {value.company_name}
                            </p>
                            <p className="text-[14px]">{value.position}</p>
                            <p className="text-[14px]">{value.duration}</p>
                        </div>
                        <div className="w-full">
                            <ul className="list-disc ">
                                {value.content.map((contentVal, index) => (
                                    <>
                                        <li>{contentVal}</li>
                                        <br />
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        )
    );
};

export default Projects;
