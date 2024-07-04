export default async function Home() {
  const data = await fetch("http://swapi.dev/people/1");
  return <div className="">{JSON.stringify(data, null, 4)}</div>;
}
