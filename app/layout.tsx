import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Reflet D'Homme | Salon de Coiffure Premium",
  description: "Salon de coiffure homme premium – coupe, barbe, élégance et précision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
