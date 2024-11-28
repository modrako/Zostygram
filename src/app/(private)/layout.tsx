import RouteProtector from "@/components/RouteProtector";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteProtector>
      {children} 
    </RouteProtector>
  );
}