import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import KitchenAsks from './kitchen-asks/kitchen-asks';

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      <div className="w-20">
        <Sidebar />
      </div>
      <div className="bg-gray-50 h-fit min-h-screen w-full p-6 rounded-l-[3rem]">
        <Navbar />
        {...children}
        <KitchenAsks />
      </div>
    </div>
  );
};

export default Layout;
