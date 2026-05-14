module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const path = req.url.replace('/api/proxy', '') || '/status';
  const url = `https://v3.football.api-sports.io${path}`;
  
  const response = await fetch(url, {
    headers: { "x-apisports-key": "3b9924274be6dec39dede6fc8fd29b70" }
  });
  
  const data = await response.text();
  res.status(200).send(data);
}
