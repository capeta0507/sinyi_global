// import React from 'react'
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Hello Next.js Preject</h1>
    <p>David@TPE 2020/01/04</p>
    <p>Next.js Dynamic Routing with query string</p>
    <Link href={`/sellquery?rent=7500&agent=johnny`}>
      <a target='_top'>A方案租金</a>
    </Link>
<<<<<<< HEAD
		<Link href={`/sellquery?rent=8000&agent=david`}>
      <a>B方案租金</a>
=======
    <Link href={`/sellquery?rent=8000&agent=david`}>
      <a target='_top'>B方案租金</a>
>>>>>>> 34cc5a6b19315e1d5889199877eb83d3d2e72111
    </Link>
    <p>建議採用 hook useRouter 方法</p>
  </div>
)
export default Index
