import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Detail profilu | Zostygram"
}

export default function ProfileDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 