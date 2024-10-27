import React from 'react'
import Card from './Card'

const Testimonial = (props) => {
    let review =props.reviews;
  return (
    <div>
        <Card review={review[4]}>

        </Card>
    </div>
  )
}

export default Testimonial