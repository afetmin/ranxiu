// friends
export const friendsHeadLine = '朋友们'
export const friendsIntro = '一些有趣的人。'


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = []
