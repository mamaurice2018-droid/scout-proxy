export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  
  // Find our real outbound IP
  const ipRes = await fetch("https://api4.ipify.org?format=json");
  const ipData = await ipRes.json();
  
  // Also test the API
  const apiRes = await fetch("https://v3.football.api-sports.io/status", {
    headers: { "x-apisports-key": "3b9924274be6dec39dede6fc8fd29b70" }
  });
  const apiData = await apiRes.json();
  
  res.json({ 
    vercelOutboundIP: ipData.ip,
    apiResponse: apiData
  });
}
