/*
    ID: RHD-100
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail page tab compnents

    버전: V0.5
    버전 이력: V0.5
*/

export default function MultiTab({ props }) {
    const { tabData, tabNum, setTabNum } = props;
    console.log(props);
    return tabData.map((item, index) => (
        <div
            key={`multiTab-${index}`}
            onClick={() => setTabNum(index)}
            className={`${
                tabNum === index
                    ? "bg-white"
                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
            } flex-grow text-center shadow-md p-2 sm:p-3 text-sm sm:text-base min-w-20`}
        >
            {item.companyName}
        </div>
    ));
}
