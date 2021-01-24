import * as React from 'react';

type FallbackElement = React.ReactElement<unknown, string | React.FC | typeof React.Component> | null;

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export declare function FallbackRender (props: FallbackProps): FallbackElement;

interface Props {
  fallback?: FallbackElement;
  FallbackComponent?: React.ComponentType<FallbackProps>;
  fallbackRender?: typeof FallbackRender;
  onError?: (error: Error, info: string) => void;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

// 初始状态
const initialState: State = {
  error: null,
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<Props>, State> {
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
      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />
      }
      if (typeof fallbackRender === 'function') {
        return (fallbackRender as typeof FallbackRender)(fallbackProps);
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
