import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Documentation</div>;
}
