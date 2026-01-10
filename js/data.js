async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Impossible de charger ${path}`);
  return res.json();
}