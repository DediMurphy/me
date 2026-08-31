import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dedi Murphy — Full Stack & .NET Backend Developer",
  description:
    "Programmer berpengalaman membangun sistem ERP, CRM, dan Accounting dengan VB.NET, ASP.NET, dan SQL Server. Terbuka untuk peran Full Stack Developer / .NET Backend Developer.",
  keywords: [
    "Dedi Murphy",
    "Full Stack Developer",
    ".NET Backend Developer",
    "ERP Developer",
    "SQL Server",
    "ASP.NET",
  ],
  authors: [{ name: "Dedi Murphy" }],
  openGraph: {
    title: "Dedi Murphy — Full Stack & .NET Backend Developer",
    description:
      "Programmer berpengalaman membangun sistem ERP, CRM, dan Accounting dengan VB.NET, ASP.NET, dan SQL Server.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-text antialiased">
        <div className="bg-grid pointer-events-none fixed inset-0 z-0 opacity-35" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
