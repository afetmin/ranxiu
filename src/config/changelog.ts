// changelog
export const changelogHeadLine = 'Site Updates'
export const changelogIntro = 'A running log of changes to this portfolio.'


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = []
