module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-apisports-key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const path = req.url.replace("/api/proxy", "") || "/status";
    const url = `https://v3.football.api-sports.io${path}`;

    const apiRes = await fetch(url, {
      headers: { "x-apisports-key": "3b9924274be6dec39dede6fc8fd29b70" }
    });

    const text = await apiRes.text();
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
