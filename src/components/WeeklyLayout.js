import WeeklyCard from "./WeeklyCard"

export default function WeeklyLayout({ weeklyData, unit }) {
    return(
      <>
        <h1 className='text-3xl font-sans font-bold text-gray-800 mb-8 mt-8'>WEEKLY FORECAST</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-7 md:gap-4">
            {weeklyData.list?.map((data) => 
              <WeeklyCard data={data} unit={unit} />
            )}
        </div>
      </>
    )
}