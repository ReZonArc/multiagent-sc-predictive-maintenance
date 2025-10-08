import "./globals.css";
import Navbar from "@/components/navBar/NavBar";

export const metadata = {
  title: "Agentic Skincare Supply Chain Management",
  description: "A skincare supply chain management demo by MongoDB Industry Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16 h-screen">
        <Navbar />
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-3 w-full h-[calc(100vh-4rem)] max-w-screen-3xl mx-auto flex flex-col box-border">
          {children}
        </div>
      </body>
    </html>
  );
}
