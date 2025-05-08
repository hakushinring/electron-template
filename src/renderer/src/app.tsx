import Versions from './components/versions'
import Clock from './components/clock'

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Clock />
      </div>
      <div className="mt-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
        <Versions />
      </div>
    </div>
  )
}

export default App
