import { useSystemTime } from '../hooks/use-system-time'
import { useEffect, useState } from 'react'
import { FiClock, FiCalendar, FiRefreshCw } from 'react-icons/fi'
import { TbMoonStars } from 'react-icons/tb'
import { WiDaySunny } from 'react-icons/wi'

const Clock = (): JSX.Element => {
  const { time, isLoading, isError } = useSystemTime(1000)
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [ampm, setAmpm] = useState('')
  const [dateString, setDateString] = useState('')
  const [weekday, setWeekday] = useState('')

  useEffect(() => {
    if (time) {
      const currentDate = new Date(time)

      // 格式化时间
      let hrs = currentDate.getHours()
      const mins = currentDate.getMinutes().toString().padStart(2, '0')
      const secs = currentDate.getSeconds().toString().padStart(2, '0')
      const am_pm = hrs >= 12 ? '下午' : '上午'

      if (hrs > 12) {
        hrs -= 12
      }
      if (hrs === 0) {
        hrs = 12
      }

      setHours(hrs.toString().padStart(2, '0'))
      setMinutes(mins)
      setSeconds(secs)
      setAmpm(am_pm)

      // 格式化日期
      const year = currentDate.getFullYear()
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      const day = currentDate.getDate().toString().padStart(2, '0')
      const weekdayValue = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][currentDate.getDay()]
      setWeekday(weekdayValue)
      setDateString(`${year}年${month}月${day}日`)
    }
  }, [time])

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[300px] text-gray-600">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )

  if (isError) return (
    <div className="flex justify-center items-center min-h-[300px] text-red-500">
      <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded shadow-lg">
        <p className="font-semibold">获取时间失败</p>
        <p className="text-sm">请检查系统设置后重试</p>
      </div>
    </div>
  )

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-2xl p-8 transition-all duration-500 hover:shadow-blue-200">
      <div className="text-center">
        <div className="mb-4 text-blue-500 font-medium text-xl flex items-center justify-center gap-2">
          <FiCalendar className="text-blue-400" />
          {weekday}
        </div>
        <div className="text-4xl md:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 flex items-center justify-center">
          {ampm === '上午' ? (
            <WiDaySunny className="text-yellow-400 mr-2" size={40} />
          ) : (
            <TbMoonStars className="text-blue-400 mr-2" size={32} />
          )}
          <span>{hours}</span>
          <span className="mx-1 animate-pulse">:</span>
          <span>{minutes}</span>
          <span className="mx-1 animate-pulse">:</span>
          <span>{seconds}</span>
          <span className="ml-2 text-lg text-blue-400 font-medium">{ampm}</span>
        </div>
        <div className="text-gray-500 text-lg flex items-center justify-center gap-2">
          <FiClock className="text-gray-400" />
          {dateString}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <TbMoonStars className="text-blue-400" />
          深睡时钟
        </div>
        <div className="bg-blue-500 text-white text-xs rounded-full px-3 py-1 font-medium flex items-center gap-1">
          <FiRefreshCw className="animate-spin duration-[3000ms]" />
          实时同步
        </div>
      </div>
    </div>
  )
}

export default Clock
