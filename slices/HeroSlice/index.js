import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import style from './style.module.css'
import { PrismicLink } from '@prismicio/react'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.TextblockSlice} TextblockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextblockSlice>} TextblockProps
 * @param { TextblockProps }
 */
const Textblock = ({ slice }) => (
  //When making slices in slicemacine and prismic the code updates itself automatically in here. 
  //It doesn't look like you would normally want so I went into slicemachine and copied the code snippets from there to access the data and then they all appeared like you'd want
  <section className={style.section}>
    <div className='container'>
      {/* If I wanted to see what's in this slice, you could use this code below that's commented out (and don't have any other code active in the section). The loalhost should then show what you need.*/}
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      
      <div className={style.title}>
        <PrismicRichText field={slice.primary.title} />
      </div>

      <div className={style.aboutlink}>
            {console.log(slice.items[0])}
          {slice.items.map((item, i) => (
          <Link href={item.cta_link.uid}>About me</Link>        
          ))}
          </div>

      <div className={style.description}>
        <PrismicRichText field={slice.primary.description} />
      </div>

      <div className={style.image}>
        <PrismicNextImage field={slice.primary.image} />
      </div>

      <div className={style.gitlink}>
      <PrismicLink  field={slice.primary.gitlink}>Here's a link to my GitHub</PrismicLink>
      </div>
      
    </div>
  </section>
)

export default Textblock
