/*
    ID: IMD102
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail DetailBar page
    버전: V0.5
    버전 이력: V0.5
*/

export default function DetailBar({ props }) {
    const { pageLabel, page, setPage } = props;
    return (
        <>
            {pageLabel.map((item) => (
                <div
                    key={item.value}
                    onClick={() => setPage(item.value)}
                    className={`${
                        page === item.value
                            ? "bg-white"
                            : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    } text-center rounded-t-xl shadow-md p-2 sm:p-3 text-sm sm:text-base`}
                    style={{ minWidth: "5rem" }}
                >
                    {item.label}
                </div>
            ))}
        </>
    );
}
