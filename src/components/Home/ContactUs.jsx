/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 포트폴리오 및 연락수단
    버전: V0.5
    버전 이력: V0.5
*/

import { contactData, portfolioData } from "../../constants/Home/ContactUs";

const ContactUs = ({ props }) => {
    const { thankYouRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100"
                ref={thankYouRef}
            >
                <div className="flex flex-col w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-12 grow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">
                        포트폴리오
                    </h2>
                    <ul className="flex flex-row w-full text-gray-600 flex-wrap">
                        {portfolioData.map((value, index) => (
                            <div
                                className="min-w-[100%] my-4 flex flex-col sm:flex-row bg-white text-gray-800 shadow-md rounded-lg overflow-hidden"
                                key={`portfolid_${index}`}
                            >
                                <div className="w-full min-h-[150px] sm:w-[25%]">
                                    <img
                                        src={value.thumbnail}
                                        alt={`Thumbnail for ${value.title}`}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="w-full sm:w-[75%] flex flex-col p-4">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="mb-4 grow">
                                        {value.description}
                                    </p>
                                    <a
                                        href={value.link}
                                        className="text-blue-500 hover:text-blue-400 underline ml-auto"
                                    >
                                        방문하기
                                    </a>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-12 grow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">
                        Contact & Channels
                    </h2>
                    <ul className="flex flex-row w-full text-gray-600 flex-wrap">
                        {contactData.map((value, index) => (
                            <li
                                className="w-full md:w-[50%] p-4 md:p-10"
                                key={`home_skillset_${index}`}
                            >
                                <span className="font-bold text-xl">
                                    {value.title}
                                </span>
                                <br />
                                {value.content}
                                {value.content2 && (
                                    <>
                                        <br />
                                        {value.content2}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
