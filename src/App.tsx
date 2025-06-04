import { RegistrationForm } from "./components/RegistrationForm"
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <RegistrationForm />
      <Toaster />
    </div>
  )
}

export default App