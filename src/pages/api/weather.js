export default async function handler (req, res) {
  const { city, unit } = req.body;

  const getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await getData.json();

  res.status(200).json(data)
}
