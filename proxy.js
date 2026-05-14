export default async function handler(req, res) {
  const path = req.url.replace('/api/proxy', '');
  const url = `https://v3.football.api-sports.io${path}`;
  
  const response = await fetch(url, {
    headers: { "x-apisports-key": "3b9924274be6dec39dede6fc8fd29b70" }
  });
  
  const data = await response.json();
  
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.json(data);
}