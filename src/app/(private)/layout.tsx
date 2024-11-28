import AuthGuard from "@/components/AuthGuard";

export const metadata = { title: "Protected | SnapZoška" };

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      {children} {/* Render private pages */}
    </AuthGuard>
  );
}