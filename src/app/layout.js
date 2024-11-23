import "./globals.css";
import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        <main>{children}</main>
      </body>
    </html>
  );
}
