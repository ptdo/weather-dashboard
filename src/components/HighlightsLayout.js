import HighlightsCard from "./HighlightsCard";
import { toLocalDateTime, toDirection } from "@/utils/unitConverters";


export default function HighlightsLayout({ data, unit }) {

  return (
    <>
      {data && 
        <div>
          <h2 className='text-3xl font-sans font-bold text-gray-800 mb-8 mt-14'>TODAY&#39;S HIGHTLIGHTS</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
            <HighlightsCard
              title={"Humidity"}
              iconSrc={"/icons/humidity.png"}
              type={data.main?.humidity}
              unit={"%"}
            />
            <HighlightsCard
              title={"Wind Speed"}
              iconSrc={"/icons/wind.png"}
              type={data.wind?.speed}
              unit={unit === "metric" ? "m/s" : "miles/hr"}
            />
            <HighlightsCard
              title={"Wind Direction"}
              iconSrc={"/icons/compass.png"}
              type={toDirection(data.wind?.deg)}
            />
            <HighlightsCard
              title={"Visibility"}
              iconSrc={"/icons/binocular.png"}
              type={unit === "metric" ? data.visibility / 1000 : Math.round(data.visibility * 0.00062137)}
              unit={unit === "metric" ? "km" : "miles"}
            />
            <HighlightsCard
              title={"Sunrise"}
              iconSrc={"/icons/sunrise.png"}
              type={toLocalDateTime(data.sys?.sunrise, false)}
            />
            <HighlightsCard
              title={"Sunset"}
              iconSrc={"/icons/sunset.png"}
              type={toLocalDateTime(data.sys?.sunset, false)}
            />
          </div>
        </div>  
      }
    </>
  );
}