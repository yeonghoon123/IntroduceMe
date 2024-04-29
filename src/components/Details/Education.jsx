import { educationData } from "../../constants/details/Education";
export default function Education() {
    return (
        <>
            <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800  mb-8 md:mb-16">
                학력
            </h2>
            {educationData.map((value, index) => (
                <div key={`education_${index}`}>
                    <div>
                        <div className="my-8 md:my-16">
                            <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                                {value.schoolName}
                            </h3>
                            <p className="text-sm sm:text-base">
                                <span className="font-semibold">학과: </span>
                                {value.department} <br />
                                <span className="font-semibold">
                                    재학 기간:{" "}
                                </span>
                                {value.duration}
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
