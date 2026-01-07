import type { Metadata, Viewport } from "next";
import { Poppins, Ubuntu } from "next/font/google"; // Import fonts
import GlobalLoader from "./components/GlobalLoader"; // Import GlobalLoader
import "./globals.css";

// Configure fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moniruzzamanpiyash.netlify.app/"),
  title: "Moniruzzaman Piyash | Full Stack Developer",
  description:
    "Personal Portfolio of Moniruzzaman Piyash - Full Stack Developer specializing in Next.js, React, and Django. Explore my projects, skills, and experience.",
  keywords: [
    "Moniruzzaman Piyash",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Moniruzzaman Piyash" }],
  creator: "Moniruzzaman Piyash",
  publisher: "Moniruzzaman Piyash",
  openGraph: {
    title: "Moniruzzaman Piyash | Full Stack Developer",
    description:
      "Explore the portfolio of Moniruzzaman Piyash, a passionate Full Stack Developer building modern web applications.",
    url: "https://moniruzzamanpiyash.netlify.app/",
    siteName: "Moniruzzaman Piyash Portfolio",
    images: [
      {
        url: "/assets/images/home.png", // Assuming this exists, effectively the 'hero' image
        width: 1200,
        height: 630,
        alt: "Moniruzzaman Piyash Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moniruzzaman Piyash | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and Django. Check out my latest work!",
    images: ["/assets/images/home.png"], // Reuse hero image for consistency
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f0c29",
};

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${ubuntu.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem("theme") || "ocean";
                  document.documentElement.setAttribute("data-theme", savedTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
