const moment = require('moment');
moment.locale("zh-CN")
module.exports = {
  title:'教程',
  description:'是的我在瞎扯',
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/favicon.ico',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SqlServer', link: '/sqlserver/install/' },
      { text: 'MySql', link: '/sqlserver/synopsis' },
    ],
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
    // sidebar: [
    //   {
    //     title: 'SqlServer教程',   // 必要的
    //     sidebarDepth: 2,    // 可选的, 默认值是 1
    //     children: [
    //       ["sqlserver/Description", "什么是 SQL Server?"],
    //       ["sqlserver/install", "安装"],
    //       ["sqlserver/configuration", "配置"],
    //       ["sqlserver/select_data", "一.查询数据"],
    //       ["sqlserver/data_sorting", "二.数据排序"],
    //       ["sqlserver/astrict_retrun_row", "三.指定返回行"],
    //       ["sqlserver/filter_data", "四.过滤数据"],
    //       ["sqlserver/linked_list", "五.表的连接"],
    //       ["sqlserver/grouping", "六.数据分组"],
    //       ["sqlserver/subquery", "七.子查询"],
    //       ["sqlserver/set_operation", "八.集合运算符"],
    //       ["sqlserver/update_data", "九.修改数据"],
    //       ["sqlserver/data_definition", "十.数据定义"],
    //       ["sqlserver/constraint", "十一.约束"],
    //       ["sqlserver/data_view", "十二.视图"],
    //       ["sqlserver/function", "十三.函数"],
    //       ["sqlserver/Backup _and_restore", "十四.备份和还原"],
    //       ["sqlserver/Detach_and_attach", "十四.分离和附加"],
    //       ["sqlserver/jurisdiction", "十四.权限"],
    //     ]
    //   }
    // ]
  },
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
