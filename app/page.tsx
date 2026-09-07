import CatalogPage from "@/components/CatalogPage";
import PaymentPage from "@/components/PaymentPage";
import SuccessPage from "@/components/SuccessPage";
import RejectedPage from "@/components/RejectedPage";

export default function Home() {
  return (
    <main className="relative">
      <CatalogPage />
      <PaymentPage />
      <SuccessPage />
      <RejectedPage />
    </main>
  );
}
