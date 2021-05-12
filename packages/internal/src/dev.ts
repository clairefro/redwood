import fs from 'fs'
import path from 'path'

import kill from 'kill-port'

import { findCells } from './findFiles'
import { getPaths } from './paths'

export const shutdownPort = (port: number, method: 'tcp' | 'udp' = 'tcp') => {
  return kill(port, method)
}

export const generateDirectoryNamedModuleTypes = () => {}

export const getTypesMirrorDir = () => {
  const p = getPaths().typesMirrorDir
  fs.mkdirSync(p, { recursive: true })
  return p
}

export const generateCellTypes = () => {
  // we will first generate them all
  // but there must be a better way...

  const typesMirrorDir = getTypesMirrorDir()
  const rwjsPaths = getPaths()
  const cellPaths = findCells()

  for (const p of cellPaths) {
    // I think these must be named `index.d.ts`
    const mirrorCellPath = path.join(
      typesMirrorDir,
      p.replace(rwjsPaths.base, '')
    )

    mirrorCellPath //?
  }
}
