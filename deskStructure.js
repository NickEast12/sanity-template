import S from "@sanity/desk-tool/structure-builder";
import { MdMenu } from "react-icons/md";
import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go";

import post from './src/structure/post'
import castCreative from './src/structure/cast-creative'


const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    //Post items
    "post",
    "author",
    "category",
    // Cast + creative 
    "cast",
    "creative"
  ].includes(listItem.getId());

export default () => 
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("siteSettings")
        .title("Site Settings")
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views([S.view.form()])
        ),
        post,
        castCreative,
      // S.documentListItem()
      //   .title("Frontpage")
      //   .schemaType("page")
      //   .icon(GoHome)
      //   .child(
      //     S.document()
      //       .schemaType("page")
      //       .documentId("frontpage")
      //       .views([S.view.form(), PreviewIFrame()])
      //   ),
      // blog,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])

    
