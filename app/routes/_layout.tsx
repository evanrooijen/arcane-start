import { Outlet, createFileRoute } from "@tanstack/react-router";
import MainMenu from "@/components/main-menu";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MainMenu />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}
