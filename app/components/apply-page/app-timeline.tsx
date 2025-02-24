import { useState, useEffect, useCallback } from "react";
import { Progress } from "../ui/progress";

export interface Period {
  start: Date;
  end: Date;
}

// to mark the 3 periods, one for applications opening, one for interview, one for application decisions
interface AppTimelineProps {
  periods: [Period, Period, Period];
}

const labels = ["Applications Open", "Interviews", "Application Decisions"];

const AppTimeline = ({ periods }: AppTimelineProps) => {
  const [progress, setProgress] = useState<number>(0);

  const calculateProgress = useCallback(
    (current: Date): number => {
      let completedPeriods = 0;
      let activeProgress = 0;

      for (let i = 0; i < 2; i++) {
        const period = periods[i];
        if (current > period.end) {
          completedPeriods++;
        } else if (current >= period.start && current <= period.end) {
          const total = period.end.getTime() - period.start.getTime();
          const elapsed = current.getTime() - period.start.getTime();
          activeProgress = elapsed / total;
          break;
        }
      }

      const calculatedProgress = completedPeriods * 50 + activeProgress * 50;
      return Math.min(calculatedProgress, 100);
    },
    [periods],
  );

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setProgress(calculateProgress(now));
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateProgress]);

  return (
    <div className="w-full mt-32 mb-48">
      <h3 className="text-2xl text-left font-medium text-[#4A4A51] mb-2 pb-8">
        Application Timeline
      </h3>

      <div className="relative flex flex-col justify-center w-full">
        <Progress value={progress} className="w-full h-1" />

        {periods.map((period, index) => {
          const now = new Date();
          const isUpcoming = now < period.start;
          const position =
            index === 0
              ? "0%"
              : index === periods.length - 1
                ? "calc(100% - 1rem)"
                : `${(index / (periods.length - 1)) * 100}%`;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: position,
                transform: "translateX(0%)",
              }}
            >
              <div
                className={`w-4 h-4 md:w-6 md:h-6 border rounded-full ${
                  isUpcoming
                    ? "bg-[#E7E5EE] border-[#4A4A51]"
                    : "bg-[#EDBAFF] border-[#4A4A51]"
                }`}
              />

              <div
                className={`absolute mt-2 ${
                  index === 0
                    ? "left-0"
                    : index === 1
                      ? "left-1/2 -translate-x-1/2"
                      : "right-0"
                }`}
              >
                <div
                  className={`text:sm md:text-base font-medium text-gray-700 ${
                    index === 0
                      ? "text-left"
                      : index === 1
                        ? "text-center"
                        : "text-right"
                  } md:whitespace-nowrap`}
                >
                  {labels[index]}
                </div>
                <div
                  className={`text-sm md:text-m font-normal text-indigo-600 ${
                    index === 0
                      ? "text-left"
                      : index === 1
                        ? "text-center"
                        : "text-right"
                  } md:whitespace-nowrap`}
                >
                  {formatDate(period.start)} - {formatDate(period.end)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppTimeline;
