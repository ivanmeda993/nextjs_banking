import { HeaderBox } from "@/components/header-box";
import { TotalBalanceBox } from "@/components/total-balance-box";

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
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
      </div>
    </section>
  );
};

export default HomePage;
