import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import style from './aboutstyle.module.css'
import { PrismicLink } from '@prismicio/react'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.AboutSliceSlice} AboutSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSliceSlice>} AboutSliceProps
 * @param { AboutSliceProps }
 */
const AboutSlice = ({ slice }) => (
  <section>
   <div>

    <div className={style.title}>
     <PrismicRichText field={slice.primary.title} />
    </div>

    <div className={style.description}>
      <PrismicRichText field={slice.primary.description} />
    </div>

    <div className={style.aboutimage}>
    <PrismicNextImage field={slice.primary.aboutimage} />
    </div>

    <div className={style.abouttext}>
     <PrismicRichText field={slice.primary.abouttext} />
    </div>

   </div>
  </section>
)

export default AboutSlice