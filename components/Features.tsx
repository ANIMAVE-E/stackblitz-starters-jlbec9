export default function Features() {
  const features = [
    'Live/ Offline/ Hybrid Mode Choose as per your convenience',
    '25+ Industry Complying Skills Grow Exponentially',
    'Globally Accepted Certificate by ASDC (Skill India) & IIT Guwahati',
    'LOR & Internship Letter No Career Break'
  ];

  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2 text-white">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            ✓
          </div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}