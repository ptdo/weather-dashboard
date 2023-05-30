import { LocationMarkerIcon } from '@heroicons/react/solid'

import Image from "next/image";
import { toFarenheit } from '@/utils/unitConverters';

export default function SummaryCard(props) {
  return (
    <div className="text-center p-2 text-gray-800">
      <div className='flex justify-center'>
        <LocationMarkerIcon className='font-semibold w-10 mr-2 text-gray-800' />
        <h1 className="text-4xl mb-4 mt-4 font-semibold">
          {props.city}, {props.country}
        </h1>
      </div>
      <p className="text-xl mb-8 font-semibold">{props.weather.description}</p>
      <div className="flex justify-center">
        <Image
          width={200}
          height={200}
          src={`/icons/${props.weather.icon}.svg`}
          alt="weatherIcon"
        />
      </div>
      <h1 className="text-5xl mt-8 font-bold">
        {Math.round(props.unit === "metric" ? props.main.temp 
          : toFarenheit(props.main.temp))}
        &deg;{props.unit === "metric" ? "C" : "F"}
      </h1>
      <p className="text-xl mb-4 mt-2 font-semibold">
        Feels like{" "}
        {Math.round(props.unit === "metric" 
          ? props.main.feels_like 
          : toFarenheit(props.main.feels_like))}
        &deg;{props.unit === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};