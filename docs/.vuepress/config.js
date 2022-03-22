const moment = require('moment');//引入插件--自动追踪更新日期
moment.locale("zh-CN")//设置为中国时间
module.exports = {
  base:'/MyNotes/',//部署到GitHub
  title:'教程',
  description:'是的我在瞎扯',
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/favicon.ico',
    //网站信息
    head: [
      // ["link", { rel: "icon", href: "docs\.vuepress\public\favicon.ico" }],
      ["meta",{name: "author",content:"尚山"}],
      ["meta",{name: "keywords",content:"记录一些个人笔记"}],
    ],
    //顶部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SqlServer', link: '/sqlserver/install/' },
      { text: 'MySql', link: '/sqlserver/synopsis' },
    ],
    //侧边菜单栏
    sidebar: [
      ["sqlserver/Description", "SQL Server"],
          ["sqlserver/install", "安装"],
          ["sqlserver/configuration", "配置"],
          ["sqlserver/select_data", "一、  查询数据"],
          ["sqlserver/data_sorting", "二、 数据排序"],
          ["sqlserver/astrict_retrun_row", "三、   指定返回行"],
          ["sqlserver/filter_data", "四、  过滤数据"],
          ["sqlserver/linked_list", "五、  表的连接"],
          ["sqlserver/grouping", "六、  数据分组"],
          ["sqlserver/subquery", "七、  子查询"],
          ["sqlserver/set_operation", "八、  集合运算符"],
          ["sqlserver/update_data", "九、  修改数据"],
          ["sqlserver/data_definition", "十、  数据定义"],
          ["sqlserver/constraint", "十一、约束"],
          ["sqlserver/data_view", "十二、视图"],
          ["sqlserver/function", "十三、函数"],
          ["sqlserver/Backup _and_restore", "十四、备份和还原"],
          ["sqlserver/Detach_and_attach", "十四、分离和附加"],
          ["sqlserver/jurisdiction", "十四、权限"],
    ],
   
  },
  //插件
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLL")
        }
      }
    ]
  ],
}
