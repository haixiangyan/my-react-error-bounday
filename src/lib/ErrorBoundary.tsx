import * as React from 'react';

export interface FallbackProps {
  error: Error;
}

interface Props {
  FallbackComponent?: React.ComponentType<FallbackProps>;
  onError?: (error: Error, info: string) => void;
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

  render() {
    const {FallbackComponent} = this.props;
    const {error} = this.state;

    if (error !== null) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} />
      }
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
