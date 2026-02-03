// PLUS DE "use client" ICI !
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Reflet D'Homme | Salon de Coiffure Premium",
  description: "Salon de coiffure homme premium – coupe, barbe, élégance et précision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar /> {/* Navbar est déjà un "use client" */}
        {children}
        <Footer /> {/* Footer est déjà un "use client" */}
      </body>
    </html>
  );
}
