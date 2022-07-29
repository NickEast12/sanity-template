import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from "react-icons/go"

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const CastCreative = S.listItem()
.title('Cast + Creatives')
.icon(AuthorIcon)
.child(
    S.list()
      .title('Cast + Creatives')
      .items([
        S.documentTypeListItem('cast').title('Cast').showIcon(),
        S.documentTypeListItem('creative').title('Creatives').showIcon(),
      ])
  )


export default CastCreative
