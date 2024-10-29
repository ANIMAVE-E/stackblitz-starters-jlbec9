import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import Features from '@/components/Features';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1B3A]">
      <Header />
      
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md mb-6">
            100% PLACEMENT GUARANTEE
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Post Graduation Program on Full Stack Web Development with{' '}
            <span className="text-yellow-500">Python/Java</span>
          </h1>
          
          <button className="bg-gray-700 text-white px-8 py-3 rounded-md mb-8">
            Learn in Hindi
          </button>
          
          <div className="mb-8">
            <p className="text-white mb-4">Certificate Partners:-</p>
            <div className="flex gap-4">
              <Image
                src="/partners.png"
                alt="Certificate Partners"
                width={300}
                height={60}
                className="bg-white rounded-lg p-2"
              />
            </div>
          </div>
          
          <div className="border border-red-500 border-dashed p-4 inline-block mb-8">
            <div className="flex items-center gap-2 text-white">
              <Image src="/calendar.png" alt="Calendar" width={24} height={24} />
              <span>Next Batch Starts from </span>
              <span className="text-yellow-500">22 April, 2024</span>
            </div>
          </div>
          
          <Features />
          
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold mt-6">
            EXPLORE ALL PROGRAMS
          </button>
        </div>
        
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}