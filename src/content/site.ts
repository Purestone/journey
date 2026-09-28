export type ChapterLayout = 'prologue' | 'interlude' | 'monologue'

export type Chapter = {
  id: string
  number: string
  label: string
  title: string
  image: string
  imageAlt: string
  body: string[]
  layout: ChapterLayout
  imageCaption?: string
  overlayTitle?: string
  overlayBody?: string
  traits?: { label: string; text: string }[]
}

export type SiteContent = {
  siteName: string
  chapters: Chapter[]
  about: {
    id: string
    name: string
    role: string
    image: string
    imageAlt: string
    paragraphs: string[]
  }
}

/**
 * 站点内容与页面表现分开存放。
 * 文案来自用户提供的天赐庄游记；图片来自 Wikimedia Commons（苏州大学相关公开照片）。
 */
export const siteContent: SiteContent = {
  siteName: 'Journey',
  chapters: [
    {
      id: 'section-01',
      number: '01',
      label: '南门入校',
      title: '最美校园，天赐庄',
      layout: 'prologue',
      image: '/images/section-01.jpg',
      imageAlt: '苏州大学天赐庄校区大草坪与钟楼远景',
      body: [
        '苏州大学有最美校园之一的称号，实际上指代的是天赐庄校区。我虽作为南京铁道学院苏州校区的一员，却驻扎在苏州城外的阳澄湖，鲜有去城内苏州大学参观的契机，即使去了，也是为了考试，可谓是来去匆匆，没有驻足欣赏，连走马观花都算不上。所幸，这天阳光和煦，我也有得是时间，于是誓要把我久闻其名、不见其景的兄弟学校游览一遍。',
        '我是从学校的南门进入的，是一个很小的门，连接着学校的最南边与门口的拥挤的小商业区。先走过一段窄窄的弯道，映入眼帘的就是青绿的一大片方形草地。法学院楼与钟楼分别坐落南北隔着草地相望，两旁是子实堂、旧体育馆等旧时建筑群，将草地包裹起来，形成一个天井的格局。四周的建筑不是统一制式，而是各有特点，别具一格——有现代化的，有近代的；有爬满绿枝的，有干净大气的。无论从草地的哪一边向对面望去，都是独特的景观。',
      ],
    },
    {
      id: 'section-02',
      number: '02',
      label: '旧体育馆',
      title: '黑石点缀红砖',
      layout: 'interlude',
      image: '/images/section-02.jpg',
      imageAlt: '苏州大学博物馆，原东吴大学司马德体育馆外墙',
      imageCaption: '司马德体育馆旧址',
      body: [
        '关于旧体育馆的建筑风格，还有一段趣事。当时修建体育馆时并无更多的预算购置红砖，于是校长动员学生找来各种石头作为建材。最后在精妙的设计之下，才形成了我们现在所看到的黑石点缀红砖的外墙。',
        '在了解这段趣事后，顿时感觉这样的设计是在有限的条件下的神来之笔的发挥，我对这栋建筑更加喜欢了。',
      ],
    },
    {
      id: 'section-03',
      number: '03',
      label: '林堂',
      title: '钟楼：美丽符号',
      layout: 'interlude',
      image: '/images/section-03.jpg',
      imageAlt: '苏州大学钟楼林堂近景：花窗、拱门与旗杆',
      imageCaption: '初称「林堂」',
      body: [
        '向北走去，便是钟楼。它初称「林堂」，是为了纪念东吴大学的创始人林乐知先生。1904年，东吴大学的孙校长是这样向大会报告的：「我怀疑在全中国能否找到像我们学校大楼这样漂亮的建筑，或者更适合我们工作的大楼。主楼教室敞亮，通风和光照良好。图书馆、实验室和办公环境均是如此。会议大厅十分漂亮，所有的参观者都非常羡慕——大约500人可以在内舒适就座。」',
        '直至今日，钟楼的美依然在全中国大学的楼宇中凸显，有无数游客进入苏州大学与之合照，每年有大批毕业生在此摄影留念。那花窗，那拱门，那立着旗的大钟，已然成为苏州大学的美丽符号。',
      ],
    },
    {
      id: 'section-04',
      number: '04',
      label: '文星阁',
      title: '方塔对视',
      layout: 'monologue',
      image: '/images/section-04.jpg',
      imageAlt: '苏州大学天赐庄校区文星阁（方塔）',
      overlayTitle: '文星宝阁',
      overlayBody:
        '古朴的风格不像是近时修建的。它与教学楼比并不高，但可以想见，放在以前也算是「手可摘星辰」的类型。',
      body: [
        '因为校区整体是东西瘦、南北长的，我只要向北移步，便可以欣赏到大部分的面貌。但走着走着，左手边的一座塔吸引了我。凑近一看，我才明白，它竟然就是大名鼎鼎的方塔「文星阁」——林堂是苏州大学的钟楼，文星阁则是老苏州城的钟楼。',
        '万历年间，苏州葑门彭氏家族科举屡次榜上有名，认为是「文曲星」应验，于是合资修建此阁。内题「文星宝阁」大字，并悬挂大钟。自建成以来，一直是附近名儒雅士的讲学会文之所。数百春秋过去，如今文星阁隐匿在一座大学的大树之后，静静地观望着、陪同着新一代的活力学子。在与文星阁的「对视」中，我仿佛感受到了苏州大学学子的肩负与我的肩负之迥然。我会心一笑，只向前走去。',
      ],
    },
  ],
  about: {
    id: 'about',
    name: 'Purestone',
    role: '',
    image: '/images/about.jpg',
    imageAlt: 'Purestone GitHub 主页插画',
    paragraphs: [
      'But I still',
      "haven't found",
      "what I'm looking for.",
      'GitHub: @Purestone',
    ],
  },
}
