import CarrerHeader from "../../components/Carrer/CarrerHeader";
import CarrersItem from "../../components/Carrer/CarrersItem";

export default function Carrers() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-16">
            <CarrerHeader />
            <CarrersItem />
        </div>
    );
}
