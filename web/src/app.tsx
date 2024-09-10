import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { WeeklySummary } from './components/weekly-summary'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <WeeklySummary />

      <CreateGoal />
    </Dialog>
  )
}
