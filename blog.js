export default {
  props: {
    pageProps: {
      group: {
        __fragments: { Group: {}, Group_discussionList: {} },
        __id: 'R3JvdXAtMjQ='
      },
      variables: { id: 'the-candy-baron-scribbles', count: 5 },
      queryRecords: {
        'client:root': {
          __id: 'client:root',
          __typename: '__Root',
          'group(id:"the-candy-baron-scribbles")': { __ref: 'R3JvdXAtMjQ=' }
        },
        'R3JvdXAtMjQ=': {
          __id: 'R3JvdXAtMjQ=',
          __typename: 'Group',
          id: 'R3JvdXAtMjQ=',
          _id: '24',
          name: 'The Candy Baron Scribbles',
          permalink: 'the-candy-baron-scribbles',
          body: 'Poetry, random write-ups, maybe an occasional excerpt or two.',
          viewer_is_a_member: false,
          is_private: false,
          header_image: { __ref: 'UGhvdG8tMjU5' },
          user: { __ref: 'VXNlci0xMg==' },
          'discussions(first:5)': {
            __ref: 'client:R3JvdXAtMjQ=:discussions(first:5)'
          },
          __Group_discussions_connection: {
            __ref: 'client:R3JvdXAtMjQ=:__Group_discussions_connection'
          }
        },
        UGhvdG8tMjU5: {
          __id: 'UGhvdG8tMjU5',
          __typename: 'Photo',
          name: '99b761d0-e906-40a7-9c47-4922bc2c90fb',
          height: 870,
          width: 1550,
          id: 'UGhvdG8tMjU5'
        },
        'VXNlci0xMg==': {
          __id: 'VXNlci0xMg==',
          __typename: 'User',
          id: 'VXNlci0xMg==',
          _id: '12',
          name: 'Candy Baron',
          username: 'mockingjay17',
          profile_picture_name: 'bce71fdd-03a9-418a-ae02-1de1e804894e'
        },
        'client:R3JvdXAtMjQ=:discussions(first:5)': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5)',
          __typename: 'DiscussionConnection',
          pageInfo: {
            __ref: 'client:R3JvdXAtMjQ=:discussions(first:5):pageInfo'
          },
          edges: {
            __refs: [
              'client:R3JvdXAtMjQ=:discussions(first:5):edges:0',
              'client:R3JvdXAtMjQ=:discussions(first:5):edges:1',
              'client:R3JvdXAtMjQ=:discussions(first:5):edges:2',
              'client:R3JvdXAtMjQ=:discussions(first:5):edges:3',
              'client:R3JvdXAtMjQ=:discussions(first:5):edges:4'
            ]
          }
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):pageInfo': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: true,
          endCursor: 'NQ=='
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):edges:0': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):edges:0',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yMDE=' },
          cursor: 'MQ=='
        },
        'RGlzY3Vzc2lvbi0yMDE=': {
          __id: 'RGlzY3Vzc2lvbi0yMDE=',
          __typename: 'Discussion',
          'comments(last:3)': {
            __ref: 'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3)'
          },
          id: 'RGlzY3Vzc2lvbi0yMDE=',
          name: 'Wendigo',
          public_url: 'https://thecommunity.ng/d/201',
          'parsed_excerpt(size:30)':
            '\u003cp\u003eJune 7th, 1727 \u0026quot;The baby is coming!\u0026quot; Claire shouted. \u0026quot;Breathe, Anna, breathe.\u0026quot; \u0026quot;Where\u0026#39;s Marcus?!\u0026quot; Annabelle yelled back. \u0026quot;He said he\u0026#39;d be here. He promised!!\u0026quot; She just couldn\u0026#39;t understand what could\u003c/p\u003e\n',
          word_count: 2598,
          comment_count: 0,
          permalink: 'wendigo',
          _id: '201',
          created_at: 1492442562,
          user: { __ref: 'VXNlci0xMg==' },
          group: { __ref: 'R3JvdXAtMjQ=' },
          feature_photo: null,
          viewer_does_like: false,
          like_count: 10,
          __PostListItem_comments_connection: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection'
          }
        },
        'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3)': {
          __id: 'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3)',
          __typename: 'CommentConnection',
          pageInfo: {
            __ref: 'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3):pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3):pageInfo': {
          __id: 'client:RGlzY3Vzc2lvbi0yMDE=:comments(last:3):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: null,
          hasPreviousPage: false,
          startCursor: null
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):edges:1': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):edges:1',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yNDY=' },
          cursor: 'Mg=='
        },
        'RGlzY3Vzc2lvbi0yNDY=': {
          __id: 'RGlzY3Vzc2lvbi0yNDY=',
          __typename: 'Discussion',
          'comments(last:3)': {
            __ref: 'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3)'
          },
          id: 'RGlzY3Vzc2lvbi0yNDY=',
          _id: '246',
          name: "The Hangman's Rhetoric ",
          public_url: 'https://thecommunity.ng/d/246',
          'parsed_excerpt(size:30)':
            '\u003cp\u003ePour me a drink and I\u0026#39;ll tell you a lie. Now then, what would you like to hear? I could tell you there\u0026#39;s purpose and good in the world, But\u003c/p\u003e\n',
          word_count: 119,
          comment_count: 1,
          permalink: 'the-hangmans-rhetoric',
          created_at: 1516073353,
          user: { __ref: 'VXNlci0xMg==' },
          group: { __ref: 'R3JvdXAtMjQ=' },
          feature_photo: null,
          viewer_does_like: false,
          like_count: 1,
          __PostListItem_comments_connection: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection'
          }
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3)': {
          __id: 'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3)',
          __typename: 'CommentConnection',
          pageInfo: {
            __ref: 'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):pageInfo'
          },
          edges: {
            __refs: ['client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):edges:0']
          }
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):pageInfo': {
          __id: 'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: 'MQ==',
          hasPreviousPage: false,
          startCursor: 'MQ=='
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):edges:0': {
          __id: 'client:RGlzY3Vzc2lvbi0yNDY=:comments(last:3):edges:0',
          __typename: 'CommentEdge',
          node: { __ref: 'Q29tbWVudC0zNjY=' },
          cursor: 'MQ=='
        },
        'Q29tbWVudC0zNjY=': {
          __id: 'Q29tbWVudC0zNjY=',
          __typename: 'Comment',
          id: 'Q29tbWVudC0zNjY=',
          excerpt: 'Deep truth',
          _id: '366',
          body: 'Deep truth',
          created_at: 1545871605,
          discussion_id: '246',
          discussion: { __ref: 'RGlzY3Vzc2lvbi0yNDY=' },
          user: { __ref: 'VXNlci0x' }
        },
        VXNlci0x: {
          __id: 'VXNlci0x',
          __typename: 'User',
          id: 'VXNlci0x',
          _id: '1',
          name: 'Nosakhare Emmanuel',
          username: 'nosa',
          profile_picture_name: '964101e9-6d28-45a3-9e15-f5825a91c98a'
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):edges:2': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):edges:2',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yOTE=' },
          cursor: 'Mw=='
        },
        'RGlzY3Vzc2lvbi0yOTE=': {
          __id: 'RGlzY3Vzc2lvbi0yOTE=',
          __typename: 'Discussion',
          'comments(last:3)': {
            __ref: 'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3)'
          },
          id: 'RGlzY3Vzc2lvbi0yOTE=',
          name: 'Green',
          public_url: 'https://thecommunity.ng/d/291',
          'parsed_excerpt(size:30)':
            '\u003cp\u003eI thought I saw you in a window. You were at your favourite café, drinking coffee with your hair in a bun. You had on your favourite sweater, and that\u003c/p\u003e\n',
          word_count: 417,
          comment_count: 0,
          permalink: 'green',
          _id: '291',
          created_at: 1539306977,
          user: { __ref: 'VXNlci0xMg==' },
          group: { __ref: 'R3JvdXAtMjQ=' },
          feature_photo: null,
          viewer_does_like: false,
          like_count: 3,
          __PostListItem_comments_connection: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection'
          }
        },
        'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3)': {
          __id: 'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3)',
          __typename: 'CommentConnection',
          pageInfo: {
            __ref: 'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3):pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3):pageInfo': {
          __id: 'client:RGlzY3Vzc2lvbi0yOTE=:comments(last:3):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: null,
          hasPreviousPage: false,
          startCursor: null
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):edges:3': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):edges:3',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yMzI=' },
          cursor: 'NA=='
        },
        'RGlzY3Vzc2lvbi0yMzI=': {
          __id: 'RGlzY3Vzc2lvbi0yMzI=',
          __typename: 'Discussion',
          'comments(last:3)': {
            __ref: 'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3)'
          },
          id: 'RGlzY3Vzc2lvbi0yMzI=',
          name: 'Quitter',
          public_url: 'https://thecommunity.ng/d/232',
          'parsed_excerpt(size:30)':
            '\u003cp\u003e\u0026quot;Suicide is for quitters.\u0026quot; I\u0026#39;ve heard that somewhere before, but I don\u0026#39;t remember who it was. I never got the appeal suffering through life all the way to the end.\u003c/p\u003e\n',
          word_count: 74,
          comment_count: 0,
          permalink: 'quitter',
          _id: '232',
          created_at: 1505644306,
          user: { __ref: 'VXNlci0xMg==' },
          group: { __ref: 'R3JvdXAtMjQ=' },
          feature_photo: null,
          viewer_does_like: false,
          like_count: 7,
          __PostListItem_comments_connection: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection'
          }
        },
        'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3)': {
          __id: 'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3)',
          __typename: 'CommentConnection',
          pageInfo: {
            __ref: 'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3):pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3):pageInfo': {
          __id: 'client:RGlzY3Vzc2lvbi0yMzI=:comments(last:3):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: null,
          hasPreviousPage: false,
          startCursor: null
        },
        'client:R3JvdXAtMjQ=:discussions(first:5):edges:4': {
          __id: 'client:R3JvdXAtMjQ=:discussions(first:5):edges:4',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0xNzk=' },
          cursor: 'NQ=='
        },
        'RGlzY3Vzc2lvbi0xNzk=': {
          __id: 'RGlzY3Vzc2lvbi0xNzk=',
          __typename: 'Discussion',
          'comments(last:3)': {
            __ref: 'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3)'
          },
          id: 'RGlzY3Vzc2lvbi0xNzk=',
          _id: '179',
          name: 'Seventeen',
          public_url: 'https://thecommunity.ng/d/179',
          'parsed_excerpt(size:30)':
            '\u003cp\u003eWhat to say about this one…I was in love at seventeen. No, really. I was. It was such a long time ago I’m not sure how it even happened. One\u003c/p\u003e\n',
          word_count: 141,
          comment_count: 1,
          permalink: 'seventeen',
          created_at: 1489210688,
          user: { __ref: 'VXNlci0xMg==' },
          group: { __ref: 'R3JvdXAtMjQ=' },
          feature_photo: null,
          viewer_does_like: false,
          like_count: 7,
          __PostListItem_comments_connection: {
            __ref:
              'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection'
          }
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3)': {
          __id: 'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3)',
          __typename: 'CommentConnection',
          pageInfo: {
            __ref: 'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):pageInfo'
          },
          edges: {
            __refs: ['client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):edges:0']
          }
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):pageInfo': {
          __id: 'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          endCursor: 'MQ==',
          hasPreviousPage: false,
          startCursor: 'MQ=='
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):edges:0': {
          __id: 'client:RGlzY3Vzc2lvbi0xNzk=:comments(last:3):edges:0',
          __typename: 'CommentEdge',
          node: { __ref: 'Q29tbWVudC0zMzQ=' },
          cursor: 'MQ=='
        },
        'Q29tbWVudC0zMzQ=': {
          __id: 'Q29tbWVudC0zMzQ=',
          __typename: 'Comment',
          id: 'Q29tbWVudC0zMzQ=',
          excerpt: 'Nice',
          _id: '334',
          body: 'Nice',
          created_at: 1513294307,
          discussion_id: '179',
          discussion: { __ref: 'RGlzY3Vzc2lvbi0xNzk=' },
          user: { __ref: 'VXNlci00NzAz' }
        },
        VXNlci00NzAz: {
          __id: 'VXNlci00NzAz',
          __typename: 'User',
          id: 'VXNlci00NzAz',
          _id: '4703',
          name: 'Bob-Manuel "Godking" Faithful',
          username: 'bobfaythful',
          profile_picture_name: '753632fd-f050-4dff-a22d-713a5f0ccacb'
        },
        'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection': {
          __id:
            'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection',
          __typename: 'CommentConnection',
          __connection_next_edge_index: 0,
          pageInfo: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection:pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection:pageInfo': {
          __id:
            'client:RGlzY3Vzc2lvbi0yMDE=:__PostListItem_comments_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: null,
          startCursor: null
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection': {
          __id:
            'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection',
          __typename: 'CommentConnection',
          __connection_next_edge_index: 1,
          pageInfo: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:pageInfo'
          },
          edges: {
            __refs: [
              'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:edges:0'
            ]
          }
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:edges:0': {
          __id:
            'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:edges:0',
          __typename: 'CommentEdge',
          node: { __ref: 'Q29tbWVudC0zNjY=' },
          cursor: 'MQ=='
        },
        'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:pageInfo': {
          __id:
            'client:RGlzY3Vzc2lvbi0yNDY=:__PostListItem_comments_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: 'MQ==',
          startCursor: 'MQ=='
        },
        'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection': {
          __id:
            'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection',
          __typename: 'CommentConnection',
          __connection_next_edge_index: 0,
          pageInfo: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection:pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection:pageInfo': {
          __id:
            'client:RGlzY3Vzc2lvbi0yOTE=:__PostListItem_comments_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: null,
          startCursor: null
        },
        'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection': {
          __id:
            'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection',
          __typename: 'CommentConnection',
          __connection_next_edge_index: 0,
          pageInfo: {
            __ref:
              'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection:pageInfo'
          },
          edges: { __refs: [] }
        },
        'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection:pageInfo': {
          __id:
            'client:RGlzY3Vzc2lvbi0yMzI=:__PostListItem_comments_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: null,
          startCursor: null
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection': {
          __id:
            'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection',
          __typename: 'CommentConnection',
          __connection_next_edge_index: 1,
          pageInfo: {
            __ref:
              'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:pageInfo'
          },
          edges: {
            __refs: [
              'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:edges:0'
            ]
          }
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:edges:0': {
          __id:
            'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:edges:0',
          __typename: 'CommentEdge',
          node: { __ref: 'Q29tbWVudC0zMzQ=' },
          cursor: 'MQ=='
        },
        'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:pageInfo': {
          __id:
            'client:RGlzY3Vzc2lvbi0xNzk=:__PostListItem_comments_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: 'MQ==',
          startCursor: 'MQ=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection',
          __typename: 'DiscussionConnection',
          __connection_next_edge_index: 5,
          pageInfo: {
            __ref: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:pageInfo'
          },
          edges: {
            __refs: [
              'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:0',
              'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:1',
              'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:2',
              'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:3',
              'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:4'
            ]
          }
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:0': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:0',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yMDE=' },
          cursor: 'MQ=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:1': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:1',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yNDY=' },
          cursor: 'Mg=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:2': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:2',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yOTE=' },
          cursor: 'Mw=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:3': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:3',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0yMzI=' },
          cursor: 'NA=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:4': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:edges:4',
          __typename: 'DiscussionEdge',
          node: { __ref: 'RGlzY3Vzc2lvbi0xNzk=' },
          cursor: 'NQ=='
        },
        'client:R3JvdXAtMjQ=:__Group_discussions_connection:pageInfo': {
          __id: 'client:R3JvdXAtMjQ=:__Group_discussions_connection:pageInfo',
          __typename: 'PageInfo',
          hasNextPage: true,
          hasPreviousPage: false,
          endCursor: 'NQ==',
          startCursor: null
        }
      }
    }
  }
}
