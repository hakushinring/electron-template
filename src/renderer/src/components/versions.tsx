import { useState } from 'react'

function Versions(): React.JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div className="text-center">
      <ul className="versions bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm text-xs text-gray-500 flex flex-wrap gap-x-4 justify-center">
        <li className="electron-version">Electron v{versions.electron}</li>
        <li className="chrome-version">Chromium v{versions.chrome}</li>
        <li className="node-version">Node v{versions.node}</li>
      </ul>
    </div>
  )
}

export default Versions
