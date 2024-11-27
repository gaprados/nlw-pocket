import { useQuery } from "@tanstack/react-query";

import { Dialog } from "../components/ui/dialog";
import { CreateGoal } from "../components/create-goal";
import { WeeklySummary } from "../components/weekly-summary";
import { EmptyGoals } from "../components/empty-goals";
import { getWeekSummary, useGetWeekSummary } from "../http/generated/api";
import { Loader2 } from "lucide-react";

export function Application() {
  const { data, isLoading } = useGetWeekSummary();

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    );
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;

  // return (
  //   <Dialog>
  //     {data.total > 0 ? <WeeklySummary summary={data} /> : <EmptyGoals />}

  //     <CreateGoal />
  //   </Dialog>
  // );
}
