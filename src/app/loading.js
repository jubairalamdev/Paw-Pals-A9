const GlobalLoading = () => {
    return (
        <main className="min-h-[85vh] flex flex-col justify-center items-center">
            <div class="loader3">
                <div class="bars bar1"></div>
                <div class="bars bar2"></div>
                <div class="bars bar3"></div>
                <div class="bars bar4"></div>
                <div class="bars bar5"></div>
                <div class="bars bar6"></div>
                <div class="bars bar7"></div>
                <div class="bars bar8"></div>
                <div class="bars bar9"></div>
                <div class="bars bar10"></div>
            </div>
            <h3 className="text-[#4a6dd8] text-2xl pt-5 font-[family-name:var(--font-lilita)]">Loading...</h3>
        </main>
    );
};

export default GlobalLoading;