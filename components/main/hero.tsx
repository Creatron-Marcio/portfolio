import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Background Video with Opacity */}
      <div className="absolute top-[-340px] left-0 w-full h-full -z-20 opacity-40">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Name Overlay */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg text-center animate-fadeIn">
          Marcio Grazianni
        </h1>
      </div>

      <HeroContent />
    </div>
  );
};
