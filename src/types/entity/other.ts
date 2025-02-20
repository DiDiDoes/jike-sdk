import type { CommonImage } from './common'
import type { Topic } from './topic'
import type {
  Picture,
  ReadTrackInfo,
  Rollouts,
  ScrollingSubtitle,
  UrlsInText,
} from './post'
import type { User } from './user'
import type { LiteralUnion } from '../../utils/typings'

export type PostTypeRaw = 'ORIGINAL_POST' | 'REPOST'
export type TargetType = PostTypeRaw | 'STORY'

export interface PostDetail {
  id: string
  type: PostTypeRaw | 'PERSONAL_UPDATE'
  content: string
  /** 评论并转发到动态时存在。仅评论转发的内容，不包含上层评论 */
  rawContent?: string
  urlsInText: UrlsInText[]
  status: string
  isCommentForbidden: boolean
  likeCount: number
  commentCount: number
  repostCount: number
  shareCount: number
  pictures: Picture[]
  collected: boolean
  collectTime?: string
  user: User
  createdAt: string
  isFeatured: boolean
  enablePictureComments: boolean
  repostable: boolean
  rollouts: Rollouts
  scrollingSubtitles: ScrollingSubtitle[]
  actionTime?: string
  pinned?: {
    personalUpdate: boolean
  }
  target?: Target
  targetType?: string
  rootType?: string
  liked?: boolean
  syncCommentId?: string
  replyToComment?: Comment
}

export interface Target {
  type: string
  id: string
  content: string
  urlsInText: UrlsInText[]
  status: string
  user: User
  commentCount: number
  repostCount: number
  likeCount: number
  shareCount: number
  rootType: string
  pictures: Picture[]
  createdAt: string
  liked: boolean
  collected: boolean
  syncCommentId: string
}

interface ReplyToComment {
  type: string
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: Date
  level: number
  content: string
  likeCount: number
  replyCount: number
  status: string
  user: User
}

interface HotReply {
  type: string
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: Date
  level: number
  content: string
  likeCount: number
  replyCount: number
  status: string
  user: User
  pictures: Picture[]
  replyToComment: ReplyToComment
}

export interface Comment {
  type: 'COMMENT'
  id: string
  targetType: string
  targetId: string
  threadId: string
  createdAt: string
  level: number
  content: string
  urlsInText: UrlsInText[]
  likeCount: number
  replyCount: number
  status: string
  user: User
  pictures: Picture[]
  liked: boolean
  hotReplies: HotReply[]
  enablePictureComments: boolean
  readTrackInfo: ReadTrackInfo
  collapsed: boolean
  collapsible: boolean
  isPinned: boolean
  hideable: boolean
  deletable: boolean
  pinnable: boolean
}

interface Payload {
  id: string
  feedType: string
  type: string
  key: string
  reason: string
  readTrackInfo: ReadTrackInfo
}

interface Reason {
  key: string
  text: string
  payload: Payload
}

interface DislikeMenu {
  title: string
  subtitle: string
  reasons: Reason[]
}

export interface RecommendPost {
  id: string
  readTrackInfo: ReadTrackInfo
  dislikeMenu: DislikeMenu
  user: User
  topic: Topic
  content: string
  pictures: Picture[]
  likeCount: number
  commentCount: number
  repostCount: number
  shareCount: number
  createdAt: Date
  type: string
}

export interface StoryPicture extends CommonImage {
  key: string
  cropperPosX: number
  cropperPosY: number
  width: number
  height: number
}

export interface StoryVideo {
  duration: number
  height: number
  type: string
  width: number
  image: {
    format: string
    picUrl: string
    thumbnailUrl: string
  }
}

export interface Story {
  type: 'STORY'
  id: string
  storyType: LiteralUnion<'PICTURE' | 'VIDEO'>
  status: LiteralUnion<'PUBLIC'>
  user: User
  emoji?: string
  video?: StoryVideo
  thumbnailVideo?: StoryVideo
  picture?: StoryPicture
  liked: boolean
  likeCount: number
  commentCount: number
  viewerCount: number
  createdAt: string
  likedUsers: User[]
  enablePictureComments: boolean
  isFeatured: boolean
}
