export default async function handler (req, res) {
  const { city } = req.body;

  const getData = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await getData.json();

  res.status(200).json(data)
}