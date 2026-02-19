import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
export const metadata = {
  metadataBase: new URL("https://hero-kidz-taupe-kappa.vercel.app/"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },

  description:
    "Buy premium educational toys, kids learning boards and creative play sets online. Best price with fast delivery.",

  keywords: [
    "kids toys",
    "educational toys",
    "learning board",
    "baby toys",
    "online toy shop",
  ],

  authors: [{ name: "HeroKidz Team" }],
  creator: "HeroKidz",
  publisher: "HeroKidz",

  icons: {
    icon: "https://i.ibb.co.com/gZD1X7z5/image.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hero-kidz-taupe-kappa.vercel.app/",
    siteName: "HeroKidz",
    title: "HeroKidz - Premium Kids Toys Online",
    description:
      "Discover fun and educational toys for kids of all ages at affordable prices.",
    images: [
      {
        url: "https://i.ibb.co.com/msKF96r/image.png",
        width: 1200,
        height: 630,
        alt: "HeroKidz Homepage Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz - Premium Kids Toys Online",
    description: "Shop high-quality kids toys and learning products online.",
    images: ["https://i.ibb.co.com/msKF96r/image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});
export const fontBangla = localFont({
  src: "./../../src/fonts/mayaboti-normal.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
