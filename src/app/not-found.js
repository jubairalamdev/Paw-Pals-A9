import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="min-h-[95vh] -mt-25 flex flex-col justify-center items-center pt-25 bg-white">
            <Image 
                src="/images/sad-cat.png"
                alt='Sad Cat'
                width={500}
                height={500}
            />
            <h3 className="text-xl md:text-3xl font-(family-name:--font-lilita) leading-tight text-[#646464]">
              Uh oh! I cannot Find such Page
            </h3>
            <Link 
                href="/"
                className="bg-[#F0AA38] mt-2 hover:bg-[#d9921f] text-white font-bold font-open-sans py-2 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {"Let's"} go Back
              </Link>
        </main>
    );
};

export default NotFoundPage;