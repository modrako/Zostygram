import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hľadať | Zostygram"
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 