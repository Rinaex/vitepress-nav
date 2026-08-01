export interface NavDomain {
  /** 域名标签，如 "PC版"、"手机版"、"反代" */
  label: string
  /** 域名链接 */
  url: string
  /** 域名类型：主站 / 镜像 / 移动端 */
  type?: 'primary' | 'mirror' | 'mobile'
}

export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接（单域名时直接跳转，多域名时作为主站备用） */
  link: string
  /** 多域名列表（存在且长度 > 1 时启用悬浮弹窗交互） */
  domains?: NavDomain[]
}
