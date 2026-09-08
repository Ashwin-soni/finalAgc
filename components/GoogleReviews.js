'use client'

import GoogleReviewsWidget from 'google-reviews-widget'
import React from 'react'

const GoogleReviews = () => {
  return (
    <div className="mx-auto max-w-container px-4 py-8 lg:px-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Google Reviews✨
        </h2>
      </div>
      <GoogleReviewsWidget instanceId="0KKnid3GWC5BeNQpeMAA" />
    </div>
  )
}

export default GoogleReviews
