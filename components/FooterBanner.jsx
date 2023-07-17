import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>Our Best</h3>
          <h3>Headsets</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>Summer Sale</h3>
          <p>Collection Of Best Aesthetic Headphones</p>
          <Link href="https://ecommece-sanity-stripe.vercel.app/product/headphone">
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src="https://cdn.sanity.io/images/g6qm4n02/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp" className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner
