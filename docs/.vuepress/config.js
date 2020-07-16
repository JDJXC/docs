
module.exports = {
    title:"简单极限的vuepress",
    description:"简单极限的笔记",
    head: [
      ['meta', { name: 'keywords', content: '简单极限的vuepress' }],
      ['meta', { name: 'author', content: '简单极限' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      lastUpdated: '更新时间',
        //导航栏 Logo
      logo: '/assets/img/logo1.gif',
      //navbar: false,//来禁用所有页面的导航栏：
      nav: [
        { text: '主页', link: '/' },
        { text: '指导', link: '/guide/' },
        {
            text: '分类',
            items: [
                {
                    text: '分组1',
                    items: [
                      { text: '主页', link: '/' },
                      {text: '主页', link: '/'}
                    ]
                  },
                  {
                    text: '分组1',
                    items: [
                      { text: '主页', link: '/'  },
                      { text: 'Group2', link: '/about' }
                    ]
                  }
            ]
          },
          { text: '其他', link: 'https://google.com' },
      ],
      sidebar: [
          '',
          '/about',
          {
            title: '美丽的css',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/css/c-aaa',
              '/css/c-bbb',
              '/css/c-ccc',
            ]
          },
      ]
    }
   
  }