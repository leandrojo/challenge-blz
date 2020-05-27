export default async (req: any, res: any) => {
  const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
  const data = await res.json();

  res.statusCode = 200
  res.json(data);
}
