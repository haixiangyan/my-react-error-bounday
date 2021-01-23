import React from 'react';
import {FallbackProps} from './lib/ErrorBoundary';

/**
 * 出错后现时的组件
 * @param error
 * @param resetErrorBoundary
 * @constructor
 */
export const ErrorFallback = ({error}: FallbackProps) => {
  return (
    <div role="alert">
      <p>出错啦</p>
      <pre>{error.message}</pre>
      <button>Try again</button>
    </div>
  )
}

/**
 * 出错后的回调
 * @param error
 */
export const onError = (error: Error) => {
  // 日志上報
  console.log(error);
}

/**
 * 尝试恢复错误的方法
 */
export const onReset = () => {
  console.log('尝试恢复错误');
}
