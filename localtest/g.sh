curl -X POST \
  https://wethekootest.myshopify.com/api/2022-10/graphql.json \
  -H 'Content-Type: application/graphql' \
  -H 'X-Shopify-Storefront-Access-Token: 4b6545a76f9ee2aa6d724320cd4f7002' \
  -d '
  {
    products(first: 250) {
      edges {
        node {
            id
            title
            handle
            featuredImage{
                url
            }
            vendor
            variants(first: 250) {
                edges {
                    node { 
                        price{
                            amount
                        }
                         
                    }
                }
            }
        }
      }
    }
  }
  ' > localtest\g.json