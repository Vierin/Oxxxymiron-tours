export const tourItemCollectionQuery = `
{
    tourItemCollection {
        items {
            city
            place
            date
            soldOut
            country
            ticketLink
            videoLink
            sys {
                id
            }
        }
    }
}
`;

export const newsItemCollectionQuery = `
{
    newsItemCollection {
        items {
            sys {
                id
            }
            title
            date
            cover {
                url
            }
        }
    }
}
`;

export const newsItemQuery = (id) => `
    {
        newsItem(id:  "${id}") {
            title
            date
            description {
                json
            }
            cover {
                url
            }
            sys {
                id
            }
        }
    }
`;

export const trackItemCollectionQuery = `
{
    trackCollection {
        items {
            sys {
                id
            }
            date
            title
            description
            link {
                url
            }
            cover {
                url
            }
        }
    }
}
`;
