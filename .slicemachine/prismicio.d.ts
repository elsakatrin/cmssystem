// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = TextblockSlice | ImageGridSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = AboutSliceSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HomepageDocument | PageDocument;
/**
 * Primary content in AboutSlice → Primary
 *
 */
interface AboutSliceSliceDefaultPrimary {
    /**
     * Title field in *AboutSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: about_slice.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *AboutSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: about_slice.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * AboutText field in *AboutSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about_slice.primary.abouttext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    abouttext: prismicT.RichTextField;
    /**
     * AboutImage field in *AboutSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about_slice.primary.aboutimage
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    aboutimage: prismicT.ImageField<never>;
}
/**
 * Item in AboutSlice → Items
 *
 */
export interface AboutSliceSliceDefaultItem {
    /**
     * link field in *AboutSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: about_slice.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for AboutSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `AboutSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AboutSliceSliceDefaultPrimary>, Simplify<AboutSliceSliceDefaultItem>>;
/**
 * Slice variation for *AboutSlice*
 *
 */
type AboutSliceSliceVariation = AboutSliceSliceDefault;
/**
 * AboutSlice Shared Slice
 *
 * - **API ID**: `about_slice`
 * - **Description**: `AboutSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutSliceSlice = prismicT.SharedSlice<"about_slice", AboutSliceSliceVariation>;
/**
 * Primary content in HeroSlice → Primary
 *
 */
interface TextblockSliceDefaultPrimary {
    /**
     * Title field in *HeroSlice → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: textblock.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *HeroSlice → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: textblock.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *HeroSlice → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: textblock.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * GitLink field in *HeroSlice → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: textblock.primary.gitlink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    gitlink: prismicT.LinkField;
}
/**
 * Item in HeroSlice → Items
 *
 */
export interface TextblockSliceDefaultItem {
    /**
     * CTA Link field in *HeroSlice → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: textblock.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * CTA Text field in *HeroSlice → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: textblock.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
}
/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Textblock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextblockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextblockSliceDefaultPrimary>, Simplify<TextblockSliceDefaultItem>>;
/**
 * Slice variation for *HeroSlice*
 *
 */
type TextblockSliceVariation = TextblockSliceDefault;
/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `textblock`
 * - **Description**: `Textblock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextblockSlice = prismicT.SharedSlice<"textblock", TextblockSliceVariation>;
/**
 * Primary content in ImageGrid → Primary
 *
 */
interface ImageGridSliceDefaultPrimary {
    /**
     * Title field in *ImageGrid → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: image_grid.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *ImageGrid → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: image_grid.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in ImageGrid → Items
 *
 */
export interface ImageGridSliceDefaultItem {
    /**
     * Image field in *ImageGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_grid.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for ImageGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageGridSliceDefaultPrimary>, Simplify<ImageGridSliceDefaultItem>>;
/**
 * Slice variation for *ImageGrid*
 *
 */
type ImageGridSliceVariation = ImageGridSliceDefault;
/**
 * ImageGrid Shared Slice
 *
 * - **API ID**: `image_grid`
 * - **Description**: `ImageGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageGridSlice = prismicT.SharedSlice<"image_grid", ImageGridSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, AboutSliceSliceDefaultPrimary, AboutSliceSliceDefaultItem, AboutSliceSliceDefault, AboutSliceSliceVariation, AboutSliceSlice, TextblockSliceDefaultPrimary, TextblockSliceDefaultItem, TextblockSliceDefault, TextblockSliceVariation, TextblockSlice, ImageGridSliceDefaultPrimary, ImageGridSliceDefaultItem, ImageGridSliceDefault, ImageGridSliceVariation, ImageGridSlice };
    }
}