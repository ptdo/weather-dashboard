import { getDateName } from "@/utils/unitConverters"
import Image from "next/image"

export default function WeeklyCard({ data, unit }) {
  return (
    <div className="text-center p-2 text-gray-800 bg-white shadow-md rounded-md">
      <p className="text-md font-semibold">{getDateName(data.dt)}</p>
      <p className="text-lg mb-4 font-bold">{data.weather[0].main}</p>
      <div className="flex justify-center">
        <Image
            width={50}
            height={50}
            src={`/icons/${data.weather[0].icon}.svg`}
            alt="weatherIcon"
        />
      </div>
      <p className="text-lg mt-3 font-bold">
        {Math.round(data.temp.day)} &deg;{unit === "metric" ? "C" : "F"}
      </p>
    </div>
  )
}