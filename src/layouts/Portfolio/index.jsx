import Thumb from '../../components/Thumb'

import { useContext } from 'react'
import { ListingsContext } from '../../API/Listings'
import Loader from '../../components/Loader'

function Portfolio() {
  const { listingData: listings, isDataLoading: loader } =
    useContext(ListingsContext)

  const listItems = []
  if (listings.length >= 1) {
    listings.forEach((listing) =>
      listItems.push(
        <li key={listing.id}>
          <Thumb cover={listing.cover} title={listing.title} id={listing.id} />
        </li>
      )
    )
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <main>
          <ul className="portfolio">{listItems}</ul>
        </main>
      )}
    </>
  )
}

export default Portfolio
