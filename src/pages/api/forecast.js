export default async function handler (req, res) {
  const { lat, lon, cnt, unit } = req.body;

  const getData = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&units=${unit}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await getData.json();

  res.status(200).json(data)
}