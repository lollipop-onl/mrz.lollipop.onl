import { Outlet } from '@remix-run/react'
import {Document} from '~/components/Document'
import { Layout} from '~/components/Layout'

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}