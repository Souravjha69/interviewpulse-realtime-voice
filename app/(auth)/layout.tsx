import {ReactNode} from 'react'

const Aulayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="auth-layout">{children}</div>
  )
}

export default Aulayout