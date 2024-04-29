import { profileData, portfolioData } from "../../constants/details/Profile";

// 사진과 개인 정보를 표시하는 헤더 컴포넌트
const Header = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center items-center bg-white p-4 text-gray-800">
                <div className="w-[128px] h-[128px] md:w-[200px] md:h-[200px] ml:w-48 ml:h-48 overflow-hidden mr-0 mb-8 md:mb-0 sm:mr-8">
                    <img
                        src={profileData.profileImg}
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="w-full text-center sm:text-left grow">
                    <h1 className="text-md sm:text-2xl font-bold mb-4">
                        {profileData.ko_name}({profileData.en_name})
                    </h1>

                    <div className="max-w-[600px] mb-2 border-b-2 border-gray-500">
                        Contact & Channels
                    </div>

                    {profileData.contact.map((contactVal, index) => (
                        <p
                            className="text-sm sm:text-md"
                            key={`profileData_${index}`}
                        >
                            <span className="font-bold">
                                {contactVal.title}:{" "}
                            </span>
                            {contactVal.content}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

// 포트폴리오 아이템을 표시하는 컴포넌트
const PortfolioItem = () => {
    return (
        <>
            {portfolioData.map((portfolioData, index) => (
                <div
                    className="min-w-[100%] my-4 flex flex-col sm:flex-row bg-white text-gray-800 shadow-md rounded-lg overflow-hidden"
                    key={`portfolid_${index}`}
                >
                    <div className="w-full min-h-[150px] sm:w-[25%]">
                        <img
                            src={portfolioData.thumbnail}
                            alt={`Thumbnail for ${portfolioData.title}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className="w-full sm:w-[75%] flex flex-col p-4">
                        <h3 className="text-xl font-semibold mb-2">
                            {portfolioData.title}
                        </h3>
                        <p className="mb-4 grow">{portfolioData.description}</p>
                        <a
                            href={portfolioData.link}
                            className="text-blue-500 hover:text-blue-400 underline ml-auto"
                        >
                            방문하기
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default function Profile() {
    return (
        <>
            <Header />
            <hr className="my-10" />
            <div className="flex flex-col ">
                <PortfolioItem />
            </div>
        </>
    );
}
