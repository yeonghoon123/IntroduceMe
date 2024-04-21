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
