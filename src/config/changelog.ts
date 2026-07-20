// changelog
export const changelogHeadLine = '网站更新'
export const changelogIntro = '这个个人主页的更新记录。'


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = []
