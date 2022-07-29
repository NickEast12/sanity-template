import {GrGallery as Icon} from 'react-icons/gr'
export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    icon: Icon,
    fields: [
        {
            name: 'imageId',
            title: "Image Id",
            type: 'string'
        },
      {
        name: 'image',
        title: 'Image',
        type: 'mainImage',
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
    preview: {
      select: {
        title: 'imageId',
        media: 'image',
      },
    },
  }
