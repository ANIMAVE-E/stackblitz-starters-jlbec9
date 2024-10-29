import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Skyy Skill Academy"
          width={150}
          height={50}
        />
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
          Book a Free Demo
        </button>
      </div>
    </header>
  );
}