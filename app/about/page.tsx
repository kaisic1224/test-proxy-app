export default async function About() {
  const data = await fetch("http://swapi.dev/api/people/2");
  const json = await data.json();
  return (
    <div className="">
      <h1 className="text-2xl">About</h1>
      <code>{JSON.stringify(json, null, 4)}</code>
    </div>
  );
}
