const GlobalLoading = () => {
    return (
        <main className="min-h-[85vh] flex flex-col justify-center items-center">
            <div className="loader3">
                <div className="bars bar1"></div>
                <div className="bars bar2"></div>
                <div className="bars bar3"></div>
                <div className="bars bar4"></div>
                <div className="bars bar5"></div>
                <div className="bars bar6"></div>
                <div className="bars bar7"></div>
                <div className="bars bar8"></div>
                <div className="bars bar9"></div>
                <div className="bars bar10"></div>
            </div>
            <h3 className="text-[#4a6dd8] text-2xl pt-5 font-(family-name:--font-lilita)">Loading...</h3>
        </main>
    );
};

export default GlobalLoading;