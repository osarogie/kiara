import { graph } from './graph'

export const allRestaurants = graph(`{
    allRestaurants {
        edges {
            node {
                name
                slug
                logo
                tags
                publishedAt
            }
        }
    }
}`)
