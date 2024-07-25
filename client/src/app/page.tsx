import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gradient-to-tr bg-cyan-100">
      <div className="flex items-center justify-center">
        <Image src="/images/youtube.png" width={100} height={100} alt="car" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-center text-7xl font-bold">Youtube Video Downloader</p>
        <p className="text-center text-xl text-zinc-500 font-extralight">
          Paste the YouTube video URL and instantly download videos for offline
          viewing.
        </p>
      </div>
      <div className="flex space-x-4">
        <input placeholder="Paste your Youtube Video URL" className="p-4 w-96 rounded-lg border-solid border-gray-400 border-2" />
        <button className="flex p-4 rounded-md bg-green-600 text-white font-semibold">Download</button>
      </div>
    </div>
  );
}
