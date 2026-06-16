import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dich-vu")({
  component: () => <Outlet />,
});
