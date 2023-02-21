import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
 
 
const Page = ({ page, navigation, settings }) => {
    console.log(page)
    //To render different slices in every page, this slice zone component that takes in two props: Slices (array of slices) that are on our page and it takes in the component folder that's mapping through different slice types 
    //It matches with the slice with the component responsible to render it 
  return <SliceZone slices={page.data.slices} components={components} />
}
 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  //We're fetching the page from prismic client and get single query means that the homepage was made a single type in my costume type in prismic  
  const page = await client.getSingle('homepage')
  return {
    props: {
      page
    }
  }
}