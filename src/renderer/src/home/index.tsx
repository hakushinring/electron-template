import Versions from '@renderer/components/versions'
import Clock from '@renderer/components/clock'

const Home: React.FC = () => {
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
export default Home
