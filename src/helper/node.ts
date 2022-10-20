/**
 * Created by leon<silenceace@gmail.com> on 22/3/20.
 */
import { store } from '@src/store'
import { APPDataObject } from '@src/types'

/**
 * home tab nodes
 */
export interface TabNodeProps {
  title: string
  parentNodeNames: any[]
  children?: APPDataObject.Node[]
}

export let TabNodes: TabNodeProps[] = [
  { title: 'Life', parentNodeNames: ['life'] },
  { title: 'Geek', parentNodeNames: ['geek'] },
  { title: 'V2EX', parentNodeNames: ['v2ex'] },
  { title: 'Internet', parentNodeNames: ['internet'] },
  { title: 'Programming', parentNodeNames: ['programming'] },
  { title: 'Apple', parentNodeNames: ['apple'] },
  { title: 'Games', parentNodeNames: ['games'] },
  { title: 'Cloud', parentNodeNames: ['cloud'] },
  { title: 'Hardware', parentNodeNames: ['hardware'] },
  { title: 'Earth', parentNodeNames: ['cn', 'us'] }
]

export const nodeChildren = (rootNode: TabNodeProps, nodeData?: APPDataObject.Node[]): APPDataObject.Node[] => {
  const { title, parentNodeNames: parentNodes } = rootNode

  let nodes: APPDataObject.Node[] = []

  const all_node = nodeData ?? store.getState().app.allNode
  if (!all_node) return nodes

  return all_node.filter((v) => parentNodes.includes(v.parent_node_name))
}
