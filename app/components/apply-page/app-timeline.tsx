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

  const startDate = periods[0].start;
  const endDate = periods[2].end;

  const calculateProgress = useCallback(
    (current: Date): number => {
      const total = endDate.getTime() - startDate.getTime();
      const elapsed = current.getTime() - startDate.getTime();
      return Math.min(Math.max((elapsed / total) * 100, 0), 100);
    },
    [startDate, endDate],
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
    <div className="w-full">
      <div className="relative">
        <div className="relative h-4">
          <Progress value={progress} className="absolute w-full h-4" />

          {periods.map((period, index) => {
            const position = `${(index / (periods.length - 1)) * 100}%`;
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2"
                style={{ left: position }}
              >
                <div className="w-4 h-4 border-2 bg-purple-200 border-black rounded-full" />
              </div>
            );
          })}
        </div>

        <div className="relative mt-4">
          {periods.map((period, index) => {
            const position = `${(index / (periods.length - 1)) * 100}%`;
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2"
                style={{ left: position }}
              >
                <div className="text-center mb-1 text-sm font-medium text-gray-700">
                  {labels[index]}
                </div>
                <div className="text-20px text-indigo-600 text-nowrap">
                  {formatDate(period.start)} - {formatDate(period.end)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppTimeline;
