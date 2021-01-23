import {FallbackProps} from 'react-error-boundary';
import React from 'react';

/**
 * 出错后现时的组件
 * @param error
 * @param resetErrorBoundary
 * @constructor
 */
export const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <div role="alert">
      <p>出错啦</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

/**
 * 出错后的回调
 * @param error
 * @param info
 */
export const onError = (error: Error, info: {componentStack: string}) => {
  // 日志上報
  console.log(error, info);
}

/**
 * 尝试恢复错误的方法
 */
export const onReset = () => {
  console.log('尝试恢复错误');
}
