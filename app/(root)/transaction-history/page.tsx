import { HeaderBox } from "@/components/header-box";

export default function TransactionHistoryPage() {
  return (
    <>
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
    </>
  );
}
