import {FaPaintBrush as icon } from 'react-icons/fa'


export default {
    name: 'creative',
    type: 'document',
    title: 'Creative',
    icon,
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.error('You have to fill out the name.').required(),
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        validation: Rule => Rule.error('You have to fill out the role.').required(),
      },
      {
        name: 'pronouns',
        type: 'string',
        title: 'Pronouns',
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Photo',
      },
      {
        name: 'bio',
        type: 'blockContent',
        title: 'Biography'
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
        title: 'name',
        subtitle: 'role',
        media: 'image',
      },
    },
 
  }