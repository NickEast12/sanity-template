import S from '@sanity/desk-tool/structure-builder'

import {GrGallery as Icon} from 'react-icons/gr'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  Icon
}

const Post = S.listItem()
.title('Posts')
.icon(Icon)
.child(
    S.list()
        .documentTypeListItem('gallery').title('Gallery'),
  )

export default Post
