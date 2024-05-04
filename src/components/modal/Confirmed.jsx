import AnimatedGif from "@/components/Animated/AnimatedGif";

const Confirmed = ({ text, closeConfirmed, src }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen ">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <div className="py-4 flex items-center justify-center">
          <AnimatedGif src={src} alt="confirmed" />
        </div>
        <div className="mb-2 px-4 flex font-bold w-full flex-col items-center justify-center space-y-5">
          <p className="text-center w-[75%]">{text}</p>
        </div>
        <button
          onClick={closeConfirmed}
          className="bg-red-500 px-6 py-3 mt-6 rounded-xl shadow-lg text-white font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Confirmed;
