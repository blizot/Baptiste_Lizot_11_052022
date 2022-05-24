function ListingTitle(props) {
  const {title, location} = props

  return (
    <div className="listing-details__text">
      <h1 className="listing-details__title">{title}</h1>
      <p className="listing-details__location">{location}</p>
    </div>
  )
}

export default ListingTitle