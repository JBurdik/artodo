import { Nav } from "@/components/shared/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <section className="h-screen flex flex-col">
        <section className="flex-grow">{children}</section>
        {/* footer */}
        <div className="mt-10 shadow-md shadow-foreground p-10 text-center">
          <p className="text-xl">© Artodo.cz {new Date().getFullYear()}</p>
          <span className="text-sm text-gray-500">web by Jirka Burdych</span>
        </div>
      </section>
    </>
  );
}
