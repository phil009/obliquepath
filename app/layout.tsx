import type { Metadata } from "next";
// import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/shared/navbar";
// import AIChatWidget from "@/components/ai-chatbot";

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
    title: "Oblique Path | AI Automation for Growing Businesses",
    description:
        "Obliquepath helps small to mid-sized businesses automate workflows with custom AI-powered tools—from chatbots to smart inventory systems—to boost efficiency and cut costs.",
    keywords: [
        "AI automation",
        "business automation",
        "custom AI solutions",
        "workflow automation",
        "chatbots for business",
        "AI tools for SMBs",
    ],
    authors: [{ name: "ObliquePath", url: "https://obliquepath.dev" }],
    creator: "ObliquePath",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    icons: {
        icon: "/icon.png",
    },
    openGraph: {
        title: "Oblique Path | AI Automation for Growing Businesses",
        description:
            "Unlock your business potential with AI-driven automation—from chatbots to workflow tools. Trusted by SMBs across industries.",
        url: "https://obliquepath.dev",
        siteName: "ObliquePath",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Oblique Path | AI Automation for Growing Businesses",
        description:
            "Custom AI tools and chatbots to automate business workflows. Boost productivity, cut costs, and scale faster.",
        // creator: "@yourTwitterHandle", // Optional
    },
    metadataBase: new URL("https://obliquepath.dev"),
    alternates: {
        canonical: "/",
    },
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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    {children}
                    <Footer />

                    <Toaster />
                </ThemeProvider>
                {/* <AIChatWidget /> */}
            </body>
        </html>
    );
}
