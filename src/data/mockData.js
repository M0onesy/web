export const demands = [
  {
    id: 'D-2026-001',
    company: '光谷智造装备',
    role: '总装工艺总监顾问',
    skillTags: ['装配工艺', '质量闭环', '产线节拍'],
    deadline: '72小时',
    budget: '¥12,000',
  },
  {
    id: 'D-2026-002',
    company: '江城新能源电机',
    role: '电驱系统失效分析导师',
    skillTags: ['故障诊断', 'FMEA', '试验设计'],
    deadline: '48小时',
    budget: '¥8,500',
  },
  {
    id: 'D-2026-003',
    company: '中部数控科技',
    role: '数控产线带教总工',
    skillTags: ['数控编程', '精益改善', '新人带教'],
    deadline: '96小时',
    budget: '¥15,600',
  },
]

export const expertProfiles = [
  {
    id: 'E-1001',
    name: '周建国',
    tenure: '37年制造经验',
    tags: ['总装工艺', '现场管理', '班组培训'],
    availableSlot: '周二-周五 09:00-17:00',
    reputation: 4.9,
  },
  {
    id: 'E-1002',
    name: '刘慧兰',
    tenure: '31年电机研发经验',
    tags: ['电驱系统', '故障复盘', '标准体系'],
    availableSlot: '周一-周四 13:00-20:00',
    reputation: 4.8,
  },
  {
    id: 'E-1003',
    name: '陈志强',
    tenure: '34年数控现场经验',
    tags: ['数控编程', '工装夹具', '工艺优化'],
    availableSlot: '周二-周六 08:30-16:30',
    reputation: 4.7,
  },
  {
    id: 'E-1004',
    name: '张珊',
    tenure: '29年质量体系经验',
    tags: ['质量管理', '流程审计', '风险控制'],
    availableSlot: '周一-周五 10:00-18:00',
    reputation: 4.9,
  },
]

export const matchResults = [
  {
    id: 'M-5101',
    demandId: 'D-2026-001',
    expertId: 'E-1001',
    score: 94,
    reason: '工艺标签重合度高，历史案例成功率 92%',
    riskHint: '建议增加青年学员双人跟班',
  },
  {
    id: 'M-5102',
    demandId: 'D-2026-001',
    expertId: 'E-1004',
    score: 83,
    reason: '质量端匹配良好，可补充流程规范',
    riskHint: '需配备企业内部工艺负责人协同',
  },
  {
    id: 'M-5103',
    demandId: 'D-2026-002',
    expertId: 'E-1002',
    score: 91,
    reason: '失效分析经验充足，项目节奏匹配',
    riskHint: '建议同步开通远程实验数据看板',
  },
  {
    id: 'M-5104',
    demandId: 'D-2026-002',
    expertId: 'E-1004',
    score: 78,
    reason: '风险治理能力强，技术深度中等',
    riskHint: '复杂技术结论需二次评审',
  },
  {
    id: 'M-5105',
    demandId: 'D-2026-003',
    expertId: 'E-1003',
    score: 96,
    reason: '岗位技能完全覆盖，带教记录优秀',
    riskHint: '建议提前锁定排产时间窗',
  },
  {
    id: 'M-5106',
    demandId: 'D-2026-003',
    expertId: 'E-1001',
    score: 84,
    reason: '现场组织能力突出，可辅助推进',
    riskHint: '需要追加数控专项支持资源',
  },
]

export const pointLedger = [
  {
    id: 'L-9001',
    account: '光谷智造装备',
    action: 'issue',
    value: '+1,200',
    timestamp: '2026-02-03 10:42',
    orderId: 'O-3201',
  },
  {
    id: 'L-9002',
    account: '周建国',
    action: 'receive',
    value: '+960',
    timestamp: '2026-02-03 12:20',
    orderId: 'O-3201',
  },
  {
    id: 'L-9003',
    account: '周建国',
    action: 'redeem',
    value: '-400',
    timestamp: '2026-02-05 09:10',
    orderId: 'R-7781',
  },
  {
    id: 'L-9004',
    account: '江城新能源电机',
    action: 'issue',
    value: '+800',
    timestamp: '2026-02-10 15:22',
    orderId: 'O-3207',
  },
  {
    id: 'L-9005',
    account: '刘慧兰',
    action: 'receive',
    value: '+650',
    timestamp: '2026-02-10 17:05',
    orderId: 'O-3207',
  },
  {
    id: 'L-9006',
    account: '风险复核池',
    action: 'review',
    value: '-120',
    timestamp: '2026-02-12 11:40',
    orderId: 'A-1010',
  },
]

export const evidenceRecords = [
  {
    id: 'EV-10001',
    businessId: 'O-3201',
    hash: '0x9fA31c7Bf21eD8...',
    receipt: 'chain-receipt-771',
    timestamp: '2026-02-03 12:31',
  },
  {
    id: 'EV-10002',
    businessId: 'L-9003',
    hash: '0x8c31Bb72Fca65a...',
    receipt: 'chain-receipt-778',
    timestamp: '2026-02-05 09:15',
  },
  {
    id: 'EV-10003',
    businessId: 'A-1010',
    hash: '0x6d113aA88Ffd2c...',
    receipt: 'chain-receipt-792',
    timestamp: '2026-02-12 11:45',
  },
]

export const serviceSkuList = [
  {
    name: '轻咨询',
    serviceMode: '线上 1v1 咨询',
    price: '¥499 / 次',
    deliveryCycle: '48小时内交付建议单',
    boundary: '单问题、单流程诊断',
    scene: '快速排障、流程问诊',
  },
  {
    name: '重服务',
    serviceMode: '驻场 + 远程协同',
    price: '¥12,000 / 项目起',
    deliveryCycle: '2-4 周',
    boundary: '单产线专项改进',
    scene: '产线瓶颈突破、降本提效',
  },
  {
    name: '知识包',
    serviceMode: '结构化经验内容授权',
    price: '¥2,980 / 套',
    deliveryCycle: '72小时',
    boundary: '标准化模板 + 案例库',
    scene: '青年培训、企业内训',
  },
  {
    name: '带教套餐',
    serviceMode: '专家 + 青年双向带教',
    price: '¥18,800 / 月',
    deliveryCycle: '按月迭代',
    boundary: '20人以内小班制',
    scene: '岗位接续、梯队建设',
  },
]

export const enterpriseMetrics = [
  { label: '当日匹配需求', value: 48, trend: '+12%' },
  { label: '平均匹配耗时', value: '19分钟', trend: '-18%' },
  { label: '高置信任务占比', value: '82%', trend: '+6%' },
  { label: '异常订单拦截', value: 7, trend: '+2件' },
]
