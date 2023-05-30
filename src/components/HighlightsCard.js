import Image from "next/image"

export default function HighlightsCard({ title, iconSrc, type, unit }) {
    return (
    <div className="p-5 rounded-md bg-white grid grid-cols-2 shadow-md">
      <div className="flex items-center">
        <Image width={80} height={80} src={iconSrc} alt="weatherIcon" />
      </div>
      <div>
        <p className="text-gray-800 text-lg font-medium text-left">{title}</p>
        <div className="flex text-center text-gray-800 ml-3">
          <h1 className="text-2xl font-bold">{type}</h1>
          <p className="ml-2 text-lg font-semibold">{unit || ""}</p>
        </div>
      </div>
    </div>
    )
}