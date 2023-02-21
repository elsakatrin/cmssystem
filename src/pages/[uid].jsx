import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices/index'
 //This is a dynamic page
 //gets static props and paths
 //It fetches the data or renders the page that the user is trying to access through URL
 //So instead of hardcoding every page you have the dynamic uid (unique identifier) page that fetch the data  
const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}
 
export default Page
 
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  //Here we get a query helper that says getbyUID for type page, that's the unique identifier from pages. Pages is a repeatable type and that's why we need a UID
  const page = await client.getByUID('page', params.uid)
  return {
    props: {
      page
    }
  }
}
 
export async function getStaticPaths() {
  const client = createClient()
  //Here's a query helper that gets all document by type, we want to create all the possible paths of this page
  const pages = await client.getAllByType('page')
  return {
    //Here we map through all of our pages, and for each page we're passing the link resolver that tells how each page/document needs to be translated into a url
    paths: pages.map(page => prismicH.asLink(page, linkResolver)),
    fallback: false
  }
}