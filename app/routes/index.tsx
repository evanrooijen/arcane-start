// app/routes/index.tsx
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { prisma } from "../lib/db/client";

async function readCount() {
  const count = await prisma.character.count();
  return count;
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const getCharacters = createServerFn({
  method: "GET",
}).handler(async () => {
  return await prisma.character.findMany({
    cacheStrategy: {
      swr: 60,
      ttl: 60,
      tags: ["list_characters"],
    },
  });
});

const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await prisma.character.create({
      data: {
        name: "Character: " + (count + data),
      },
    });
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => {
    const count = await getCount();
    const characters = await getCharacters();
    return { count, characters };
  },
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          updateCount({ data: 1 }).then(() => {
            router.invalidate();
          });
        }}
      >
        Add 1 to {state.count}?
      </button>
      <ul>
        {state.characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
}
