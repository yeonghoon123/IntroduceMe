import profileImg from "../../assets/detail/profile.jpg";

export const profileData = {
    profileImg,
    ko_name: "김영훈",
    en_name: "KimYeongHoon",
    contact: [
        {
            title: "Email",
            content: "dudgns020904@gmail.com",
        },
        {
            title: "Phone",
            content: "010-2721-1059",
        },
        {
            title: "Github",
            content: "https://github.com/yeonghoon123",
        },
    ],
};

export const portfolioData = [
    {
        thumbnail: profileImg,
        title: "이미지 제네레이터",
        description: "사용자가 입력한 텍스트를 이미지로 생성 ",
        link: "",
    },
    {
        thumbnail: profileImg,
        title: "포트폴리오 이름1",
        description: "포트폴리오 1에 설명",
        link: "",
    },
];
