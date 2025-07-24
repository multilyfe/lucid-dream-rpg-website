export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000/waifus';
  if (req.method === 'GET') {
    const response = await fetch(backendUrl);
    const data = await response.json();
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(201).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}