declare namespace princess {

  type App = {
    version: string
    updateTime: Date
    revision: number
  }

  type Res = {
    version: string
    updateTime: Date
    indexName: string
  }

  type Version = {
    app: App
    res: Res
  }

  interface VersionLatest extends Version {}

  type AppsPassPramas = {
    version?: string
  }

  /**
   * パスパラメータがない場合は配列で返す
   */
  type VersionApps<T> = T extends AppsPassPramas ? App : App[]

  type AssetsPassPramas = {
    version?: number
  }

  /**
   * パスパラメータがない場合は配列で返す
   */
  type VersionAssets<T> = T extends AssetsPassPramas ? Res : Res[]

  type Costume = {
    id: number
    name: string
    description: string
    resourceId: string
    modelId: string
    sortId: number
  }

  type BonusCostume = {
    id: number
    name: string
    description: string
    resourceId: string
    modelId: string
    sortId: number
  }

  type CenterEffect = {
    id: number
    description: string
    idolType: number
    specificIdolType?: number
    attribute: number
    value: number
  }

  type Skill = {
    id: number
    description: string
    effectId: number
    evaluation: number
    duration: number
    interval: number
    probability: number
    value: number[]
  }

  type Cards = {
    id: number
    name: string
    sortedId: number
    idolId: number
    idolType: number
    resourceId: string
    rarity: number
    eventId?: number
    extraType: number
    costume?: Costume
    bonusCostume?: BonusCostume
    awakeningText: string
    flavorText: string
    flavorTextAwakened: string
    levelMax: number
    levelMaxAwakened: number
    vocalMin: number
    vocalMac: number
    vocalMinAwakened: number
    vocalMaxAwakened: number
    vocalMasterBonus: number
    danceMin: number
    danceMac: number
    danceMinAwakened: number
    danceMaxAwakened: number
    danceMasterBonus: number
    visualMin: number
    visualMac: number
    visualMinAwakened: number
    visualMaxAwakened: number
    visualMasterBonus: number
    life: number
    centerEffect?: CenterEffect
    centerEffectName: string
    skill?: Skill[]
    skillName: string
    addDate?: Date
  }[] | []

  type Schedule = {
    beginDate: Date
    endDate: Date
    pageBeginDate: Date
    pageEndDate: Date
    boostBeginDate?: Date
    boostEndDate?: Date
  }

  type EventPassParams = {
    id: number
  }

  interface PrincessEvent {
    id: number
    type: number
    appealType?: number
    schedule: Schedule
    name?: string
  }

  /**
   * パスパラメータがない場合は配列で返す
   */
  type Events<T> = T extends EventPassParams ? PrincessEvent : PrincessEvent[]

  type IdolPoint = {
    idolId: number
    borders: number
  }

  interface Rankings {
    eventPoint: number[]
    highScore: number[]
    loungePoint: number[]
    idolPoint?: IdolPoint[]
  }

  type RankingEventPoint = {
    summaryTime: Date
    updateTime: Date
    count: number
  }[]

  type RankingEventPointLogData = {
    score: number
    summaryType: Date
  }

  type RankingEventPointLogs = {
    rank: number
    data: RankingEventPointLogData[]
  }[]

  type RankingIdolPointLogData = {
    score: number
    summaryType: Date
  }

  type RankingIdolPointLogs = {
    rank: number
    data: RankingIdolPointLogData[]
  }[]

  interface Lounges {
    id: string
    viewerId: string
    name: string
    comment: string
    userCount: number
    userCountLimit: number
    fan: number
    masterName: string
    createTime: Date
    updateTime: Date
  }

  type LoungeEventHistory = {
    eventId: number
    eventName: string
    summaryTime: Date
    rank: number
    score: number
  }[]

  interface LoungeSearch {
    id: string
    viewerId: string
    name: string
    updateTime: Date
  }

  type ElectionSchedule = {
    beginDate: Date
    endDate: Date
    pageBeginDate: Date
    pageEndDate: Date
    resultOpenDate: Date
  }

  type Dramas = {
    id: number
    name: string
    roles: {
      id: number
      name: string
    }[]
  }

  interface Election {
    id: number
    name: string
    schedule: ElectionSchedule
    dramas: Dramas[]
  }

  type ElectionCurrentData = {
    idol_id: number
    idol_name: string
    score: number
    rank: number
  }

  type ElectionCurrent = {
    id: number
    name: string
    summaryTime: Date
    data: ElectionCurrentData[]
  }[]

}