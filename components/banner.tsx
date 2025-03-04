"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { Button } from "./ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";

import { useEffect, useState } from "react";

function CloudConnectivity() {
  return (
    // <div className="flex items-center justify-center p-8 bg-gradient-to-b from-amber-50 to-amber-100 min-h-[500px]">
    <div>
      <svg
        width="500"
        height="400"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cloud - more refined shape */}
        <path
          d="M250 100C250 100 235 80 215 80C195 80 185 95 185 95C185 95 170 85 155 90C140 95 140 110 140 110C140 110 125 110 125 125C125 140 140 145 140 145H250H290C290 145 310 140 310 125C310 110 295 105 295 105C295 105 295 90 280 85C265 80 250 100 250 100Z"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Dashed lines from cloud - better positioned */}
        <path
          d="M160 145 Q 120 220, 100 300"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />

        <path
          d="M200 145 L 200 400"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />

        <path
          d="M240 145 Q 260 220, 280 255"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />

        <path
          d="M280 145 Q 310 200, 350 215"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />

        {/* Computer icons in circles - more accurate */}
        <circle
          cx="350"
          cy="240"
          r="25"
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="337"
          y="232"
          width="26"
          height="16"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          rx="1"
        />
        <line
          x1="344"
          y1="248"
          x2="356"
          y2="248"
          stroke="#ffffff"
          strokeWidth="2.5"
        />

        <circle
          cx="280"
          cy="280"
          r="25"
          stroke="#ffffff"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="267"
          y="272"
          width="26"
          height="16"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          rx="1"
        />
        <line
          x1="274"
          y1="288"
          x2="286"
          y2="288"
          stroke="#ffffff"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

const Timers = ({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
}) => {
  return (
    <div className="absolute bg-[rgb(11,12,13)] p-2 flex gap-2 flex-col  top-[300px] left-0 lg:left-[-100px]">
      <div className="flex gap-4 p-2 pl-4 bg-red-400 items-center">
        <p className="font-bold">10:00</p>
        <p className="font-bold">Opening</p>
        <p className="opacity-80 text-sm flex-1">John</p>

        <div className="bg-black p-1 py-[1px]">
          <button
            className="cursor-pointer"
            onClick={() => {
              setIsRunning(!isRunning);
            }}
          >
            {isRunning ? (
              <PauseIcon className="text-red-400" size={14} />
            ) : (
              <PlayIcon className="text-red-400" size={14} />
            )}
          </button>
        </div>
      </div>
      <div className="flex gap-4 p-2 pl-4 bg-[rgb(21,22,23)] items-center">
        <p className="font-bold">35:00</p>
        <p className="font-bold">Keynote</p>
        <p className="opacity-80 text-sm flex-1">Mao</p>

        <div className="bg-black p-1 py-[1px]">
          <PlayIcon className="text-green-400" size={14} />
        </div>
      </div>
    </div>
  );
};

function TimerItem({
  isRunning,
  setIsRunning,
}: {
  isRunning: boolean;
  setIsRunning: (val: boolean) => void;
}) {
  const duration = 600;
  const [timeLeft, setTimeLeft] = useState(duration);

  // Format time as MM:SS or HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    }

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Handle timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  return (
    <div className="absolute bottom-[-50px] left-0 lg:left-[150px]">
      <div className="relative bg-white flex justift-center items-center">
        <div className="text-8xl font-bold tabular-nums text-black p-4">
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
}

export const Banner = () => {
  const { t } = useTranslation(["banner"]);
  const [isRunning, setIsRunning] = useState(true);
  return (
    <section className="flex flex-col sm:flex-row sm:items-center py-32">
      <div className="flex-1 p-8 px-0 sm:px-8 lg:px-32">
        <div className="">
          <h1 className="text-5xl font-bold">{t("banner:description")}</h1>

          <p className="text-xl font-light my-12">{t("banner:details")}</p>

          <Button className="bg-green-400 hover:bg-green-500 transition text-black">
            {t("banner:try.for.free")}
          </Button>

          <p className="mt-2 text-sm text-gray-500">
            {t("banner:no.credit.card")}
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-80 rounded-xl w-full relative">
        <CloudConnectivity />
        <Timers isRunning={isRunning} setIsRunning={setIsRunning} />
        <TimerItem isRunning={isRunning} setIsRunning={setIsRunning} />
      </div>
    </section>
  );
};
