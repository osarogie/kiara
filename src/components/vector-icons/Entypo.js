/**
 * Entypo icon set component.
 * Usage: <Entypo name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'components/vector-icons/lib/create-icon-set'
import glyphMap from './glyphmaps/Entypo.json'

const iconSet = createIconSet(glyphMap, 'Entypo', 'Entypo.ttf')

export default iconSet

export const Button = iconSet.Button
export const getImageSource = iconSet.getImageSource
