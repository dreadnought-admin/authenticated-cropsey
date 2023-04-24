import ReleaseCard from './ReleaseCard'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const ReleaseList = ({ releases }) => {
  const releaseList = releases?.map((release) => {
    return <ReleaseCard
    key={release.id}
    release={release}
    />
  })

if (!releases) return <Loading />

  return (
    <div>
      <ul className="cards">
        {releaseList}
      </ul>
    </div>
  )
}

export default ReleaseList