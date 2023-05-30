import { useEffect, useState } from 'react'
import { CalendarIcon } from '@heroicons/react/outline'

import SummaryCard  from '@/components/SummaryCard'
import SearchBar from '@/components/SearchBar'
import HighlightsLayout from '@/components/HighlightsLayout'
import WeeklyLayout from '@/components/WeeklyLayout'
import { toLocalDateTime } from '@/utils/unitConverters'


export default function HomePage() {
  const [unit, setUnit] = useState("metric");
  const [summaryData, setSummaryData] = useState({});
  const [city, setCity] = useState("vancouver");
  const [geoCode, setGeoCode] = useState({ lon: 0, lat: 0 });
  const [weeklyData, setWeeklyData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const fetchSummaryData = async () => {
    setLoading(true);
    await fetch("/api/weather", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: city, unit: unit })
      }
    ).then(async (res) => {
      const data = await res.json();
      setSummaryData(data);
      setLoading(false);
    }).catch((err) => {
      setError(true);
      console.log("Error while fetching data", err)
    });
  }

  const fetchGeoCode = async () => {
    await fetch("/api/geocode", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: city })
      }
    ).then(async (res) => {
      const data = await res.json();
      setGeoCode({ lon: data[0].lon, lat: data[0].lat });
    }).catch((err) => {
      setError(true);
      console.log("Error while fetching data", err)
    });
  }

  const fetchWeeklyData = async () => {
    setLoading(true);
    fetchGeoCode();
    const res = await fetch("/api/forecast", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...geoCode, unit: unit, city: city, cnt: 7 })
      }
    );

    const data = await res.json();
    setWeeklyData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchSummaryData();
    fetchWeeklyData();
  }, [city, unit])


  if (loading) {
    return (
      <p className="text-4xl font-semibold text-gray-800">Loading Data ...</p>
  )};

  if (error) {
    return (
      <p className="text-4xl font-semibold text-gray-800">Error while loading dashboard</p>
  )};

  return(
    <>
      {summaryData && <div className="p-2 md:flex h-screen justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 shadow-lg rounded-xl bg-stone-50">
          <div className="col-span-1 md:flex justify-center items-center">
            <SummaryCard 
              city={summaryData.name} 
              country={summaryData.sys.country} 
              unit={unit}
              weather={summaryData.weather[0]}
              main={summaryData.main}
            />
          </div>
          <div className="col-span-1 md:col-span-3 p-6 pt-4 bg-orange-100 rounded-tr-lg rounded-br-lg">
            <div className="md:flex md:justify-between border-b-2 pb-2">
              <div className="flex mt-8">
                <CalendarIcon className="text-gray-800 w-10 h-10 mr-3" />
                <h2 className="text-4xl font-semibold text-gray-800">{toLocalDateTime(summaryData.dt, true)}</h2>
              </div>
              <SearchBar setCity={setCity} />
            </div>
            <WeeklyLayout weeklyData={weeklyData} unit={unit} />
            <HighlightsLayout data={summaryData} unit={unit} />
            <div className="flex mt-6 flex-row-reverse gap-4 m-3">
              <button
                className={`rounded-md text-gray-600 ${unit === "imperial" ? "font-bold" : ""}
                  text-xl text-center p-1 hover:bg-orange-300`}
                onClick={() => setUnit("imperial")}
              >
                Imperial
              </button>
              <button 
                className={`rounded-md text-gray-600 ${unit === "metric" ? "font-bold" : ""}  
                  text-xl text-center p-1 hover:bg-orange-300`}
                onClick={() => setUnit("metric")}
              >
                Metric
              </button>
          </div>
          </div>
        </div>
        </div>
      }
    </>
  )  
}