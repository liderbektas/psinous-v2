export const breadcrumbs = [
    {
        text: 'Ana Sayfa',
        slug: '/',
    },
    {
        text: 'Biz Kimiz',
        slug: '/about',
        children: [
            {
                text: 'İş Birlikçelirimiz',
                slug: '/our-collabration'
            }
        ]
    },
    {
        text: 'Ekibimiz / Birimlerimiz',
        slug: '/our-member',
        children: [
            {
                text: '2024-2025',
                slug: '/2024-2025'
            },
            {
                text: '2023-2024',
                slug: '/2023-2024'
            }
        ]
    },
    {
        text: 'Etkinliklerimiz',
        slug: '/activity'
    },
    {
        text: 'Blog',
        slug: '/blog'
    },
    {
        text: 'İletişim',
        slug: '/contact'
    },
]