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

export const trackItemCollectionQuery = `
{
    trackCollection {
        items {
            sys {
                id
            }
            date
            title
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
