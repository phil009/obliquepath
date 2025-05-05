import type { Metadata } from "next";
// import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/shared/navbar";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-heading",
//   display: "swap",
// });

// const firaCode = Fira_Code({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Oblique Path",
  description:
    "Obliquepath helps small to mid-sized businesses automate workflows with custom AI-powered tools. From chatbots to smart inventory systems, we deliver affordable, impactful automation to boost efficiency and save time.",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="overflow-x-hidden"
        // className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
