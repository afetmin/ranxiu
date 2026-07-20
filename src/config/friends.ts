// friends
export const friendsHeadLine = 'Friends'
export const friendsIntro = 'A few interesting people.'


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = []
