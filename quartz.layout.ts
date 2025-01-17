import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode, Options } from "./quartz/components/ExplorerNode"
import { QuartzPluginData } from "./quartz/plugins/vfile"

const filter: Options['filterFn'] = (node) => {
  // exclude files with the tag "explorerexclude"
  // return node.file != undefined
  return true
}

const sort: Options['sortFn'] = (a, b) => {
  const b1 = a.file?.frontmatter?.boost as number
  const b2 = b.file?.frontmatter?.boost as number
  // exclude files with the tag "explorerexclude"
  return b1  - b2
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Tree Search Repo": "https://github.com/catacgc/obsidian-tree-search",
      "Tree Search Docs": "https://github.com/catacgc/tree-search-docs",
      "Quartz Docs": "https://github.com/jackyzha0/quartz"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}