'use client'

export default async function ContactPage() {
  const data = await fetch("http://swapi.dev/api/people/2");
  const json = await data.json();
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl">Contact</h1>
        <code>{JSON.stringify(json, null, 4)}</code>
      </div>
    </div>
  );
}
