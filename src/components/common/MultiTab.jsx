export default function MultiTab({ props }) {
    const { tabData, tabNum, setTabNum } = props;
    return tabData.map((item, index) => (
        <div
            key={`multiTab-${index}`}
            onClick={() => setTabNum(index)}
            className={`${
                tabNum === index
                    ? "bg-white"
                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
            } text-center rounded-t-xl shadow-md p-2 sm:p-3 text-sm sm:text-base`}
            style={{ minWidth: "5rem" }}
        >
            {item.companyName}
        </div>
    ));
}
