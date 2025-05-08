import useSWR from 'swr'

interface SystemTimeResult {
  time: string | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
  isValidating: boolean;
  mutate: () => Promise<string | undefined>;
}

/**
 * 自定义钩子，使用SWR循环请求系统时间
 * @param interval - 刷新间隔（毫秒）
 * @returns 包含系统时间和状态的对象
 */
export function useSystemTime(interval = 1000): SystemTimeResult {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    'system-time',
    async () => {
      const time = await window.api.getSystemTime()
      return time
    },
    {
      refreshInterval: interval, // 定期刷新
      revalidateOnFocus: true,   // 窗口聚焦时重新验证
      dedupingInterval: 1000     // 防抖间隔
    }
  )

  return {
    time: data,
    isLoading,
    isError: !!error,
    error,
    isValidating,
    mutate // 手动触发重新请求的方法
  }
}
