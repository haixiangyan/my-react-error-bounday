import * as React from 'react';

// 出错后显示的元素类型
type FallbackElement = React.ReactElement<unknown, string | React.FC | typeof React.Component> | null;

// 出错显示组件的 props
export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

// 出错显示组件的 renderer
export declare function FallbackRender (props: FallbackProps): FallbackElement;

// 本组件 ErrorBoundary 的 props
interface ErrorBoundaryProps {
  fallback?: FallbackElement;
  FallbackComponent?: React.ComponentType<FallbackProps>;
  fallbackRender?: typeof FallbackRender;
  onError?: (error: Error, info: string) => void;
  onReset?: () => void;
}

// 本组件 ErrorBoundary 的 props
interface ErrorBoundaryState {
  error: Error | null;
}

// 初始状态
const initialState: ErrorBoundaryState = {
  error: null,
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state = initialState;

  static getDerivedStateFromError(error: Error) {
    return {error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack);
    }
  }

  resetErrorBoundary = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.setState(initialState);
  }

  render() {
    const {fallback, FallbackComponent, fallbackRender} = this.props;
    const {error} = this.state;

    if (error !== null) {
      const fallbackProps: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      }

      if (React.isValidElement(fallback)) {
        return fallback;
      }
      if (typeof fallbackRender === 'function') {
        return (fallbackRender as typeof FallbackRender)(fallbackProps);
      }
      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />
      }

      throw new Error('ErrorBoundary 组件需要传入 fallback, fallbackRender, FallbackComponent 其中一个');
    }

    return this.props.children;
  }
}

/**
 * with 写法
 * @param Component 业务组件
 * @param errorBoundaryProps error boundary 的 props
 */
function withErrorBoundary<P> (
  Component: React.ComponentType<P>,
  errorBoundaryProps: ErrorBoundaryProps
): React.ComponentType<P> {
  const Wrapped: React.ComponentType<P> = props => {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props}/>
      </ErrorBoundary>
    )
  }

  // DevTools 显示的组件名
  const name = Component.displayName ||Component.name || 'Unknown';
  Wrapped.displayName = `withErrorBoundary(${name})`;

  return Wrapped;
}

export {
  withErrorBoundary,
  ErrorBoundary,
}
