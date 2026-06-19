import Sidebar from "@/components/Dashboard/Sidebar";

const DashboardLayout = ({children}) => {
    return (
        <div className="min-h-screen max-w-300 mx-auto grid grid-cols-12 gap-5">
            <div className="md:col-span-3 col-span-12 pt-15 md:pt-0">

            <Sidebar />
            </div>
            <main className="md:col-span-9 col-span-12 -mt-30 md:mt-0">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;