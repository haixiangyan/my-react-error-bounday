import * as React from 'react';

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export declare function FallbackRender (
  props: FallbackProps,
): React.ReactElement<unknown, string | React.FC | typeof React.Component> | null;

interface Props {
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
    const {FallbackComponent, fallbackRender} = this.props;
    const {error} = this.state;

    if (error !== null) {
      const fallbackProps: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
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
