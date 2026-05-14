module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Get everything after /api/proxy including query string
  const path = req.url.replace(/^\/api\/proxy/, "") || "/status";
  const url = `https://v3.football.api-sports.io${path}`;

  try {
    const apiRes = await fetch(url, {
      headers: { "x-apisports-key": "3b9924274be6dec39dede6fc8fd29b70" }
    });
    const text = await apiRes.text();
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
