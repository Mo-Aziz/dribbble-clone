import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import favicon from "@/public/favicon.ico";

export const metadata = {
  title: "dribbble Mockup",
  description:
    "created by Maximilian Aref..to showcase and discover remarkable projects",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
};

// export const metadata = {
//   icons: {
//     icon: "/icon.png",
//     shortcut: "/shortcut-icon.png",
//     apple: "/apple-icon.png",
//     other: {
//       rel: "apple-touch-icon-precomposed",
//       url: "/apple-touch-icon-precomposed.png",
//     },
//   },
// };

const { title, description, viewport, icons } = metadata;
const { width, initialScale, maximumScale } = viewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}

      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
