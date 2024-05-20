import { HeaderBox } from "@/components/header-box";
import { TotalBalanceBox } from "@/components/total-balance-box";
import RightSidebar from "@/components/right-sidebar";

const user = {
  name: "John",
  lastName: "Doe",
  userId: "123",
  $id: "123",
  city: "New York",
  address1: "123 Main St",
  ssn: "123-45-6789",
  dateOfBirth: "01/01/1990",
  email: "test@gmail.com",
  firstName: "John",
  state: "NY",
  postalCode: "12345",
  dwollaCustomerUrl: "https://api-sandbox.dwolla.com/customers/123",
  dwollaCustomerId: "123",
};
const HomePage = () => {
  return (
    <div className="flex  items-start gap-4 ">
      <header className="home-header flex-1">
        <HeaderBox
          title="Welcome to the app"
          subtext="This is a subtext"
          type="greeting"
          user="John"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={12345}
        />
      </header>
      <RightSidebar user={user} transactions={[]} banks={[]} />
    </div>
  );
};

export default HomePage;
