import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-8 space-y-4 -mt-6 mb-2">
        <img
          src="/krish.jpg"
          alt="Krish Prajapati"
          className="w-32 h-32 rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800 uppercase">
          Krish Prajapati
        </h1>
        <p className="text-lg text-gray-600">Full Stack Developer</p>
        <p className="text-md text-gray-500">
          Email:{" "}
          <a
            href="mailto:prajapatikrish132005@gmail.com"
            className="text-blue-600"
          >
            prajapatikrish132005@gmail.com
          </a>
        </p>
      </div>

      {/* About Section */}
      <div className="pb-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tighter">
          About ZapConvert
        </h2>
      </div>

      <div className="space-y-12 text-md md:text-lg text-gray-500 pb-4 md:pb-8 mb-6">
        <p>
          Welcome to ZapConvert, the ultimate online tool for converting
          multimedia files with ease and no restrictions. Whether you&apos;re a
          content creator, professional, or enthusiast, ZapConvert offers
          unlimited and free image, audio, and video conversion—helping you
          unleash your creativity like never before.
        </p>

        {/* Image Conversion */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🖼️ Image Conversion:
          </h3>
          <p>
            Convert images effortlessly across multiple formats! Resize, crop,
            rotate, and enhance your images with ease. Whether you&apos;re
            working with PNG, JPEG, or other formats, ZapConvert has you
            covered.
          </p>
        </div>

        {/* Audio Transformation */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🎵 Audio Transformation:
          </h3>
          <p>
            Turn your audio files into whatever format you need! From MP3 to WAV
            or AAC, ZapConvert allows you to change file formats, adjust
            bitrates, trim, merge, and customize your audio projects with ease.
          </p>
        </div>

        {/* Video Metamorphosis */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🎥 Video Metamorphosis:
          </h3>
          <p>
            Transform your videos to fit any platform or need. With ZapConvert,
            you can convert video formats, trim, merge clips, and edit with
            simple controls— perfect for creators and professionals alike.
          </p>
        </div>

        {/* Unlimited Usage */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🚀 Unlimited Usage, No Strings Attached:
          </h3>
          <p>
            ZapConvert is fully free and unlimited. No hidden fees or
            restrictions— just pure creative freedom to convert as many files as
            you want.
          </p>
        </div>

        {/* Accessible Anywhere */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🌐 Accessible Anywhere:
          </h3>
          <p>
            Access ZapConvert from any device with an internet connection.
            Whether you&apos;re on your phone, tablet, or computer, you can
            convert your files anytime, anywhere.
          </p>
        </div>

        {/* Secure and Private */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🔒 Secure and Private:
          </h3>
          <p>
            We take your privacy and security seriously. Rest assured that your
            files remain confidential, with full control over your data.
          </p>
        </div>

        {/* User-Friendly Interface */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            💡 User-Friendly Interface:
          </h3>
          <p>
            No technical skills needed! ZapConvert is designed with an intuitive
            interface to ensure that both beginners and pros can convert files
            with minimal effort.
          </p>
        </div>

        {/* Constantly Evolving */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            📈 Constantly Evolving:
          </h3>
          <p>
            ZapConvert is constantly evolving with regular updates and new
            features to improve your multimedia experience.
          </p>
        </div>

        {/* Conclusion */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-medium text-gray-700">
            🌟 It&apos;s Free, It&apos;s Powerful, It&apos;s ZapConvert:
          </h3>
          <p>
            Experience a world of unlimited multimedia conversion at your
            fingertips. ZapConvert is designed to empower your creative projects
            without limitations.
          </p>
        </div>

        <p>
          Join the thousands of creators, professionals, and hobbyists who trust
          ZapConvert to transform their media. Start converting today and bring
          your vision to life with unlimited freedom!
        </p>
      </div>
    </>
  );
};

export default AboutPage;
