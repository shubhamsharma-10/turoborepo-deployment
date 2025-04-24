import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const data = await prismaClient.users.findMany();
  return (
    <>
    {JSON.stringify(data)}
    </>
  );
}
