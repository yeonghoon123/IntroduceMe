import { strengthsData } from "../../constants/details/Strengths";
export default function Strengths() {
    return (
        <>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-8 md:mb-16">
                🔥 나의 장점 🔥
            </h2>
            <div>
                {strengthsData.map((value, index) => (
                    <div className="mb-8 md:mb-16" key={`strength_${index}`}>
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 break-all">
                            {value.title}
                        </h3>
                        <p className="text-sm sm:text-base">{value.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
