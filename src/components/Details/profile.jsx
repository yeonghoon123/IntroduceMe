import { profileData } from "../../constants/details/Profile";

// 사진과 개인 정보를 표시하는 헤더 컴포넌트
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 text-gray-800">
            <div className="w-[128px] h-[128px] md:w-[200px] md:h-[200px] ml:w-48 ml:h-48 rounded-full overflow-hidden mr-0 mb-8 md:mb-0 md:mr-8">
                <img
                    src={profileData.profileImg}
                    alt="Profile"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="text-center md:text-left grow">
                <h1 className="text-md sm:text-2xl font-bold">
                    {profileData.name}
                </h1>
                <p className="text-sm sm:text-md">{profileData.githubUrl}</p>
                <p className="text-sm sm:text-md">{profileData.email}</p>
            </div>
        </div>
    );
};

// 포트폴리오 아이템을 표시하는 컴포넌트
const PortfolioItem = () => {
    return (
        <>
            {profileData.portfolioData.map((portfolioData, index) => (
                <div className="min-w-[100%] my-4 flex flex-col sm:flex-row bg-white text-gray-800 shadow-md rounded-lg overflow-hidden">
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
            <grid className="flex flex-col ">
                <PortfolioItem />
            </grid>
        </>
    );
}
