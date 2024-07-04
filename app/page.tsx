export default async function Home() {
  const data = await fetch("http://swapi.dev/api/people/1");
  const json = await data.json();
  console.log("json", json);
  return <div className="">{JSON.stringify(json, null, 4)}</div>;
}
