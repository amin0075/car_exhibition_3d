import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <nav>
          <ul
            style={{ listStyle: "none", display: "flex", gap: 16, padding: 16 }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/next">Next</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
