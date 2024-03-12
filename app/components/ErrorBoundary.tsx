import { isRouteErrorResponse, useRouteError } from '@remix-run/react'
import { Document } from '~/components/Document'

export const ErrorBoundary = () => {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  
  return (
    <Document>
      <p>{status === 404 ? 'Not Found' : 'Internal'}</p>
    </Document>
  )
}