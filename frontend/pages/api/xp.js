export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000/xp';
  if (req.method === 'GET') {
    const response = await fetch(backendUrl);
    const data = await response.json();
    res.status(200).json(data);
  } else if (req.method === 'PUT') {
    const { id, total_xp, level } = req.body;
    const response = await fetch(`${backendUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total_xp, level })
    });
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}