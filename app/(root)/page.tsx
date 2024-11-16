import HeaderMsg from "@/components/HeaderMsg";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceSect from "@/components/TotalBalanceSect";

const Home = () => {
  const userLoggedIn = { firstName: "Ali", lastName: 'Abdullateef', email: 'ali.abdullateef94@gmail.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderMsg
            type="greeting"
            title="Welcome,"
            user={userLoggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions effortlessly, all in one place."
          />

          <TotalBalanceSect accounts={[]} totalBanks={1} totalCurrentBalance={3350.43} />
        </header>
      </div>
      <RightSideBar user={userLoggedIn} transactions={[]} banks={[{ currentBalance: 1384}, { currentBalance: 3372}]} />
    </section>
  );
};

export default Home;
