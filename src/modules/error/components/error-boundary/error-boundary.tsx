import React, { ReactElement, useCallback, useMemo } from 'react'
import ErrorBoundaryLib from 'react-native-error-boundary'

import { Crash } from '../../screens'
import { logger } from '@/shared/utils/logger'

type Props = {
  children: ReactElement
  catchErrors: 'always' | 'dev' | 'prod' | 'never'
}

export const ErrorBoundary: React.FC<Props> = function ({ children, catchErrors }) {
  const isEnabled = useMemo(() => {
    return (
      catchErrors === 'always' ||
      (catchErrors === 'dev' && __DEV__) ||
      (catchErrors === 'prod' && !__DEV__)
    )
  }, [catchErrors])

  const errorHandler = useCallback((error: Error, stackTrace: string) => {
    // send error to service log
    logger.log(error)
    logger.log(stackTrace)
  }, [])

  return isEnabled ? (
    <ErrorBoundaryLib onError={errorHandler} FallbackComponent={Crash}>
      {children}
    </ErrorBoundaryLib>
  ) : (
    children
  )
}
