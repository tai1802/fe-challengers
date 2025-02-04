import Link from "next/link";

interface IChallenger {
  path: string;
  name: string;
}

export default function Home() {
  const urlChallengers: IChallenger[] = [
    {
      name: "challenger 1",
      path: "/challenger-one",
    },
    {
      name: "challenger 2",
      path: "/challenger-two",
    },
    {
      name: "challenger 3",
      path: "/challenger-three",
    },
    {
      name: "challenger 4",
      path: "/challenger-four",
    },
  ];
  return (
    <section className="h-screen w-screen flex bg-slate-300">
      <div className="m-auto">
        <ul className="space-y-3">
          {urlChallengers.map((item, index) => (
            <li key={index}>
              <Link href={item?.path} className="capitalize">
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
